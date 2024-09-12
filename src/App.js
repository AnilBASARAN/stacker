import { useState } from 'react';
import './App.css';

const App = () => {

  const minusButtonStyle = "w-36 rounded-lg bg-yellow-300 m-2 p-2";
  const plusButtonStyle = "w-36 rounded-lg bg-green-300 m-2 p-2";

  const [stackNum, setStackNum] = useState(5);
  const [isOnPlus, setIsOnPlus] = useState(true);
  const [isOnMinus, setIsOnMinus] = useState(true);


  const minusStyle = isOnMinus ? minusButtonStyle : "w-36 rounded-lg bg-red-300 m-2 p-2"
  const minusTitle = isOnMinus ? "Remove block" : "Minimum Level" 


  const plusStyle = isOnPlus ? plusButtonStyle : "w-36 rounded-lg bg-red-300 m-2 p-2"
  const plusTitle = isOnPlus ? "Add block" : "Max Level"

  let stacks = [];

  for(let i = 0; i<stackNum ; i++){
      stacks.push(<div className="w-[80px] h-[12px] bg-green-400 m-2 p-2" key={i} ></div>)
  }



  return <div className="mainContainer flex flex-col h-screen items-center justify-end">

    <div className="blockContainer border-b-4 border-black" >

      
      {stacks}
    
    
    </div>
    
    <div>
    <button onClick={()=>{
        if(stackNum < 15){
          setIsOnMinus(true);
          setStackNum(stackNum+1);
        }else{
          setIsOnPlus(false);
        }
    } } 
    className={plusStyle} 
    >{plusTitle}</button>


    <button 
    onClick={()=>{
      if(stackNum > 1){
        setIsOnPlus(true);
        setStackNum(stackNum-1);
      }else{
        setIsOnMinus(false);
      }
  } } 
    
    className={minusStyle}
    >{minusTitle}</button>
    </div>
  </div>;
};

export default App;
