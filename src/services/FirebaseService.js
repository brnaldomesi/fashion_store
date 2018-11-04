import firebase from 'react-native-firebase';

export default class FirebaseService {

  static async signIn(idToken, accessToken) {
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    return await firebase.auth().signInWithCredential(credential);
  }

  static async signOut() {
    return await firebase.auth().signOut();
  }

  static addProduct(name, price, color, size) {
    productsCollection.add({ name, price, color, size });
  }

  static setProduct(id, name, price, color, size) {
    productsCollection.doc(id).set({ name, price, color, size });
  }

  static deleteProduct(id) {
    productsCollection.doc(id).delete();
  }

  static productsCollection() {
    return productsCollection;
  }

}

const productsCollection = firebase.firestore().collection('products');
