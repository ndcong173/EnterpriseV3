import PostForm from "./PostForm";

export default function PostViewModal(props) {
    return (
        <div className="w-screen min-h-screen fixed top-0 left-0 z-20 flex" style={{ backgroundColor: 'rgb(0,0,0,.6)' }}>
            <div className="bg-reddit_dark border border-reddit_dark-brightest p-5 w-3/4 md:w-1/2 mx-auto rounded-md text-reddit_text self-center">
                {/* ID: {props.id} */}
                {/* {posts.length > 0 && posts.map(post => (
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
                ))} */}
            </div>

        </div>
    )
}