
class Student {
    constructor(id,
      socialSecurityNumber,
      dateOfBirth,
      permanentCode,
      password,
      firstName,
      lastName,
      correspondenceAddress,
      phoneNumber,
      email,
      citizenship,
      immigrationCode,
      datePermanentResident,
      languagePreference,
      dateMaritalStatus,
      maritalStatus,
      institutionName,
      programCode,
      creditCount
    ) {
    this.id=id
      this.socialSecurityNumber = socialSecurityNumber;
      this.dateOfBirth = dateOfBirth;
      this.permanentCode = permanentCode;
      this.password = password;
      this.firstName=firstName;
      this.lastName=lastName;
      this.correspondenceAddress = correspondenceAddress;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.citizenship = citizenship;
      this.immigrationCode = immigrationCode;
      this.datePermanentResident = datePermanentResident;
      this.languagePreference = languagePreference;
      this.dateMaritalStatus=dateMaritalStatus;
      this.maritalStatus = maritalStatus;
      this.institutionName = institutionName;
      this.programCode = programCode;
      this.creditCount = creditCount;
    }
  }
  
  export default Student;
