import ConsultService from "../Services/ConsultService";

class ConsultViewModel {
  constructor() {
    this.service = new ConsultService();
  }

  async getStudentData() {
    try {
      const studentData = await this.service.fetchStudentData();
      const financialAidData = await this.service.fetchFinancialAidData();
      const montantsVersesData = await this.service.fetchTransactionData();

      return { studentData, financialAidData, montantsVersesData};
    } catch (error) {
      throw new Error('Erreur lors de la récupération des données');
    }
  }
}

export default ConsultViewModel;
