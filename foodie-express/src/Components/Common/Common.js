// return the user data from the session storage
export const getUser = () => {
    const userStr= [];
    userStr.id = sessionStorage.getItem('id');
    userStr.email = sessionStorage.getItem('email');
    return userStr;
}
  
  // return the token from the session storage
  export const getToken = () => {
    //return sessionStorage.getItem('token') || null;
    return "dfdfdsf";
  }
  
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('email');
  }
  
  // set the token and user from the session storage
  export const setUserSession = (id, email) => {
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('email', JSON.stringify(email));
  }