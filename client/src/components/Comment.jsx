import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import Post from "./Post";
import RootCommentContext from "./RootCommentContext";
import axios from "axios";

export default function Comment(props) {
    
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    function refreshComments() {
        axios.get('/post/root/' + props.id).then(response => { setComments(response.data) })
    }

    useEffect(() => {
        if (props.comment && props.comment !== post) {
            setPost(props.comment);
        } else {
            axios.get('/post/' + props.id).then(response => {
                setPost(response.data);
            });
        }
    }, [props.id, props.comment]);

    useEffect(() => {
        refreshComments()
    }, [props.id]);

    return (
        <div className="block text-reddit_text py-4">
            {!!post && !!post._id && (
                <>
                    {post && (
                        <Post {...post} open={true} />
                    )}
                    <hr className="border-reddit_border my-4" />
                    <CommentForm onSubmit={() => refreshComments()}
                        rootId={post._id} parentId={post._id} showAuthor={true} />
                    <hr className="border-reddit_border my-4" />
                    <RootCommentContext.Provider value={{ refreshComments }}>
                        <Comments parentId={post._id} rootId={post._id} comments={comments} />
                    </RootCommentContext.Provider>
                </>
            )}
        </div>
    )
}
