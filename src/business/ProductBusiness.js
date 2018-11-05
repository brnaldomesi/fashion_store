import FirebaseService from '../services/FirebaseService';

export default class ProductBusiness {

  static saveProduct(id = null, name, price, color, size) {
    if (id === null) {
      return FirebaseService.addProduct(name, price, color, size);
    }
    return FirebaseService.setProduct(id, name, price, color, size);
  }

  static deleteProduct(id) {
    return FirebaseService.deleteProduct(id);
  }


}
