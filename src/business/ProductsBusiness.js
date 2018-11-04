import GoogleService from '../services/GoogleService';
import FirebaseService from '../services/FirebaseService';

export default class ProductBusiness {

  static productsCollection() {
    return FirebaseService.productsCollection();
  }

  static onProductsCollectionUpdate(querySnapshot) {
    const products = [];

    querySnapshot.forEach((doc) => {
      const { thumbnailUrl, name, price, color, size } = doc.data();
      products.push({
        key: doc.id,
        thumbnailUrl,
        name,
        price,
        color,
        size
      });
    });

    return products;
  }

  static async signOut() {
    await GoogleService.signOut();
    await FirebaseService.signOut();
  }

}
