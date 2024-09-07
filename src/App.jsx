import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const 증가 = () => {
    setCount(count + 1);
  };

  const 감소 = () => {
    setCount(count - 1);
  };

  const [inputValue, setInputValue] = useState('111');

  const handleChangeInput = (event) => {
    const text = event.target.value;
    setInputValue(text);
  };

  //const [todoList, setTodoList] = useState([]);
  const [todoList, setTodoList] = useState([
    { text: 'vue', done: true },
    { text: 'react', done: false },
  ]);

  const handleClickAdd = () => {
    const currentValue = inputValue;
    const nextTodoList = [...todoList, { text: currentValue, done: false }];
    setTodoList(nextTodoList);
  };
  const handleClickEdit = (index) => {
    const nextTodoList = todoList.map((item, idx) => {
      item.done = index == idx ? !item.done : item.done;
      return item;
    });
    setTodoList(nextTodoList);
  };
  const handleClickDrop = (index) => {
    const nextTodoList = todoList.filter((item, idx) => {
      return idx != index;
    });
    setTodoList(nextTodoList);
  };
  const handleToggleDone = (index) => {
    const nextTodoList = todoList.map((item, idx) => {
      item.done = index == idx ? !item.done : item.done;
      return item;
    });
    setTodoList(nextTodoList);
  };
  const handleChangeInputItem = (event) => {
    const text = event.target.value;
  };
  return (
    <>
      <h3>count</h3>
      <div className="card">
        <button onClick={증가}>+</button>
        <button onClick={감소}>-</button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <h3>todo list</h3>
      <p>input value : {inputValue}</p>
      <p>todo list : {JSON.stringify(todoList)}</p>
      <p>
        <input valule={inputValue} onChange={handleChangeInput} />
        <button onClick={handleClickAdd}>추가</button>
      </p>
      <ul>
        {todoList.map((item, index) => (
          <li>
            <span>
              <input
                type="checkbox"
                checked={item.done}
                onClick={() => handleToggleDone(index)}
              />
            </span>
            <span>{index}. </span>
            <span>{item.text}</span>
            <span>
              <input value={item.text} onChange={handleChangeInputItem} />
            </span>
            <button onClick={() => handleClickEdit(index)}>수정</button>
            <button onClick={() => handleClickDrop(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
