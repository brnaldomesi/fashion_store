import { CameraKitCamera } from 'react-native-camera-kit';

class CameraService {

  static checkDeviceAuthorizationStatus() {
    return CameraKitCamera.checkDeviceCameraAuthorizationStatus();
  }

}

export { CameraService };
