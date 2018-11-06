import CameraService from '../services/CameraService';

export default class CameraBusiness {

  static checkDeviceAuthorizationStatus() {
    return CameraService.checkDeviceAuthorizationStatus();
  }

}
