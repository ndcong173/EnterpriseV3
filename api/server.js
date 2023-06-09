const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const cookieParser = require('cookie-parser')
const { default: mongoose } = require('mongoose')


const User = require('./models/User')
const { genSaltSync } = require('bcrypt')


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

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt)
        })
        res.json(userDoc)
    } catch (error) {
        res.status(422).json(e)
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
            const { name, email, _id } = await User.findById(userData.id)
            res.json({ name, email, _id })
        })
    } else {
        res.json(null)
    }
})

app.post('/logout', (req, res) => {
    res.cookie('token', '').json(true)
})


const PORT = 4000
app.listen(PORT)
console.log('Server start on port', PORT)