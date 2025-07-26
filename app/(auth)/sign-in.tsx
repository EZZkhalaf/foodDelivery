import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const SignIn = () => {
  return (
    <View className="bg-white rounded-2xl p-6 mt-10 mx-4 shadow-md space-y-6">
      {/* Inputs */}
      <View className="space-y-4">
        <CustomInput
          placeholder="Enter your email"
          value=""
          onChangeText={(text) => {}}
          label="Email"
          keyboardType="email-address"
        />

        <CustomInput
          placeholder="Enter your password"
          value=""
          onChangeText={(text) => {}}
          label="Password"
          secureTextEntry
        />
      </View>

      {/* Sign In Button */}
      <CustomButton title="Sign In" />

      {/* Sign Up Link */}
      <View className="flex-row justify-center items-center space-x-1 mt-4">
        <Text className="text-sm text-gray-500">Don't have an account?</Text>
        <Link href="/sign-up" className="text-sm font-semibold text-blue-600">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
