class StudentViewModel {
    static prepareData(student) {
      localStorage.setItem('DBB', student.dateOfBirth);
      // Logique pour préparer et manipuler les données de l'étudiant si nécessaire
      return {socialSecurityNumber: student.socialSecurityNumber,
        dateOfBirth: student.dateOfBirth,
      };
    }
  }
  
  export default StudentViewModel;