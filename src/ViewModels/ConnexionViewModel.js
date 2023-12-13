
class LoginViewModel {

  static prepareData(student) {
    // Logique pour préparer et manipuler les données de l'étudiant si nécessaire
    localStorage.setItem('CP', student.permanentCode);
    localStorage.setItem('PSWD', student.password);
 
    return {
        permanentCode: student.permanentCode,
        password: student.password,
    };
  }

}

export default LoginViewModel;
