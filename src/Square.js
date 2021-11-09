import React from 'react'

const Square = ({ value, onClick }) => {
    const style = value ? `cell ${value}` : `cell`;
    return (
        <button className={style} onClick={onClick}>{value}</button>   
    )
}

export default Square;