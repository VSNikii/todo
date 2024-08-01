import React, { useState } from "react";
import './main.module.scss';
import AddNote from "../AddNote/AddNote";
import Note from "../Note/Note";


export default function Main() {
    const [isOpen, setIsOpen] = useState(false);

        const [note, setNote] = useState({});

    const onClickOpen = () => {
        setIsOpen(true);
    }
    console.log(note);
    return (
        <div>

            <div className='main d-flex flex-column justify-center align-center'>
                <h1>Todo List</h1>
                <div className="main__inner d-flex">
                    <div className="inner__search-block d-flex justify-between">
                        <input className="search" type="text" placeholder='Найти заметку' /><img className='search--img' src='/img/search.svg' alt="search" />
                    </div>
                    <button className="inner--button filter d-flex align-center">Text <img className='ml-10' src="/img/down-arrow.svg" alt="down-arrow" /></button>
                    <button className="inner--button theme"><img src="/img/Moon.svg" alt='night-theme' /></button>
                </div>
            </div>
            <img onClick={() => onClickOpen()} src="/img/Add.svg" alt="add" />
            {isOpen ? <AddNote setIsOpen={setIsOpen} setNote={setNote} note={note}/> : false}
            
        </div>
    );
}

