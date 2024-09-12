import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ]
    )

    const addMessage = (newMessage: string) => {
        console.log('addMessage')
        setMessage([{message: newMessage}, ...message])
    }


    let [title, setTitle] = useState('')
    console.log(title)
    const callbackButtonHandler = () => {
        setTitle('')
        addMessage(title)
    }


    console.log('app rendering')
    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <Button callBack={callbackButtonHandler} title={'+'}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
