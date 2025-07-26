// src/components/Counter.jsx
import React from 'react';
import {useCounterStore, useUpdateUser} from '../store/useStore';

const Counter = () => {
const [userName, setUserName] = React.useState('');
const [email, setEmail] = React.useState('');
  const { count, increase, decrease, reset } = useCounterStore();
  const { userDetails, updateUserDetails, resetUserDetails } = useUpdateUser();

  return (
    <>
    <div style={{ textAlign: 'center' }}>
      {/* <h2>Count: {count}</h2> */}
      <button onClick={increase}>➕ Increase</button>
      <button onClick={decrease}>➖ Decrease</button>
      <button onClick={reset}>🔁 Reset</button>
    </div>
    <div>
        <div>User</div>
        <input type="text" onChange={ e=> setUserName(e.target.value)} placeholder="Enter your name" />
        <input type="email"  onChange={ e=> setEmail(e.target.value)} placeholder="Enter your email" />
        <button onClick={()=>updateUserDetails({ userName, email })}>Submit</button>
        <button onClick={resetUserDetails}>Reset</button>
        {/* <div>
            <h3>User Details:</h3>
            <p>Name: {userDetails.userName}</p>
            <p>Email: {userDetails.email}</p>
        </div> */}
    </div>
    </>
    
  );
};

export default Counter;
