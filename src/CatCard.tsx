import React from 'react';
import './App.css';

interface CatCardProps {
  cats: { name: string; age: number; size: number; hunger: number, color: string}[];
  selectedCatIndex: number;
}

function CatCard(props: CatCardProps) {
  const cat = props.cats[props.selectedCatIndex];

function selectedCatColor() {
  
  let src = "";

  if (cat.color == "black") {
    src = "black.png";
  }

  return src;
}  

  return (
    <div className="container">
      <div className="content">
        <p className='catName'>{cat.name}</p>
        <div className="infoCat">
          <p>Вік: {cat.age}</p>
          <p>Розмір: {cat.size}</p>
          <p>Ситість: {cat.hunger}</p>
        </div>
        <img src={selectedCatColor()}/>
      </div>
    </div>
  );
}

export default CatCard;