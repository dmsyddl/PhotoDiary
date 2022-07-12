import DiaryItem from "./DiaryItem";
import './DiaryList.css';

const DiaryList = ({diaryList}) => {
    return (
    <div className="DiaryList">
        {diaryList.map((el)=> (
            <DiaryItem key={el.id} {...el} />
        ))}
    </div>
    );
};

export default DiaryList;