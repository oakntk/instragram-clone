import React, { useEffect, useState } from "react";
import '../css/Post.css'
import axios from "axios";

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(
                "https://run.mocky.io/v3/a210a8f1-530c-42f1-b46f-25bd65d558fa"
            );
            setPosts(data.data.feeds);
        };
        getData();
    }, []);

    console.log("data: ", posts);


    return (
        <>
            {posts.map((post) => {
                console.log(post.data)
                return (
                    <div className='post'>
                        <div className='postHeader'>
                            <img className='avatar' src={post.userCover} />
                            <h5 className="username">{post.username}</h5>
                        </div>
                        <img className="postImg" src={post.image.url} />
                        <img className="heart" src="/img/heart.png" />
                        <img className="comment" src="/img/bubble-chat.png" />
                        <img className="share" src="/img/send.png" />
                        <img className="save" src="/img/save-instagram.png" />
                        <div className="postText">
                            <h5>{post.username}</h5>
                            <h5 className="postTextCaption">{post.image.caption}</h5>
                            <h5 className='postTextUserCover'>{post.comments.userCover}</h5>
                            <h5 className='postTexUsername'>{post.comments.username}</h5>
                            <h5 className='postTextComment'>{post.comments.commentText}</h5>
                        </div>
                    </div>

                );
            })}
        </>
    )
};

export default Post