import { GoogleService, FirebaseService } from '../services';

class LoginBusiness {

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

export { LoginBusiness };
