import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../store/reposReducer';  
import './style/main.css';

function Main() {

  const [input, setInput] = useState('');
  
  const dispatch = useDispatch();
  const items = useSelector(state => state.reposes.items);

  const changeInput = (e) => {
    setInput(e.target.value);
  }

  const saveList = (e) => {
	if(!input){
      e.preventDefault();
    }else{
      e.preventDefault();
      dispatch(setItems([...items, {id:items.length, text:input, check:false}]));
      setInput('');
    }
  }
  
  const deleteItems = (id) => {
    const newItems = items.filter((el) => {
      return el.id !== id;
    })
    dispatch(setItems(newItems));
  }


  const checkItem = (id) => {
    const newItems = items.filter((el) => {
        if(el.id === id){
            el.check = !el.check;
        }
        return el;
    })
    dispatch(setItems(newItems))
  }
  return (
    <div className='wrapper'>
      <form onSubmit={saveList} >
        <input value={input} onChange={changeInput} placeholder="Add"/>
        <button type="submit">Add</button>
      </form>
      <div>{items.map((el, index) =>{
            if(el.check){
                return (
                    <div key={index}  className="check" >
                        <li key={index} onClick={() => checkItem(el.id)} >
                            {el.text}
                        </li>
                        <span onClick={() => deleteItems(el.id)}>X</span>
                    </div>
                )
            }else{
                return (
                    <div key={index}  className="todo-list">
                        <li onClick={() => checkItem(el.id)} >
                            {el.text}
                        </li>
                        <span onClick={() => deleteItems(el.id)} >X</span>
                    </div>
                )
            }
        })}
        </div>
    </div>
  );
}

export default Main;