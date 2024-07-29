import {rerenderEntireTree} from "../render";

let State = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCounts: '15'},
            {id: 2, message: 'It`s my first post', likesCounts: '32'},
            {id: 3, message: 'Hello world', likesCounts: '37'},
            {id: 4, message: 'Hello bro', likesCounts: '7'},
            {id: 5, message: 'hey', likesCounts: '3'},
            {id: 6, message: 'I`ll call you back', likesCounts: '9'},
        ],
        newPostText: "IT_Ilya"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Ilya'},
            {id: 3, name: 'Nastya'},
            {id: 4, name: 'Olga'},
            {id: 5, name: 'Viktor'},
        ],
        messages: [
            {id: 1, message: 'Hello guys!!!'},
            {id: 2, message: 'Hey,buddy!'},
            {id: 3, message: 'Hey, how is it going?'},
        ]
    }
}

window.State = State;

export let addPost = () => {
    let newPost = {
        id: 7,
        message: State.profilePage.newPostText,
        likesCounts: 0,
    };
    State.profilePage.posts.push(newPost);
    State.profilePage.newPostText = '';
    rerenderEntireTree(State);
}

export let updateNewPostText = (newText) => {
    State.profilePage.newPostText = newText;
    rerenderEntireTree(State);
}

export default State;