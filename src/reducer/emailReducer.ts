export const emailReducer = (state: any, action: any) => {
  switch(action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        errors: null,
      }
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        emails: action.emails,
      }
    case 'ERROR':
      return {
        ...state,
        loading: false,
        errors: action.errors,
      }
    case 'SELECT':
      return {
        ...state,
        currentEmail: action.currentEmail,
      }
    default:
      return state;
  }
}