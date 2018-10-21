import React from 'react';
import Tile from './Tile';
import './Board.css';

const Board = ({ data, changeHandler }) => (
    <div className="board">
        {data.map((item, index) => <Tile key={index} index={index} value={item} changeHandler={changeHandler} />)}
    </div>
);

export default Board;
