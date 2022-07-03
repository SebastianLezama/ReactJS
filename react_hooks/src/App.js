import './App.css';
import React, { useState } from 'react';

function expensiveInitialState() {
  return 10;
}

// to initialize function only at the begining
// const [count, setCount] = useState(() => expensiveInitialState());

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="App">
      <input 
        name='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type='password'
        name='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </div>
  );
}


// function App() {
//   const [{count, count2}, setCount] = useState({ count: 0, count2: 20 });
// // u can use as many useStates as u want
//   return (
//     <div className="App">
//       <button onClick={() => 
//         setCount(currentState => ({...currentState, count: currentState.count + 1}))
//         }
//       >
//         +
//       </button>
//       <div>
//         count 1: {count}
//       </div>
//       <div>
//         count 2: {count2}
//       </div>
//     </div>
//   );
// }


export default App;
