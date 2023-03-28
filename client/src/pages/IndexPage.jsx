
import BoardHeader from '../components/BoardHeader'
import Header from '../components/Header'
import PostForm from '../components/PostForm'
import PostModal from '..//components/PostModal'
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
      <PostForm />
      {posts.length > 0 && posts.map(post => (
        <div className="px-6 text-reddit_text mb-4">
          <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
            <h5 className='text-reddit_text-darker mb-1 text-sm'>Posted by {post.author.name} 5 hours ago</h5>
            <h2 className='text-2xl mb-3'>{post.title}</h2>
            <div className='text-sm leading-6'>
              <p>
                {post.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}