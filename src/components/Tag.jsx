import { useState } from 'react';
import styled from 'styled-components';

export const TagsInput = styled.div`
  margin: 8rem auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: #4000c7;
        > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: #4000c7;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
    }
  }

  > input {    
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
    outline: transparent;
  }
  }

  &:focus-within {
    border: 1px solid #4000c7;
  }

`;

export const Tag = () => {
  const initialTags = [];

  const [tags, setTags] = useState(initialTags);
  const removeTags = (indexToRemove) => {
    // 지우려는 index와 같지 않은 것들만 filter를 통해 반환
    setTags(tags.filter((e, i) => i !== indexToRemove))
  };
  
  const addTags = (event) => {
    // 입력되지 않은 태그이면 태그를 추가한다.
    if(!tags.includes(event.target.value)) {
      setTags([...tags, event.target.value])
      // 태그가 추가되면 input 창 비우기 (이미 있는 값이라면 초기화하지 않아야 한다)
      event.target.value = "";
    }
    // event.target.value = "";

    }
  

  return (
    <>
      <TagsInput>
        <ul id='tags'>
          {tags.map((tag, index) => (
            <li key={index} className='tag'>
              <span className='tag-title'>{tag}</span>
              <span className='tag-close-icon' onClick={() => {removeTags(index)}}>
              x</span>
            </li>
          ))}
        </ul>
        <input
          className='tag-input'
          type='text'
          onKeyUp={(e)=> {if(e.key === 'Enter' && e.target.value !== "") addTags(e)}}
          placeholder='Press enter to add tags'
        />
      </TagsInput>
    </>
  );
};