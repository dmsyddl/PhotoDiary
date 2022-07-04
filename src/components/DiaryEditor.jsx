import { useState } from "react";
import { Tag } from "./Tag"; 
import { ImgAdd } from "./ImgAdd";

// ? : import { Tag } from "./components/Tag"; 이렇게 적으면 적용되지 않음...

const DiaryEditor = () => {
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");

    const handleChangeDate = (event) => {
        setDate(event.target.value);
    }

    const handleChangeContent = (event) => {
        setContent(event.target.value);
    }

    return (
    <div className="DiaryEditor">
        <div>
            <input 
            name="date"
            value={date}
            placeholder='날짜를 입력하세요'
            onChange={handleChangeDate} />
        </div>
        <div>
            <Tag />
        </div>
        <div>
            <textarea
            name="content" 
            value={content}
            placeholder='내용을 입력하세요'
            onChange={handleChangeContent} />
        </div>
        <div>
            <ImgAdd />
        </div>
    </div>
    );
};

export default DiaryEditor;