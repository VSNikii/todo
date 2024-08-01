import './addNote.module.scss';
import React, {useState} from 'react';
import Note from '../Note/Note';



export default function AddNote({ setIsOpen, setNote, note }) {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);

    const onClickCancel = () => {
        setIsOpen(false);
    }
    const onClickApply = () => {
        setCount(prev => prev + 1);
        setNote({title: value})
        setIsOpen(false);
        
    }
    const onChangeName = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className='d-flex justify-center'>
        <div className='modalWindow d-flex flex-column'>
            <div className='d-flex flex-column align-center'>
                <h1>New Note</h1>
                <input className='search add-search' type='text' placeholder='Название...' onChange={(event) => onChangeName(event)} />
            </div>
            <div className='modalWindow__buttons d-flex justify-between'>
                <button className='cancel' onClick={() => onClickCancel()}>Cancel</button>
                <button className='apply' onClick={() => onClickApply()}>Apply</button>
            </div>
        </div>
        </div>
    );
}