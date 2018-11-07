import GoogleService from '../services/GoogleService';
import FirebaseService from '../services/FirebaseService';

class AppBusiness {

  static configure() {
    GoogleService.configure();
  }

  static signInSilentlyIfNeeded() {
    return new Promise((resolve, reject) => {
      GoogleService.signInSilentlyIfNeeded()
        .then(userInfo => {
          FirebaseService.signIn(userInfo.idToken, userInfo.accessToken)
            .then(currentUser => resolve(currentUser))
            .catch(error => {
              GoogleService.signOut();
              reject(error);
            });
        })
        .catch(() => { reject(); });
    });
  }

}

export { AppBusiness };
