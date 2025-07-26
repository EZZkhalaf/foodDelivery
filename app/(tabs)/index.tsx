import { images, offers } from "@/components";
import CartButton from "@/components/CartButton";
import cn from 'clsx';
import { Fragment } from "react";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        keyExtractor={(_, index) => index.toString()}
        ListHeaderComponent={
          <View className="flex-row justify-between w-full my-5 px-5">
            <View>
              <Text className="text-primary small-bold">Deliver To</Text>
              <TouchableOpacity className="flex-row items-center mt-0.5">
                <Text className="font-bold text-dark-100">Jordan</Text>
                <Image source={images.arrowDown} className="w-3 h-3 ml-1" resizeMode="contain" />
              </TouchableOpacity>
            </View>
            <View>
              <CartButton />
            </View>
          </View>
        }
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;
          return (
            <View className="mb-4 px-4">
              <Pressable
                className={cn("offer-card", isEven ? "flex-row-reverse" : "flex-row")}
                style={{
                  backgroundColor: item.color,
                  borderRadius: 12,
                  padding: 12,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View style={{ width: '50%' }}>
                      <Image
                        source={typeof item.image === "string" ? { uri: item.image } : item.image}
                        style={{ width: '100%', height: 100 }} // ✅ Give fixed height
                        resizeMode="contain"
                      />
                    </View>
                    <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                      <Text className="text-lg font-bold text-white text-center">{item.title}</Text>
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
        
        contentContainerStyle={{
          paddingBottom: 120, // ✅ give extra space to scroll past CartButton
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
