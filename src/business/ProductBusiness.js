import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import CameraService from '../services/CameraService';
import GalleryService from '../services/GalleryService';
import FirebaseService from '../services/FirebaseService';

class ProductBusiness {

  static checkDeviceCameraAuthorizationStatus() {
    return CameraService.checkDeviceAuthorizationStatus();
  }

  static checkDevicePhotosAuthorizationStatus() {
    return GalleryService.checkDeviceAuthorizationStatus();
  }

  static isSimulator() {
    if (Platform.OS === 'ios') {
      return DeviceInfo.isEmulator();
    }
    return false;
  }

  static saveProduct(id = null, name, price, color, size, thumbnailUrl, imageUrl) {
    if (id === null) {
      return FirebaseService.addProduct(name, price, color, size, thumbnailUrl, imageUrl);
    }
    return FirebaseService.setProduct(id, name, price, color, size, thumbnailUrl, imageUrl);
  }

  static deleteProduct(id) {
    return FirebaseService.deleteProduct(id);
  }

}

export { ProductBusiness };
