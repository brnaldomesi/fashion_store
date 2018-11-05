import FirebaseService from '../services/FirebaseService';

export default class ProductBusiness {

  static addProduct(name, price, color, size) {
    FirebaseService.addProduct(name, price, color, size);
  }

  static setProduct(id, name, price, color, size) {
    FirebaseService.setProduct(id, name, price, color, size);
  }

  static deleteProduct(id) {
    return FirebaseService.deleteProduct(id);
  }


}
