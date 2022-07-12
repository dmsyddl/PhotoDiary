import './WhatItem.css';

const WhatItem = ({what_id, what_img, what_detail, onClick, isSelected}) => {
    return (
        <div onClick={()=> onClick(what_id)} className={["WhatItem", 
        isSelected ? `WhatItem_on_${what_id}` : `WhatItem_off`].join(" ")}>
            <img src={what_img}/>
            <span>{what_detail}</span>
        </div>
    )
}

export default WhatItem;