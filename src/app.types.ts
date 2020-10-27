export interface UserType {
  avatar: string;
  firstName: string;
  lastName: string;
  username: string;
}

export interface LoginType {
  username: string;
  password: string;
}

export type UserContextType = {
  user: UserType;
  login: (user: UserType) => void;
  logout: () => void;
}

export interface EmailType {
  id: number;
  subject: string;
  body: string;
  preview: string;
}

export type EmailContextType = {
  emails: EmailType[];
  loading: boolean;
  errors: null;
  currentEmail: EmailType;
  setCurrentEmail: (currentEmail: any) => []
}