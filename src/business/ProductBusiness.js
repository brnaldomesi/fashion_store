import FirebaseService from '../services/FirebaseService';

export default class ProductBusiness {

  static saveProduct(id = null, name, price, color, size, thumbnailUrl, imageUrl) {
    if (id === null) {
      return FirebaseService.addProduct(name, price, color, size, thumbnailUrl, imageUrl);
    }
    return FirebaseService.setProduct(id, name, price, color, size, thumbnailUrl, imageUrl);
  }

  static deleteProduct(id) {
    return FirebaseService.deleteProduct(id);
  }


}
