
class DemandeViewModel {

  static prepareData(student) {
    // Logique pour préparer et manipuler les données de l'étudiant si nécessaire
    const user = localStorage.getItem('userId'); // Récupérez le token depuis le local storage
    const _permanentCode = localStorage.getItem('CP'); // Récupérez le token depuis le local storage
    const _dateOfBirth = localStorage.getItem('DBB'); // Récupérez le token depuis le local storage
    const _password = localStorage.getItem('PSWD'); // Récupérez le token depuis le local storage

    return{"id": parseInt(user),
        "firstName": student.firstName,
        "lastName": student.lastName,
        "socialSecurityNumber": student.socialSecurityNumber,
        "dateOfBirth": _dateOfBirth !== null ?_dateOfBirth :"1999-09-04",
        "permanentCode": _permanentCode,
        "password": _password,
        "correspondenceAddress": student.correspondenceAddress,
        "phoneNumber": student.phoneNumber,
        "email": student.email,
        "citizenship": student.citizenship,
        "immigrationCode": student.immigrationCode,
        "datePermanentResident": student.datePermanentResident,
        "languagePreference": student.languagePreference,
        "maritalStatus": parseInt(student.maritalStatus),
        "dateMaritalStatus": student.dateMaritalStatus,
        "institutionName": student.institutionName,
        "programCode": student.programCode,
        "creditCount": student.creditCount
      }
    
  }

  static DemPreData(finance) {
    // Logique pour préparer et manipuler les données de l'étudiant si nécessaire
    const user = localStorage.getItem('userId'); // Récupérez le token depuis le local storage
    const _permanentCode = localStorage.getItem('CP'); // Récupérez le token depuis le local storage
    const _dateOfBirth = localStorage.getItem('DBB'); // Récupérez le token depuis le local storage
    const _password = localStorage.getItem('PSWD'); // Récupérez le token depuis le local storage

    return{
    "employmentIncomeLastYear": finance.employmentIncomeLastYear,
    "otherIncomeLastYear": finance.otherIncomeLastYear,
    "potentialIncomeCurrentYear": finance.financepotentialIncomeCurrentYear,
    "loanPortion": 0,
    "grantPortion": 0
      }
    
  }


}

export default DemandeViewModel;
/*{ "id": "1",
  "firstName": "tyguh",
  "lastName": "string",
  "socialSecurityNumber": "string",
  "correspondenceAddress": "string",
  "phoneNumber": "string",
  "email": "string",
  "citizenship": "string",
  "immigrationCode": "string",
  "datePermanentResident": "2023-12-06T02:32:09.167Z",
  "languagePreference": "string",
  "maritalStatus": 0,
  "dateMaritalStatus": "2023-12-06T02:32:09.167Z",
  "institutionName": "string",
  "programCode": "string",
  "creditCount": 0




      "firstName": student.firstName,
      "lastName": student.lastName,
      "socialSecurityNumber": student.socialSecurityNumber,
      "permanentCode": student.permanentCode,
      "correspondenceAddress": student.correspondenceAddress,
      "phoneNumber": student.phoneNumber,
      "email": student.email,
      "citizenship": student.citizenship,
      "immigrationCode":student.immigrationCode,
      "datePermanentResident":student.datePermanentResident,
      "languagePreference": student.languagePreference,
      "maritalStatus": student.maritalStatus,
      "dateMaritalStatus": student.dateMaritalStatus,
      "institutionName": student.institutionName,
      "programCode": student.programCode,
      "creditCount":student.creditCount
    };
    */
