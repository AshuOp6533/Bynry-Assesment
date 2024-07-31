import axios from 'axios';

const API_URL = 'http://localhost:8080/api/profiles';

class ProfileService {
  getProfiles() {
    return axios.get(API_URL);
  }

  getProfileById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  deleteProfile(id) {
    return axios.delete(`${API_URL}/${id}`);
  }

  // Additional methods for creating and updating profiles can be added here
}

export default new ProfileService();
