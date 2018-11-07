import { GoogleService, FirebaseService } from '../services';

class ProductsBusiness {

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

export { ProductsBusiness };
