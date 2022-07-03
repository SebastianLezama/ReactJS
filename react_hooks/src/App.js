import './App.css';
import React, { useEffect } from 'react';
import { useFrom } from './useFrom';

function expensiveInitialState() {
  return 10;
}

// to initialize function only at the begining
// const [count, setCount] = useState(() => expensiveInitialState());

function App() {
  const [values, handleChange] = useFrom({email: '', password: ''});

  useEffect(() => {
    console.log('originalFunction');
    
    return () => {
      console.log('cleanUpFunction');
    }
  }, [values.email])
  
  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener('mousemove', onMouseMove);
    
  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove)
  //   }
  // }, [])


  return (
    <div className="App">
      <input 
        name='email'
        value={values.email}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
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
