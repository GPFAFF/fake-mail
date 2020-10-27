import React, {
  useState,
  SetStateAction,
  createContext,
  ReactNode,
} from 'react';
import { useContext } from 'react';

import { UserContextType, UserType } from '../app.types';

interface Props {
  children: ReactNode;
}

const initialState = {
  user: {
    avatar: '',
    firstName: '',
    lastName: '',
    username: '',
  },
  logout: () => null,
  login: (user: UserType) => user,
}

const UserContext = createContext<UserContextType>(initialState)

export const UserProvider = (props: Props) => {
  const { children } = props;
  const [user, setUser] = useState(initialState.user);
  const login = (user: SetStateAction<UserType>) => setUser(user);
  const logout = () => setUser(initialState.user);

  const value = { user, login, logout };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
}

export const useUserActions = () => {
  const { login, logout } = useContext(UserContext);
  return { login, logout }
}

export default UserContext;