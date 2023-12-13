import axios from 'axios';

class regService {
  static async registerStudent(studentData) {
    try {
      const response = await axios.post('http://localhost:5140/api/Authorization/registration', studentData);
      localStorage.setItem('CodeD', response.data.permanentCode);
      localStorage.setItem('PS', response.data.password);

      return response.data;
    } catch (error) {
      throw new Error('Erreur lors de l\'inscription');
    }
  }
}

export default regService;
