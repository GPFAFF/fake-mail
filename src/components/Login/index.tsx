import React, {
  ChangeEvent,
  FormEvent,
  useState,
} from 'react'
import { LoginType } from '../../app.types';
import { Input } from '../Input';
import { login } from '../../api';
import { useUserActions } from '../../context/UserContext';

import './index.css'

export const Login = () => {
  const initialLoginInfo = {
    username: '',
    password: '',
  };

  const { login: onLogin } = useUserActions();

  const initialErrorMessage = {
    message: ''
  }

  const [userInfo, setUserInfo] = useState<LoginType>(initialLoginInfo);

  const [errors, setErrors] = useState(initialErrorMessage);
  const [loading, setLoading] = useState(false);

  const { username, password } = userInfo;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    setErrors({message: ''});
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors(initialErrorMessage);
    setLoading(true);
    login(username, password)
      .then((user: any) => {
        setLoading(false);
        onLogin(user);
      })
      .catch((error: any) => {
        setErrors(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form
        noValidate
        onSubmit={handleSubmit}
      >
        {loading && <p>Loading ...</p>}
        {errors && <p>{errors.message}</p>}
        <Input
          value={username}
          handleChange={handleChange}
          name="username"
          id="username"
        />
        <Input
          value={password}
          handleChange={handleChange}
          name="password"
          id="password"
        />
        <button
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}
