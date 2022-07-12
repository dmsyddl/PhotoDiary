import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "./../App.js";

import './DiaryEditor.css';
import Header from "./Header";
import WhatItem from "./WhatItem";

export const getStringDate = (date) => {

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
    return `${year}-${month}-${day}`;
};

const whatList = [
    {
        what_id: 1,
        what_img: process.env.PUBLIC_URL + `/assets/what1.png`,
        what_detail: "activity"
    },
    {
        what_id: 2,
        what_img: process.env.PUBLIC_URL + `/assets/what2.png`,
        what_detail: "study"
    },
    {
        what_id: 3,
        what_img: process.env.PUBLIC_URL + `/assets/what3.png`,
        what_detail: "rest"
    },
    {
        what_id: 4,
        what_img: process.env.PUBLIC_URL + `/assets/what4.png`,
        what_detail: "hobby"
    },
    {
        what_id: 5,
        what_img: process.env.PUBLIC_URL + `/assets/what5.png`,
        what_detail: "exercise"
    },
]

const DiaryEditor = ({isEdit, originData}) => {
    const navigate = useNavigate();

    const [date, setDate] = useState(getStringDate(new Date()));
    // type 그 날 유형을 설정하는 state
    const [what, setWhat] = useState(3);
    // 일기 내용 content
    const [content, setContent] = useState("");

    // function
    const handleClickWhat = (what) => {
        setWhat(what);
    }
    const { onCreate, onEdit } = useContext(DiaryDispatchContext);

    const handleSubmit = () => {
        if(content.length === 0) {
            alert("내용이 작성되지 않았습니다.")
        }
        // onCreate(date, content, what);
        if(window.confirm(isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?")) {
            if(!isEdit) {
                onCreate(date, content, what);
            }
            else {
                onEdit(originData.id, date, content, what);
            }
        }
        navigate('/');
    }

    useEffect(() => {
        if(isEdit) {
            setDate(getStringDate(new Date(parseInt(originData.date))));
            setWhat(originData.what);
            setContent(originData.content);
        }
    }, [isEdit, originData])

    return (
    <div className="DiaryEditor">
        {/* <Header
        headDate={"New Memory"}
        headWeather={"날씨 정보 API"}
        /> */}
        <div>
            <section>
                <h4>Today is...</h4>
                <div className="input_box">
                    <input
                    className="input_date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date" />
                </div>
            </section>
        </div>
        <section>
            <h4>오늘은 또 무슨일이</h4>
            <div className="input_box_whatlist_wrapper">
                {whatList.map((el)=> (
                <WhatItem 
                    key={el.what_id}
                    {...el}
                    onClick={handleClickWhat}
                    isSelected={el.what_id === what}
                    />))}
            </div>
        </section>
        <section>
            <h4>오늘의 일기</h4>
            <div className="input_box_text_wrapper">
                <textarea 
                    placeholder="오늘은 어떤일이 있었나요?"
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}>
                </textarea>
            </div>
        </section>
        <section>
            <div className="ending_box">
                <button className="END" onClick={() => navigate(-1)}>BACK</button>
                <button className="SAVE" onClick={handleSubmit}>SAVE</button>
            </div>
        </section>
    </div>
    );
};

export default DiaryEditor;