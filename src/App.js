import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends"
import {updateNewPostText} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Footer/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile profilePage={props.appState.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path='/dialogs' element={<Dialogs data={props.appState.dialogsPage}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/friends' element={<Friends/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
