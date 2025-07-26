import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { images } from '.';

const CartButton = () => {
    const total = 10;
    return (
        <TouchableOpacity className='cart-bin' onPress={()=>{}}>
            <Image source={images.bag} className='size-5 ' resizeMode='contain'/>
            {
                total > 0 && (
                    <View className='cart-badge'>
                        <Text className='small-bold text-white'>{total}</Text>
                    </View>
                )
            }
            <Text> Cart Button</Text>
        </TouchableOpacity>
    );
};

export default CartButton;
