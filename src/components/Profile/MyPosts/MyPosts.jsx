import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post"


const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCounts={p.likesCounts} id={p.id}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div className={s.postblock}>
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    </div>
}

export default MyPosts;