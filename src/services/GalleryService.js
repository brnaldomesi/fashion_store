import { CameraKitGallery } from 'react-native-camera-kit';

export default class GalleryService {

  static checkDeviceAuthorizationStatus() {
    return CameraKitGallery.checkDevicePhotosAuthorizationStatus();
  }

}
