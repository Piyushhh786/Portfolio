import { useState } from 'react'
import './App.css'
// import Portfolio from './Portfolio.jsx'
import Portfolio from './Portfolio.jsx';
import Custom from './Custom.jsx';

function App() {
  // const [count, setCount] = useState(0);

  // function increCount() {
  //   setCount(count + 1);
  //   // console.log(count);
  // }

  return (
    <>
      {/* <div>
        count = {count}
      </div>
      <button onClick={increCount}>incCount</button> */}
      <Portfolio/>
      {/* <Custom/> */}
    </>
  );
}

export default App;
