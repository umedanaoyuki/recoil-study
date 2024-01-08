import logo from './logo.svg';
import './App.css';
import {useRecoilState} from "recoil";
import {counterAtom} from "./store/atom";

function App() {

    const [counter, setCounter] = useRecoilState(counterAtom);

    const handleClick = () => {
      setCounter(counter + 1);
    }

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{counter}回、クリックされました。</p>
    </>
  );
}

export default App;
