import { LoginType } from '../app.types';

const validCredentials = {
  username: 'greg',
  password: '12345'
}

export const validatePassword = (user: LoginType) => {
 const { username, password } = user;

 console.log(username === validCredentials.username)
 console.log(password === validCredentials.password)

 const validatedPassword = username === validCredentials.username &&
 password === validCredentials.password

 return validatedPassword
  ? console.log('success')
  : console.log('error')
}