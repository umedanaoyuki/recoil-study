import './App.css';
import {useRecoilState, useRecoilValue} from "recoil";
import {todoLastIdSelector, todosAtom} from "./store/atom";
import {useState} from "react";
import {idsAtom, todoListSelector} from "./store/atomUp";
import {type} from "@testing-library/user-event/dist/type";


function App() {

    const [title, setTitle] = useState('');
    const [todo, setTodo] = useRecoilState(todoListSelector);
    const [ids, setIds] = useRecoilState(idsAtom);

    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };

    // 新しいTODOを追加
    const handleClick = () => {

        const newId = Math.max(...(ids.length ? ids : [0])) + 1;
        setTodo({
            type: 'add',
            newItem: {
                id: newId,
                title,
                isDone: false
            }
        });
    };

        // ステータスを済にする
        const handleDone = e => {
            setTodo({
                type: 'done',
                id: Number(e.target.dataset.id)
            });
        };

        // 削除
        const handleRemove = e => {
            setTodo({
                    type: 'remove',
                    id: Number(e.target.dataset.id)
            });
        };
        
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
