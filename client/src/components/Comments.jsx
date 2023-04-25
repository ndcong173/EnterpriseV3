import { format } from "date-fns"
import Button from "./Button"
import CommentForm from "./CommentForm"
import { useState, useContext } from "react"
import axios from "axios"
import RootCommentContext from "./RootCommentContext"

export default function Comments(props) {

    

    const comments = props.comments.filter(comment => props.parentId === comment.parentId)
    const [showReply, setShowReply] = useState(false)

    const rootCommentInfo = useContext(RootCommentContext)


    return (
        <div className={'mt-2'}>
            {comments.map(comment => {
                const replies = props.comments.filter(c => c.parentId === comment._id)
                return (
                    <div>
                        <div className="flex">
                            <div className="bg-reddit_text w-12 h-12 rounded-full mr-2" />
                            <div className="py-2 px-2 text-lg">{comment.author.name}</div>
                            <div className="py-4 px-3 text-xs text-reddit_text-darker">{format(new Date(comment.postAt), "MM/dd/yyyy 'at' h:mm a")}</div>
                        </div>
                        <div className="border-l-2 border-reddit_border pl-10 pb-0 ml-6 text-reddit_text">
                            {comment.title}
                            <div>
                                <button className="mt-1" onClick={() => setShowReply(comment._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                    </svg>
                                </button>
                                {comment._id === showReply && (
                                    <CommentForm
                                        parentId={comment._id}
                                        rootId={props.rootId}
                                        onSubmit={() => { 
                                            setShowReply(false);
                                            // fetchReplies(comment._id);
                                            rootCommentInfo.refreshComments()}}
                                        showAuthor={false}
                                        onCancel={e => setShowReply(false)}
                                    />
                                )}
                                { replies.length > 0 &&(
                                    <Comments comments={props.comments} parentId={comment._id} rootId={props.rootId} />
                                )}
                            </div>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}