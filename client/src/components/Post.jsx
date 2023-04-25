import { format } from "date-fns";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PostContent from "./PostContent";
import { UserContext } from "./UserContext";
import AuthModalContext from "./AuthModalContext";

export default function Post(props) {

    const { user } = useContext(UserContext)
    const authModal = useContext(AuthModalContext)


    const postClasses = "block p-2 rounded-md " + (props.open ? "" : "hover:cursor-pointer hover:border-white border-reddit_border bg-reddit_dark-brighter border")
    const handleLink = (e) => {
        e.preventDefault()
        if (user) {
            window.location = '/post/' + props._id
        } else {
            authModal.setShow('login')
        }
    }
    return (
        <div className=" text-reddit_text mb-4">
            {props.open && (
                <div className={postClasses}>
                    <PostContent {...props} />
                </div>
            )}
            {!props.open && (
                <Link to={{ pathname: '/post/' + props._id }} state={{ postId: props._id }} className={postClasses} >
                    <PostContent {...props} />
                </Link>
            )}

        </div>

    )
}