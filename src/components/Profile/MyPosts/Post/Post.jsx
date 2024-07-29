import React from "react";
import s from "./Post.module.css";

const Post = (props) => {

    return <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&s" alt=""/>
        {props.message}

        <div>
            <span>Like</span> {props.likesCounts}
        </div>
    </div>
}


export default Post;