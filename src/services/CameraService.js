import { CameraKitCamera } from 'react-native-camera-kit';

export default class CameraService {

  static checkDeviceAuthorizationStatus() {
    return CameraKitCamera.checkDeviceCameraAuthorizationStatus();
  }

}
