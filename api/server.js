const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const cookieParser = require('cookie-parser')
const { default: mongoose } = require('mongoose')


const User = require('./models/User')
const { genSaltSync } = require('bcrypt')
const Post = require('./models/Post')


const bcryptSalt = genSaltSync(12)
const app = express()
const jwtSecret = 'slkjhfwieoshrowitysjbviasrhlsjzbowi'
app.use(express.json())

mongoose.connect('mongodb+srv://test:123@enterprise.rmxxqoq.mongodb.net/?retryWrites=true&w=majority')
console.log('MongoDB connected')

app.use(cookieParser())
app.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true
}))

// app.get('/',(req, res)=>{
//     res.send('ok')
// })

function getUserDataFromReq(req) {
    return new Promise((resolve, reject) => {
        jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err;
            resolve(userData);
        })
    })
}

app.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body

    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
            role,
        })
        res.json(userDoc)
    } catch (error) {
        res.status(422).json(error)
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
        if (passOk) {
            jwt.sign({
                email: userDoc.email,
                id: userDoc._id
            }, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(userDoc);
            });
        } else {
            res.status(422).json('pass not ok');
        }
    } else {
        res.json('not found');
    }
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) throw err
            const { name, email, _id, role } = await User.findById(userData.id)
            res.json({ name, email, _id, role })
        })
    } else {
        res.json(null)
    }
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true)
})

app.post('/post', (req, res) => {
    const { token } = req.cookies
    const { title, content, parentId, rootId } = req.body
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err
        const postsDoc = await Post.create({
            author: userData.id,
            title,
            content,
            postAt: Date.now(),
            parentId,
            rootId,
        })
        res.json(postsDoc)
    })
})

app.get('/post', async (req, res) => {
    res.json(await Post.find({rootId:null}).populate('author'))
})

app.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    res.json(await Post.findById(id).populate('author'));
})

app.get('/post/root/:rootId',async (req, res)=>{
    const { rootId } = req.params;
    res.json(await Post.find({rootId:rootId}).populate('author'));
})

const PORT = 4000
app.listen(PORT)
console.log('Server start on port', PORT)