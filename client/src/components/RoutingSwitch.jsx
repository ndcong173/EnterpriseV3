import { useEffect, useState } from "react";
import Board from "./Board";
import PostModal from "./PostModal";
import PostPage from "./PostPage";
import { Route, Routes, useLocation } from "react-router-dom";

export default function RoutingSwitch() {
    let location = useLocation();
    let postPopupId = null;

    if (location.state && location.state.postId) {
        location.pathname = '/';
        postPopupId = location.state.postId;
    }

    const [postOpen, setPostOpen] = useState(false);

    useEffect(() => {
        setPostOpen(true);
      }, [postPopupId]);
    
      useEffect(() => {
        postPopupId = null;
      }, [postOpen]);

    return (
        <div>
            {postPopupId && (
                <PostModal id={postPopupId} open={postOpen} onClickOut={() => setPostOpen(false)}/>
            )}
            <Routes location={location}>
                <Route exact path='/' Component={Board} />
                <Route exact path='/post/:id' Component={PostPage} />
            </Routes>
        </div>

    )
}