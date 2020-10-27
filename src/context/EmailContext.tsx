import React, {
  createContext,
  useEffect,
  useReducer,
  ReactNode,
  useContext,
} from 'react';

import { EmailType, EmailContextType } from '../app.types';

import { emailReducer } from '../reducer/emailReducer';

import { fetchEmails } from '../api';

interface Props {
  children: ReactNode;
}

const initialState = {
  emails: [],
  errors: null,
  loading: false,
  currentEmail: {
    id: 0,
    subject: '',
    body: '',
    preview: '',
  },
  preview: '',
  setCurrentEmail: (currentEmail: any) => currentEmail
}

const EmailContext = createContext<EmailContextType>(initialState);

export const EmailProvider = (props: Props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(emailReducer, {
    emails: [],
    loading: false,
    error: null,
    currentEmail: null,
  })

  useEffect(() => {
    dispatch({ type: 'LOADING' })
    fetchEmails()
      .then((emails: any) => dispatch({ type: 'SUCCESS', emails }))
      .catch(error => dispatch({type: 'ERROR', error}))
  }, [])

  const setCurrentEmail = (email: EmailType) => {
    dispatch({ type: 'SELECT', currentEmail: email })
  }

  const value = {
    ...state,
    setCurrentEmail
  };

  return (
    <EmailContext.Provider value={value}>
      {children}
    </EmailContext.Provider>
  )
}

export const useEmail = () => {
  return useContext(EmailContext);
}
