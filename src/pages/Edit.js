import { useContext, useEffect, useState } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";

import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [originData, setOriginData] = useState();
    
    const diaryList = useContext(DiaryStateContext);

    useEffect(() => {
        if(diaryList.length >= 1) {
            const targetDiary = diaryList.find((el) => parseInt(el.id) === parseInt(id));
            console.log(targetDiary)
            if(targetDiary) {
                setOriginData(targetDiary);
            }
            else {
                navigate('/');
            }
        }
        
    }, [id, diaryList]);

    return (
    <div>
        {originData && <DiaryEditor isEdit={true} originData={originData}/>}
    </div>
    );
};

export default Edit 