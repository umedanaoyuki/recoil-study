import './App.css';
import {useRecoilState, useRecoilValue} from "recoil";
import {todoLastIdSelector, todosAtom} from "./store/atom";
import {useState} from "react";


function App() {

    const [title, setTitle] = useState('');
    const [todo, setTodo] = useRecoilState(todosAtom);
    const maxId = useRecoilValue(todoLastIdSelector);

    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };

    // 新しいTODOを追加
    const handleClick = () => {
        setTodo([...todo,{
            id: maxId +1,
            title,
            created: new Date(),
            isDone: false
        }
        ]);
    };

        // ステータスを済にする
        const handleDone = e => {
            setTodo(todo.map(item => {
                if (item.id === Number(e.target.dataset.id)){
                    return {
                        ...item,
                        isDone: true
                    };
                } else {
                    return item;
                }
            }));
        };

        // 削除
        const handleRemove = e => {
            setTodo(todo.filter(item => item.id !== Number(e.target.dataset.id)))
        }

        // TODOリストの表示
    return (
        <div>
            <label>
                やること：
                <input type="text" name="title" value={title} onChange={handleChangeTitle}/>
            </label>
            <button type="button" onClick={handleClick}>追加</button>
            <hr />
            <ul>
                {todo.map(item => (
                        <li key={item.id} className={item.isDone ? 'done': ''}>{item.title}
                            <button　type="button" onClick={handleDone} data-id={item.id}>済</button>
                            <button　type="button" onClick={handleRemove} data-id={item.id}>削除</button>
                        </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
