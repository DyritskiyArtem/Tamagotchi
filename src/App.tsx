import React, { useState } from 'react';
import CatCard from './CatCard';
import './App.css';

interface Cat{name: string, age:number, size: number, hunger: number, color: Color};

enum Color{
  Black = "black",
  Red = "red",
  White = "white"
}

function App() {
  const [cats, setCats] = useState<Cat[]>([
    { name: "Katty", age: 4, size: 40, hunger: 5, color: Color.Black},
    { name: "Murzik", age: 2, size: 30, hunger: 3, color: Color.Red},
    { name: "Barsik", age: 6, size: 45, hunger: 4, color: Color.White},
    { name: "Pushok", age: 3, size: 35, hunger: 2, color: Color.White},
    { name: "Ryzhik", age: 5, size: 40, hunger: 5, color: Color.Red }
  ]);
  const [newName, setNewName] = useState('');
  const [selectedCatIndex, setSelectedCatIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<Color>();

  const changeSelectedCatColor = () => {
    if (selectedColor) {
      const updatedCats = [...cats];
      const selectedCat = updatedCats[selectedCatIndex];
      updatedCats[selectedCatIndex] = { ...selectedCat, color: selectedColor };
      setCats(updatedCats);
      alert(`Колір кота ${selectedCat.name} змінено на ${selectedColor}!`);
    } else {
      alert('Будь ласка, оберіть колір для кота.');
    }
  };

  function agePlus(cat: Cat): Cat {
    return { ...cat, age: cat.age + 1 };
  }

  function selectedCatAgePlus() {
    const updatedCats = [...cats];
    const selectedCat = updatedCats[selectedCatIndex];
    updatedCats[selectedCatIndex] = agePlus(selectedCat);

    setCats(updatedCats)
  }

  function play(cat: Cat): Cat {
    return{...cat, hunger: cat.hunger - 1};
  }

  function selectedCatPlay() {
    const updatedCats = [...cats];
    const selectedCat = updatedCats[selectedCatIndex];
    
    if (selectedCat.hunger > 1) {
      updatedCats[selectedCatIndex] = play(selectedCat);
      setCats(updatedCats);
      alert(`${selectedCat.name} радіє! Але стає голоднішим.`);
    } else {
      alert(`${selectedCat.name} дуже голодний і не хоче гратися.`);
    }
  }

  function feed(cat: Cat): Cat {
    return{...cat, hunger: 5}
  }

  function selectedCatFeed() {
    const updatedCats = [...cats];
    const selectedCat = updatedCats[selectedCatIndex];
    updatedCats[selectedCatIndex] = feed(selectedCat);
    setCats(updatedCats);
    alert(`${updatedCats[selectedCatIndex].name} ситий і щасливий!`);
  }

  function rename(cat: Cat): Cat {
    return{ ...cat, name: newName}
  }

  function selectedCatRename() {
    if (newName.trim() !== '') {
      const updatedCats = [...cats];
      const selectedCat = updatedCats[selectedCatIndex];
      updatedCats[selectedCatIndex] = rename(selectedCat);
      setCats(updatedCats);
      setNewName('');
      alert(`Кота перейменовано на ${newName}!`);
    } else {
      alert("Будь ласка, введіть нове ім'я для кота.");
    }
  }

  function handleCatSelection(index: number) {
    setSelectedCatIndex(index);
  }

  return (
    <div className="container">
      <div className="catCards">
        {cats.map((cat, index) => (
          <CatCard key={index} cats={cats} selectedCatIndex={index} />
        ))}
      </div>
      <div className="selectCat">
        <input type="number" min="0" max={cats.length - 1} value={selectedCatIndex} onChange={(e) => handleCatSelection(Number(e.target.value))}/>
      </div>
      <div className="buttons">
        <button onClick={selectedCatAgePlus}>День народження</button>
        <button onClick={selectedCatPlay}>Погратися з котом</button>
        <button onClick={selectedCatFeed}>Погодувати кота</button>
        <div className="changeCatColorDiv">
          <select className='selectColorCat' value={selectedColor} onChange={(e) => setSelectedColor(e.target.value as Color)}>
            {Object
            .keys(Color)
            .map(color => <option value={color.toLowerCase()} key={color}>{color}</option>)}  
          </select>
          <button className="changeCatColor" onClick={changeSelectedCatColor}>
            Змінити колір кота
          </button>
        </div>
        <div className="renameCatDiv">
          <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Введіть нове ім'я"/>
          <button className="renameCat" onClick={selectedCatRename}>Перейменувати кота</button>
        </div>
      </div>
      <footer>
        <p>Tamagotchi</p>
      </footer>
    </div>
  );
}

export default App;