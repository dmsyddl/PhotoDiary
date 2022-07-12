import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
import './Home.css';

import Header from "../components/Header";
import DiaryList from "../components/DiaryList";

import { FaPlus } from 'react-icons/fa';

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

const Home = () => {
    const navigate = useNavigate();

    const diaryList = useContext(DiaryStateContext);
    const [data, setData] = useState([]);
    const [currDate, setcurrDate] = useState(new Date());
    const text = `${currDate.getFullYear()}.${currDate.getMonth()+1}.${currDate.getDate()}`;

    useEffect(() => {
      setData(diaryList);
    }, [data])

    return (
    <div className="Home ">
        <Header 
        headDate={text}
        headWeather={"날씨정보API예정"}
        />
        <DiaryList diaryList={data}/>
        <button onClick={() => navigate("/new")}><FaPlus className="icon" /></button>
    </div> 
    );
};

export default Home;