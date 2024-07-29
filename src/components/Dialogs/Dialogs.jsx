import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.data.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.data.messages.map(m => <Message message={m.message}/>);

    let text = React.createRef();
    let add = () => {
        let text1 = text.current.value;
        alert(text1)
    }
   
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={text}></textarea>
                <div>
                    <button onClick={add}>AddResponse</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;