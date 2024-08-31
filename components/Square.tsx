import React from 'react'
type Player="X"|"O"|"BOTH"|null;

function Square({value,onClick,winner}:{
    winner:Player
    value:Player
    onClick:()=>void
}) {
    if(!value){
        return <button className='bg-pink-400 w-[100px] h-[100px] text-[5rem] text-[#a33676] border border-black' onClick={onClick} disabled={Boolean(winner)}/>;
    }
  return (
    <button className={`square square_${value.toLocaleLowerCase}`} disabled>{value}</button>
  )
}

export default Square