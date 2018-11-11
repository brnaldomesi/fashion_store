import { CameraKitGallery } from 'react-native-camera-kit';

class GalleryService {

  static requestDeviceAuthorizationIfNeeded() {
    return new Promise((resolve, reject) => {
      CameraKitGallery.checkDevicePhotosAuthorizationStatus()
        .then((isAuthorizedPrevious) => {
          if (isAuthorizedPrevious === 1) {
            resolve();
            return;
          }

          if (isAuthorizedPrevious !== -1) { // !=== not determined
            reject();
            return;
          }

          CameraKitGallery.requestDevicePhotosAuthorization()
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

export { GalleryService };
