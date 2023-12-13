import axios from 'axios';

class ConsultService {
  async fetchStudentData() {
    try {
      const user = localStorage.getItem('userId'); // Récupérez le token depuis le local storage
      const token = localStorage.getItem('token'); // Récupérez le token depuis le local storage
      const response = await axios.get(`http://localhost:5140/api/Demande/Student/${user}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Ajoutez le token dans le header de la requête
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Erreur lors de la récupération des données étudiantes');
    }
  }

  async fetchFinancialAidData() {
    try {
      const user = localStorage.getItem('userId'); // Récupérez le token depuis le local storage
      const token = localStorage.getItem('token'); // Récupérez le token depuis le local storage
      const response = await axios.get(`http://localhost:5140/api/Demande/StudentRequests/${user}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Ajoutez le token dans le header de la requête
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Erreur lors de la récupération des données d\'aide financière');
    }
  }

  async fetchTransactionData() {
    try {
      const user = localStorage.getItem('userId'); // Récupérez le token depuis le local storage
      const token = localStorage.getItem('token'); // Récupérez le token depuis le local storage

      const response = await axios.get(`http://localhost:5140/api/Demande/StudentRequestItems/${user}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Ajoutez le token dans le header de la requête
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Erreur lors de la récupération des données de transactions');
    }
  }
}

export default ConsultService;
