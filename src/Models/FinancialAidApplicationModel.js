class FinancialAidApplication {
    constructor(
      student,
      studentId,
      employmentIncomeLastYear,
      otherIncomeLastYear,
      potentialIncomeCurrentYear,
      loanPortion,
      grantPortion,
      financialTransactions
    ) {
      this.student = student;
      this.studentId = studentId;
      this.employmentIncomeLastYear = employmentIncomeLastYear;
      this.otherIncomeLastYear = otherIncomeLastYear;
      this.potentialIncomeCurrentYear = potentialIncomeCurrentYear;
      this.loanPortion = loanPortion;
      this.grantPortion = grantPortion;
      this.financialTransactions = financialTransactions;
    }
  }
  
  export default FinancialAidApplication;
  