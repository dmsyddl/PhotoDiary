import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import './Diary.css';

import Edit from "./Edit";
import Header from "../components/Header";
import { whatList } from "../whatlist";


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

const Diary = () => {
    const { id } = useParams();
    const diaryList = useContext(DiaryStateContext);
    const navigate = useNavigate();

    const [data, setData] = useState();
    useEffect(() => {
        if(diaryList.length >= 1) {
            const targetDiary = diaryList.find((el) => parseInt(el.id) === parseInt(id));

            if(targetDiary) {
                setData(targetDiary);
            }
            else {
                navigate('/');
            }
        }
    }, [id, diaryList])
    
    if(!data) {
        return <div className="DairyPage">로딩중...</div>;
    }
    else {
        const currWhatData = whatList.find((el) => parseInt(el.what_id) === parseInt(data.what));
        return (
            <div className="DiaryPage">
                <Header 
                headDate={`${getStringDate(new Date(data.date))} memory`}
                headWeather={<button onClick={() => navigate(`/edit/${data.id}`)}>EDIT</button>}/>
                <article>
                    <section>
                        <h4>무슨일이 있었지?</h4>
                        <div className="diary_img_wrapper">
                            <img src={currWhatData.what_img} />
                            <div className="what_detail">{currWhatData.what_detail}</div>
                        </div>
                    </section>
                    <section>
                        <h4>오늘의 일기</h4>
                        <div className="diary_content_wrapper">
                            <p>{data.content}</p>
                        </div>
                    </section>
                </article>
            </div>
        )
    }
};

export default Diary;