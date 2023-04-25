import { useEffect, useState } from "react";
import Post from "./Post"
import axios from "axios";
import PostContent from "./PostContent";
import ClickOutHandler from "react-clickout-handler";
import { Navigate } from "react-router-dom";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import RootCommentContext from "./RootCommentContext";
import Comment from "./Comment";

export default function PostModal(props) {


    const visibleClass = props.open ? 'block' : 'hidden';
    const [post, setPost] = useState({});

    // useEffect(() => {
    //     axios.get('/post/' + props.id).then(response => {
    //         setPost(response.data);
    //     });
    //     refreshComments()
    // }, [props.id]);

    function close() {
        setPost({});
        props.onClickOut();
    }
   

    return (
        <div className={"w-screen h-screen fixed top-0 left-0 z-20 flex " + visibleClass} style={{ backgroundColor: 'rgba(0,0,0,.6)' }}>
            <ClickOutHandler onClickOut={() => close()}>
                <div className="bg-reddit_dark border border-reddit_dark-brightest p-5 w-3/4  lg:w-1/2 mx-auto rounded-2xl text-reddit_text self-center">
                    <div className="block overflow-scroll" style={{ maxHeight: "calc(100vh - 200px)" }}>
                        <Comment id={props.id}/>
                    </div>
                </div>
            </ClickOutHandler>
        </div>
    )
}