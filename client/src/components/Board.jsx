import BoardHeader from "./BoardHeader";
import PostForm from "./PostForm";
import PostsListing from "./PostsListing";

export default function Board() {
    return (
        <div>
            <BoardHeader />
            <div className="grid grid-cols-[1fr_4fr_1fr]">
                <div></div>
                <div>
                    <PostForm />
                    <PostsListing />
                </div>
                <div></div>
            </div>

        </div>
    )
}