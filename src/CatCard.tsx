import React from 'react';
import './App.css';
import {Color} from './App';

interface CatCardProps {
  cats: { name: string; age: number; size: number; hunger: number, color: Color}[];
  selectedCatIndex: number;
}

function CatCard(props: CatCardProps) {
  const cat = props.cats[props.selectedCatIndex];

  return (
    <div className="container">
      <div className="content">
        <p className='catName'>{cat.name}</p>
        <div className="infoCat">
          <p>Вік: {cat.age}</p>
          <p>Розмір: {cat.size}</p>
          <p>Ситість: {cat.hunger}</p>
        </div>
        <img className='catImg' src={`${cat.color}.png`}/>
      </div>
    </div>
  );
}

export default CatCard;