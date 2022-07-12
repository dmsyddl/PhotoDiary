import React from "react";
import { useNavigate } from "react-router-dom";
import './DiaryItem.css'


const DiaryItem = ({id, what, content, date}) => {
    
    // 일기를 클릭 시 해당 일기 상세페이지로 이동한다
    const navigate = useNavigate();
    const goDiary = () => {
        navigate(`/diary/${id}`);
    };

    // 현재 저장된 데이터의 날짜를 알아보기 쉽게 바꿔줘야 한다
    const strDate = new Date(parseInt(date)).toLocaleDateString();

    return (
        <div className="DiaryItem" onClick={goDiary}>
            <div className="diary_date">{strDate}</div>
            <div className="what_img_wrapper">
                {/*process.env.PUBLIC_URL = public폴더의 주소를 의미 */}
                <img src={process.env.PUBLIC_URL + `assets/what${what}.png`}></img>
            </div>
            <div className="diary_tag">{content.slice(0, 10)}</div>
        </div>
    );
}

export default DiaryItem;