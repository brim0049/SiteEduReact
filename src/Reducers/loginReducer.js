const students_init = 
    {
      cp: null,
      pswd: null,
      isLoggedIn: false,

    };

const loginReducer = (students = students_init, action) => {
    switch (action.type) {
      case "LOGIN_STUDENT":
        let newStudent={
            cp: action.payload.cp,
            pswd: action.payload.pswd,
            isLoggedIn:true
        }
        if (action.payload.cp) {
            
            return  newStudent;
            
          } else {
            return students;
          }
          case "LOGOUT_STUDENT":
            return {
          ...students,
          isLoggedIn: false,
          cp: null,
          pswd: null,
        };
    
      default:
        return students;
    }
  };
  
  export default loginReducer;
