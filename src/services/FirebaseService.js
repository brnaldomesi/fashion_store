import firebase from 'react-native-firebase';

class FirebaseService {

  static async signIn(idToken, accessToken) {
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    return await firebase.auth().signInWithCredential(credential);
  }

  static async signOut() {
    return await firebase.auth().signOut();
  }

  static addProduct(imageUrl, name, price, color, size) {
    return this.productsCollection().add({ imageUrl, name, price, color, size });
  }

  static setProduct(id, imageUrl, name, price, color, size) {
    return this.productsCollection().doc(id).set({ imageUrl, name, price, color, size });
  }

  static deleteProduct(id) {
    return this.productsCollection().doc(id).delete();
  }

  static productsCollection() {
    return firebase.firestore().collection('products');
  }

}

export { FirebaseService };
