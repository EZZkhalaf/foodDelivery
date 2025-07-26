import { CustomButtonProps } from '@/type';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

const CustomButton = ({
  onPress,
  title = 'Click Me',
  style,
  textStyle,
  leftIcon,
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-green-600 rounded-xl px-5 py-3 flex-row items-center justify-center active:opacity-80"
      style={style}
      onPress={onPress}
    >
      {leftIcon && <View className="mr-2">{leftIcon}</View>}

      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text
          className="text-white text-base font-semibold"
          style={textStyle}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
