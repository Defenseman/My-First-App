import React from "react";
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import {updateNewPostText} from "../../redux/state";



const Profile = (props) => {
    return <div className={s.profile}>
        <div className={s.profileMainPicture}>
            <img src='https://www.komar.de/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/S/H/SHX8-087_1568286487.jpg' alt="text"></img>
        </div>
        <div className={s.profileInfo}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGK3diR3Zi-mnOXEaj-3ewmFyRYVxGzVzZw&s' alt="text"></img>
        </div>
        <MyPosts posts={props.profilePage.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
}

export default Profile;