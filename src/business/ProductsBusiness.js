import GoogleService from '../services/GoogleService';
import FirebaseService from '../services/FirebaseService';

export default class ProductBusiness {

  static async signOut() {
    await GoogleService.signOut();
    await FirebaseService.signOut();
  }

}
