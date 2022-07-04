import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';


export const ImgAdd = () => {
    const [files, setFiles] = useState('');
    
    useEffect(() => {
        preview();

        return () => preview();
    });

    const preview = () => {
        if(!files) return false;

        const imgEl = document.querySelcetor('.img__box');
        const reader = new FileReader();

        reader.onLoad = () => 
            (imgEl.style.backgroundImage = `url(${reader.result})`);
        reader.readAsDataURL(files[0]);
    };
    const onLoadFile = (e) => {
        const file = e.target.files;
        setFiles(file);
    };

    const handleClick = (e) => {
        const formdata = new FormData();
        formdata.append('uploadImage', files[0]);

        const config = {
            Headers: {
                'content-type': 'multipart/form-data',
            },
        };

        axios.post(`api`, formdata, config);
    };
    
    
    return (
        <div className="upload__wrap">
            <div className="custom__img">
                <strong>업로드된 이미지</strong>
                <div className="img__wrap">
                    <img src="" alt="" />
                </div>
            </div>
            <form className="upload__input">
                <input type="file" id="image" accept="img/*" onChange={onLoadFile} />
                <label htmlFor="image">파일 선택하기</label>
            </form>
            <button onClick={handleClick}>저장하기</button>
            <div className="img__box"></div>
        </div>
    );
}

//export default ImgAdd;