import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getMessage } from '../redux/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);

  async function fetchMessage() {
    await axios.get('http://localhost:3000/').then((response) => {
      dispatch(getMessage(response.data.greeting));
    });
  }

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <button type="button" onClick={() => fetchMessage()}>Generate greeting message</button>
    </div>
  );
};

export default Greeting;
