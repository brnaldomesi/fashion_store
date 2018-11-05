import GoogleService from '../services/GoogleService';
import FirebaseService from '../services/FirebaseService';

export default class ProductBusiness {

  static deleteProduct(id) {
    return FirebaseService.deleteProduct(id);
  }

  static productsCollection() {
    return FirebaseService.productsCollection();
  }

  static onProductsCollectionUpdate(querySnapshot) {
    const products = [];

    querySnapshot.forEach((doc) => {
      const { thumbnailUrl, name, price, color, size, imageUrl } = doc.data();
      products.push({ id: doc.id, thumbnailUrl, name, price, color, size, imageUrl });
    });

    return products;
  }

  static async signOut() {
    await GoogleService.signOut();
    await FirebaseService.signOut();
  }

}
