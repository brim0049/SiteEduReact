const students_init = 
    {
      isLoggedIn: false,

    };

const loginReducer = (students = students_init, action) => {
    switch (action.type) {
      case "LOGIN_STUDENT":
        return{          ...students,
          isLoggedIn:true

        }
          case "LOGOUT_STUDENT":
            return {
          ...students,
          isLoggedIn: false,
        };
    
      default:
        return students;
    }
  };
  
  export default loginReducer;
