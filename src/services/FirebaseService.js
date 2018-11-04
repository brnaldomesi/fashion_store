import firebase from 'react-native-firebase';

export default class FirebaseService {

  static async signInAndRetrieveData(idToken, accessToken) {
    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    return await firebase.auth().signInWithCredential(credential);
  }

}
