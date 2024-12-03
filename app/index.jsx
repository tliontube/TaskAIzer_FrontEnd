import ApiCall from "@/utils/fileapis";
import { Link, useNavigation } from "expo-router";
import { useExpoRouter } from "expo-router/build/global-state/router-store";
import { Text, TouchableOpacity, View, Alert } from "react-native";
import { Divider, TextInput } from "react-native-paper";
import { Image } from "react-native";
import React, { useState } from "react";

export default function Index() {
  const Google = require("../assets/images/brand-google.png");
  const Facebook = require("../assets/images/brand-facebook.png");

  const router = useExpoRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email) {
      Alert.alert("Validation Error", "Email is required.");
      return;
    }
    if (!password) {
      Alert.alert("Validation Error", "Password is required.");
      return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert("Validation Error", "Please enter a valid email address.");
      return;
    }

    const body = {
      email: email,
      password: password,
    };
    // router.navigate("/(home)");
    try {
      const response = await ApiCall(
        "http://10.0.2.2:8000/",
        "user/login",
        "POST",
        body
      );
      if (response) {
        router.navigate("/(home)");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Login Error", "An error occurred during login.");
    }
  };

  return (
    <View className="bg-[#838383] h-full justify-between">
      <View className="h-[27%] flex justify-center items-center">
        <View className="absolute top-5 right-5">
          <View className="flex flex-row items-center gap-2">
            <Text className="text-center text-white ">
              Don't have an account?
            </Text>
            <TouchableOpacity className="rounded-lg bg-black p-2">
              <Link href="/signup">
                <Text className="text-center text-sm text-white">SignUp</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
        <Text className="font-bold text-white text-[3rem] text-center">
          Task
          <Text className="font-bold text-[yellow] text-[3rem] text-center">
            AI
          </Text>
          zer
        </Text>
      </View>
      <View className="h-[80%] bg-white flex-1 justify-start gap-5 rounded-t-3xl p-4">
        <Text className="font-semibold text-[2rem] text-center">
          Welcome To Task
          <Text className="font-bold text-[yellow] text-[2.2rem] text-center">
            AI
          </Text>
          zer
        </Text>
        <Text className="font-medium text-[1rem] text-center">
          Enter Your Details Below
        </Text>
        <TextInput
          mode="outlined"
          label="Email"
          value={email} // Bind the email state
          onChangeText={setEmail} // Update the email state
        />
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry={true}
          value={password} // Bind the password state
          onChangeText={setPassword} // Update the password state
        />
        <TouchableOpacity
          onPress={() => handleLogin()} // Call handleLogin on press
          className="w-full border rounded-2xl bg-[black] border-black p-3"
        >
          <Text className="text-center text-2xl text-white">Login</Text>
        </TouchableOpacity>
        <Text className="text-center">Forgot your password?</Text>
        <Divider bold />
        <Text className="text-center">Or Login With</Text>
        <View className="flex flex-row justify-between">
          <TouchableOpacity
            onPress={() => handleLogin()} // Call handleLogin on press
            className="w-[48%] flex flex-row gap-3 justify-center items-center border rounded-2xl bg-white border-black p-3"
          >
            <Image className="w-10 h-10" source={Google} />
            <Text className="text-2xl text-black">Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleLogin()} // Call handleLogin on press
            className="w-[48%] flex flex-row gap-3 justify-center items-center border rounded-2xl bg-white border-black p-3"
          >
            <Image className="w-10 h-10" source={Facebook} />
            <Text className="text-2xl text-black">Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
