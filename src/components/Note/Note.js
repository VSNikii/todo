import './note.module.scss';
import React from 'react';



export default function Note({ note }) {

    return (
        <div>
            
                <button>
                    <img src='/img/uncheck.svg' alt='uncheck' />
                    <h2>{note.title}</h2>
                    <img src='/img/edit.svg' alt='edit' />
                    <img src='/img/delete.svg' alt='delete' />
                </button>
            
            
        </div>
    );
}