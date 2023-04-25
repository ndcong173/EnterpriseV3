import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Comment from "./Comment";

export default function PostPage() {
    const{id} = useParams()
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/post/${id}`).then(response => {
            setPost(response.data);
        });
    }, [id]);

    if (!post) return '';
    return(
        <div className="bg-reddit_dark pt-20 grid grid-cols-[1fr_4fr_1fr]">
            <div></div>
                <Comment id={ id }/>
            <div></div>
        </div>
    )
}