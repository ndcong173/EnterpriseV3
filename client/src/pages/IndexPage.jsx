
import BoardHeader from '../components/BoardHeader'
import Header from '../components/Header'
import PostForm from '../components/PostForm'
import PostModal from '..//components/PostModal'
import AuthModal from '../components/AuthModal'
import Post from '../components/Post'
import { useEffect, useState } from 'react'
import axios from 'axios'


export default function IndexPage() {

  const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('/post').then(response => {
            setPosts(response.data)
        })
    }, [])


  return (
    <div className=''>
      <PostModal className='hidden' />
      <BoardHeader />
      <AuthModal />
      <div className='grid grid-cols-[1fr_4fr_1fr]'>
        <div></div>
        <div>
          <PostForm />
          {posts.length > 0 && posts.map(post => (
            <Post {...post}/>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  )
}