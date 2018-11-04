import FirebaseService from '../services/FirebaseService';

export default class ProductBusiness {

  static addProduct(name, price, color, size) {
    FirebaseService.addProduct(name, price, color, size);
  }

}
