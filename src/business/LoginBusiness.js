import GoogleService from '../services/GoogleService';
import FirebaseService from '../services/FirebaseService';

export default class LoginBusiness {

  static signIn() {
    return new Promise((resolve, reject) => {
      GoogleService.signIn()
        .then(userInfo => {
          FirebaseService.signIn(userInfo.idToken, userInfo.accessToken)
            .then(currentUser => resolve(currentUser))
            .catch(error => {
              GoogleService.signOut();
              reject(error);
            });
        })
        .catch(error => reject(error));
    });
  }

}
