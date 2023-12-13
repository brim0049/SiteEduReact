import axios from 'axios';

class AuthService {
    static async Auth(student) {
        try {
          const response = await axios.post('http://localhost:5140/api/Authorization/login', student);
          const { token, studentToReturn } = response.data;

          // Stocker le token dans le local storage pour une utilisation ultérieure
          localStorage.setItem('token', token);
      
          // Stocker l'ID de l'utilisateur dans le local storage si nécessaire
          const userId = studentToReturn.id;
          localStorage.setItem('userId', userId);
    
        } catch (error) {
          throw new Error('Error during login');
        }
      }
    
      saveUserToken(token) {
        localStorage.setItem('userToken', token);
      }
    
      saveUserId(userId) {
        localStorage.setItem('userId', userId);
      }
}

export default AuthService;
