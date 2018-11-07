import firebase from 'react-native-firebase';

class FirebaseService {

  static async signIn(idToken, accessToken) {
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    return await firebase.auth().signInWithCredential(credential);
  }

  static async signOut() {
    return await firebase.auth().signOut();
  }

  static addProduct(name, price, color, size, thumbnailUrl, imageUrl) {
    return productsCollection.add({ name, price, color, size, thumbnailUrl, imageUrl });
  }

  static setProduct(id, name, price, color, size, thumbnailUrl, imageUrl) {
    return productsCollection.doc(id).set({ name, price, color, size, thumbnailUrl, imageUrl });
  }

  static deleteProduct(id) {
    return productsCollection.doc(id).delete();
  }

  static productsCollection() {
    return productsCollection;
  }

}

const productsCollection = firebase.firestore().collection('products');

export { FirebaseService };
