import axios from 'axios';

class StuService {
  static async updateStudent(studentId,studentData) {
    
    try {
        
        const user = localStorage.getItem('userId'); // Récupérez le token depuis le local storage
        const token = localStorage.getItem('token'); // Récupérez le token depuis le local storage
      const response = await axios.put(`http://localhost:5140/api/Student/Student/${user}`, studentData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Ajoutez le token dans le header de la requête
        },
      });
      const {id}  = response.data;
      localStorage.setItem('Req', id);
      console.log('reussi')
      console.log('id')
      console.log(response.data)

      return response.data;
    } catch (error) {
      throw new Error('Erreur lors de l\'identification');
    }
  }
  static async DemandeFin(studentId, DemandeData){
    try {
        
      const user = localStorage.getItem('userId'); // Récupérez le token depuis le local storage
      const token = localStorage.getItem('token'); // Récupérez le token depuis le local storage
    const response = await axios.post(`http://localhost:5140/api/Demande/NewStudentRequest/${user}`, DemandeData,
    {
      headers: {
        Authorization: `Bearer ${token}`, // Ajoutez le token dans le header de la requête
      },
    });
    
    
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de l\'identification');
  }

  }

}

export default StuService;