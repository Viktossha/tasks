import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (newMessage: string) => void
}

export const FullInput = (props: FullInputPropsType) => {

    let [title, setTitle] = useState('')
    console.log('input rendering')
    console.log(title)

    const onChangeInputHandler = (e:  ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    const onClickHandler = () => {
        props.addMessage(title);
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};