import React from 'react';
import './Tile.css';

const Tile = ({ index, value, changeHandler }) => (
    <div className="tile">
        {value === '.' && (
            <input value='' type="number" onChange={(e) => changeHandler(index, e.target.value)} />
        )}

        {value !== '.' && (
            <input value={value} readOnly />
        )}
    </div>
);

export default Tile;
