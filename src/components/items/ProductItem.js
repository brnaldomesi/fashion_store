import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import colors from '../../colors';
import fonts from '../../fonts';


const ProductItem = ({ item, margin, onPress }) => {
  const {
    containerStyle,
    touchableStyle,
    imageStyle,
    productViewStyle,
    nameTextStyle,
    priceTextStyle,
    productDetailsViewStyle,
    productDetailsSubviewStyle,
    subviewTitleTextStyle,
    subviewValueTextStyle,
    separatorStyle
  } = styles;

  return (
    <View style={[{ marginTop: margin / 2, marginBottom: margin / 2 }, containerStyle]}>
      <TouchableOpacity style={touchableStyle} onPress={onPress}>
        <Image style={[{ marginRight: margin }, imageStyle]} />

        <View style={productViewStyle}>
          <Text style={nameTextStyle}>Product Name</Text>
          <Text style={priceTextStyle}>RP 169.000</Text>

          <View style={productDetailsViewStyle}>
            <View style={productDetailsSubviewStyle}>
              <Text style={subviewTitleTextStyle}>Color</Text>
              <Text style={subviewValueTextStyle}>Blue</Text>
            </View>

            <View style={productDetailsSubviewStyle}>
              <Text style={subviewTitleTextStyle}>Size</Text>
              <Text style={subviewValueTextStyle}>M</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={[{ marginTop: margin }, separatorStyle]} />
    </View>
  );
};

const higherMargin = 5;
const lowerMargin = 2.5;
const styles = {
  containerStyle: {

  },

  touchableStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  imageStyle: {
    backgroundColor: colors.purple,
    width: 90,
    height: 90,
    borderRadius: 5,
  },

  productViewStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  nameTextStyle: {
    fontFamily: fonts.regular,
    color: colors.grayDark,
    fontSize: 18,
    marginBottom: higherMargin
  },
  priceTextStyle: {
    fontFamily: fonts.regular,
    color: colors.purple,
    fontSize: 16,
    marginBottom: higherMargin
  },

  productDetailsViewStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  productDetailsSubviewStyle: {
    flex: 1,
  },
  subviewTitleTextStyle: {
    fontFamily: fonts.light,
    color: colors.gray,
    fontSize: 14,
    marginBottom: lowerMargin
  },
  subviewValueTextStyle: {
    fontFamily: fonts.regular,
    color: colors.grayDark,
    fontSize: 14
  },

  separatorStyle: {
    backgroundColor: colors.grayLight,
    height: 0.5
  }
};


export { ProductItem };
