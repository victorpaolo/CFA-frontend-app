import axios from 'axios';

class CollectionService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true,
    })
  }


  me() {
    return this.auth.get('/auth/me')
    .then(response => response.data)
  }
}

const collectionService = new CollectionService();

export default collectionService