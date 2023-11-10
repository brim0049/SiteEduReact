export const registerStudent = (nas, birthday) => {
    return {
      type: "REGISTER_STUDENT",
      payload: {
        nas: nas,
        birthday: birthday
      },
    };
  };
  export const LoginStudent = (cp, pswd) => {
    return {
      type: "LOGIN_STUDENT",
      payload: {
        cp: cp,
        pswd: pswd,
      },
    };
  };
  export const LogoutStudent = (cp, pswd) => {
    return {
      type: "LOGOUT_STUDENT",
      
    };
  };