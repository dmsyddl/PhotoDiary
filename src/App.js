import './App.css';
import React, { useReducer, useRef } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';

// // Components
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';


const reducer = (state, action) => {
  let newState = [];
  switch(action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      const newItem = {
        ...action.data
      };
      newState = [newItem, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((el)=>el.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map((el)=>el.id === action.targetId ? [...action.data] : el);
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

// dummyData
const dummyData = [
  {
    id: 1,
    what: 1,
    content: "첫 번째 일기",
    date : 1657547066593,
  },
  {
    id: 2,
    what: 2,
    content: "두 번째 일기",
    date : 1657547066594,
  },
  {
    id: 3,
    what: 3,
    content: "세 번째 일기",
    date : 1657547066595,
  },
  {
    id: 4,
    what: 4,
    content: "네 번째 일기",
    date : 1657547066596,
  },
  {
    id: 5,
    what: 5,
    content: "다섯 번째 일기",
    date : 1657547066597,
  },
];

function App() {

  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(0);
  // create : 일기 생성
  const onCreate = (date, content, what) => {
    dispatch({
      type : "CREATE", 
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        what,
      },
    });
    dataId.current += 1;
  }
  // remove : 일기 삭제
  const onRemove = (targetId) => {
    dispatch({type: "REMOVE", targetId});
  }
  //   edit : 일기 수정
  const onEdit = (targetId, date, content, what) => {
    dispatch({
      type : "EDIT", 
      data: {
        id: targetId.current,
        date: new Date(date).getTime(),
        content,
        what,
      },
    });
  }
  
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={
        {onCreate, onRemove, onEdit
      }}>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/diary/:id' element={<Diary />} />
          </Routes>
        </div>
      </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
  
}

export default App;
