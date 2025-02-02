import './App.css';
import food from "./components/FoodData"
import FoodBox from "./components/FoodBox"
import { useState } from 'react';

function App() {
  const [foodData, setfoodData]=useState(food);

  let handleChange=(event)=>{

    let searchBoxValue=event.target.value;

    if(searchBoxValue==""){
      setfoodData(food)
      return;
    }

    let newData = foodData.filter((ele)=>{
      return ele.name.toLowerCase().includes(searchBoxValue.toLowerCase());
    });

    setfoodData(newData)

  }

  return (
    <>
    <div className="search-box">
      <h3>Search</h3>
      <input type="text" onChange={(e)=>handleChange(e)}/>
    </div>
      {foodData.map((element,index)=>
        <FoodBox key = {index} foodItem = {element}/>
      )}
    </>
  )
}

export default App