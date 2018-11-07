import { CameraKitGallery } from 'react-native-camera-kit';

class GalleryService {

  static checkDeviceAuthorizationStatus() {
    return CameraKitGallery.checkDevicePhotosAuthorizationStatus();
  }

}

export { GalleryService };
