import { CameraKitCamera, CameraKitGallery } from 'react-native-camera-kit';

export default class FirebaseService {

  static checkDeviceCameraAuthorizationStatus() {
    return CameraKitCamera.checkDeviceCameraAuthorizationStatus();
  }

  static checkDevicePhotosAuthorizationStatus() {
    return CameraKitGallery.checkDevicePhotosAuthorizationStatus();
  }

}
