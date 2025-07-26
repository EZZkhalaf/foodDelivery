// import { offers } from "@/components";
// import cn from 'clsx';
// import { Fragment } from "react";
// import { FlatList, Image, Pressable, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import './globals.css';
// export default function Index() {
//   return (
//     <SafeAreaView>
//       <FlatList 
//         data = {offers}
//         renderItem = {({item , index}) => {
//           const isEven : number = index %2 == 0;
//           return (
//             <View >
//               <Pressable className={cn("offer-card" , isEven ? 'flex-row-reverse' : 'flex-row')} style = {{backgroundColor : item.color}}>
//                 {({pressed}) => (
//                   <Fragment>
//                     <View className="h-full w-1/2" >
//                       <Image source = {item.image} className="size-full" resizeMethod = {"contain"}/>
//                     </View>
//                     <View className={"offer-card_info"}>

//                     </View>
//                   </Fragment>
//                 )}
//               </Pressable>
//             </View>
//           )
//         }}
//       />
//     </SafeAreaView>
//   );
// }



import { images, offers } from "@/components";
import cn from 'clsx'; // okay if used with NativeWind
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
            <Text>Cart</Text>
          </View>
        }
        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;
          return (
            <View className="mb-4 px-4">
              <Pressable
                className={cn("offer-card", isEven ? "flex-row-reverse" : "flex-row")}
                style={{ backgroundColor: item.color }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className="h-full w-1/2">
                      <Image
                        source={typeof item.image === "string" ? { uri: item.image } : item.image}
                        className="w-full h-full"
                        resizeMode="contain"
                      />
                    </View>
                    <View className="offer-card_info items-center justify-center">
                      <Text className="text-lg font-bold text-white">{item.title}</Text>
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
        contentContainerClassName="pb-20"
      />
    </SafeAreaView>

  );
}
