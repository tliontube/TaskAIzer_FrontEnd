import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-paper";

export default function Index() {
  const bellImage = require("../../assets/images/bell.png");
  const searchImage = require("../../assets/images/search.png");
  return (
    <View className=" h-full">
      <View className="flex flex-row  p-4 justify-between mt-1 items-center">
        <Text className="text-xl font-bold">Welcome Thomas</Text>
        <View className=" w-[25%]  flex flex-row justify-between items-center">
          <TouchableOpacity className="border border-black p-1 rounded-full ">
            <Image source={searchImage} className="w-6 h-6" />
          </TouchableOpacity>
          <TouchableOpacity className="border border-black p-1 rounded-full">
            <Image source={bellImage} className="w-6 h-6" />
          </TouchableOpacity>
        </View>
      </View>
      <Divider bold />
      <View className="flex flex-row justify-between items-center p-4 mt-1">
        <Text className="text-2xl font-bold">Recent Projects</Text>
        <TouchableOpacity>
          <Text className="text-lg font-bold text-[gray]">View All</Text>
        </TouchableOpacity>
      </View>
      <View className="m-1 h-[25%] ">
        <ScrollView horizontal className="w-full p-2">
          <View className="border-2 border-black m-1 h-[97%] w-[300px] rounded-lg"></View>
          <View className="border-2 border-black m-1 h-[97%] w-[300px] rounded-lg"></View>
          <View className="border-2 border-black m-1 h-[97%] w-[300px] rounded-lg"></View>
          <View className="border-2 border-black m-1 h-[97%] w-[300px] rounded-lg"></View>
          <View className="border-2 border-black m-1 h-[97%] w-[300px] rounded-lg"></View>
          <View className="border-2 border-black m-1 h-[97%] w-[300px] rounded-lg"></View>
        </ScrollView>
      </View>
      <View className="flex flex-row justify-between items-center p-4 mt-1">
        <Text className="text-2xl font-bold">Your Task Today</Text>
        <TouchableOpacity>
          <Text className="text-lg font-bold text-[gray]">View All</Text>
        </TouchableOpacity>
      </View>
      <View className="m-1 h-[45%] ">
        <ScrollView className="w-full p-2">
          <View className="border-2 border-black m-1 h-[100px] w-[98%] rounded-lg"></View>
          <View className="border-2 border-black m-1 h-[100px] w-[98%] rounded-lg"></View>
          <View className="border-2 border-black m-1 h-[100px] w-[98%] rounded-lg"></View>
          <View className="border-2 border-black m-1 h-[100px] w-[98%] rounded-lg"></View>
          <View className="border-2 border-black m-1 h-[100px] w-[98%] rounded-lg"></View>
          <View className="border-2 border-black m-1 h-[100px] w-[98%] rounded-lg"></View>
        </ScrollView>
      </View>
    </View>
  );
}
