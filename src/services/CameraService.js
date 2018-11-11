import { CameraKitCamera } from 'react-native-camera-kit';

class CameraService {

  static requestDeviceAuthorizationIfNeeded() {
    return new Promise((resolve, reject) => {
      CameraKitCamera.checkDeviceCameraAuthorizationStatus()
        .then((isAuthorizedPrevious) => {
          if (isAuthorizedPrevious === 1) {
            resolve();
            return;
          }

          if (isAuthorizedPrevious !== -1) { // !=== not determined
            reject();
            return;
          }

          CameraKitCamera.requestDeviceCameraAuthorization()
            .then((isAuthorized) => {
              if (isAuthorized) {
                resolve();
              } else {
                reject();
              }
            })
            .catch(() => reject());
        })
        .catch(() => reject());
    });
  }

}

export { CameraService };
