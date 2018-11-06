import GalleryService from '../services/GalleryService';

export default class GalleryBusiness {

  static checkDeviceAuthorizationStatus() {
    return GalleryService.checkDeviceAuthorizationStatus();
  }

}
