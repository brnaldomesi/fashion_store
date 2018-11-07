import { GoogleService, FirebaseService } from '../services';

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
