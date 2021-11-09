import React from 'react';
import Square from './Square';

const Board = ({ suares, onClick }) => (
    <div className='board'>
        {squares.map((square, i ) => (
            <Square key={i} value={square} onClick={() => onClick(i)}></Square>
        ))}
    </div>
);

export default Board;
