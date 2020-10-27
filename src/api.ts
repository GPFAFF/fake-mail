import { EmailType } from "./app.types";

const generatePreview = (email: EmailType) => {
  return email.preview = email.body.substr(0, 46)
}

export const FAKE_USER = {
  firstName: 'Greg',
  lastName: 'Pfaff',
  username: 'gpfaff',
  avatar:
    'https://avatars1.githubusercontent.com/u/1102168?s=60&v=4'
};

export const FAKE_EMAILS = [
  {
    id: 0,
    subject: 'Hey Greg',
    body: 'Yo, just wanted to say hey.',
    preview: '',
  },
  {
    id: 1,
    subject: 'React is great',
    body: 'I thought I should let you know.',
    preview: '',
  },
  {
    id: 2,
    subject: 'REQUEST FOR ASSISTANCE',
    body:
      'If you send me your bank account number I will reward you with $10 million whole US dollars.',
    preview: '',
  }
];

const LOTS_OF_EMAILS = Array(1000)
  .fill(0)
  .map(_ => {
    let email =
      FAKE_EMAILS[
        Math.floor(Math.random() * FAKE_EMAILS.length)
      ];
    return {
      ...email,
      id: Math.random(),
      preview: `${email.body.substr(0, 46)}...`
    };
  });

// Generate a preview
FAKE_EMAILS.forEach(
  email => (generatePreview(email))
);

export const login = (username: string, password: string) => {
  return new Promise((resolve: any, reject) => {
    setTimeout(() => {
      if (
        username === 'gpfaff' &&
        password === 'secret'
      ) {
        resolve(FAKE_USER);
      } else {
        reject({
          message: 'Invalid username or password'
        });
      }
    }, 300);
  });
}

export const fetchEmails = () => {
  return new Promise((resolve: any, reject) => {
    setTimeout(() => {
      resolve(LOTS_OF_EMAILS)
    }, 300)
  })
}