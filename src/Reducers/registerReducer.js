const students_init = [
    {
      nas: "123456789",
      birthday: "666",
    },
    
  ];

const registerReducer = (students = students_init, action) => {
    switch (action.type) {
      case "REGISTER_STUDENT":
        let newStudent={
            nas: action.payload.nas,
            birthday: action.payload.birthday
        }
        if (action.payload.nas) {
            return [...students, newStudent];
          } else {
            return students;
          }
      
      default:
        return students;
    }
  };
  
  export default registerReducer;
  