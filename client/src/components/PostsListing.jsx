import { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

export default function PostsListing(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      axios.get('/post').then(response => {
        setPosts(response.data)
      })
    }, [])
    return (
        <div>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
        </div>

    )
}