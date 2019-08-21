import axios from 'axios';

class CollectionService {
  constructor() {
    this.collection = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true,
    })
  }

getCollections() {
  return this.collection.get('/private')
  .then(({ data }) => data );
}

getCollectionById(id) {
  return this.collection.get(`/private/${id}`)
  .then(({ data }) => data );
}

createCollection(collection) {
  console.log(collection);
  return this.collection.post('/private/new', collection)
  .then(({ data }) => data );
}

addFormulaToCollection(formulaUrl, collectionId) {
  return this.collection.post(`/private/${collectionId}/add_formula`, {formulaUrl})
  .then(({ data }) => data );
}

editCollection(collection, collectionId) {
  return this.collection.put(`/private/${collectionId}/update`, collection)
  .then(({ data }) => data );

}

deleteCollection(collectionId) {
  return this.collection.delete(`/private/${collectionId}/delete`)
  .then(({ data }) => data );

}

}



const collectionService = new CollectionService();

export default collectionService