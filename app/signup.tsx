import ApiCall from "@/utils/fileapis";
import { Link, useNavigation } from "expo-router";
import { useExpoRouter } from "expo-router/build/global-state/router-store";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { Divider, TextInput } from "react-native-paper";
import React, { useState } from "react";

export default function Index() {
  const Google = require("../assets/images/brand-google.png");
  const Facebook = require("../assets/images/brand-facebook.png");
  const router = useExpoRouter();

  // State for user details
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password

  const handleLogin = async () => {
    // Validation
    if (!userName || !email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const body = {
      username: userName,
      email: email,
      password: password,
    };

    try {
      const response = await ApiCall(
        "https://taskaizer-backend.onrender.com/",
        "user/register",
        "POST",
        body
      );
      if (response) {
        router.navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="bg-[#838383] h-full justify-between">
      <View className="h-[20%] flex justify-center items-center">
        <Text className="font-bold text-white text-[3rem] text-center">
          Task
          <Text className="font-bold text-[yellow] text-[3rem] text-center">
            AI
          </Text>
          zer
        </Text>
      </View>
      <View className="h-[85%] bg-white flex-1 justify-start gap-3 rounded-t-3xl p-4">
        <Text className="font-semibold text-[2rem] text-center">
          Get Started For Free
        </Text>
        <Text className="font-medium text-[1rem] text-center">
          No Credit Card Required
        </Text>
        <TextInput
          mode="outlined"
          label="User  Name"
          value={userName} // Bind the userName state
          onChangeText={setUserName} // Update the userName state
        />
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
        <TextInput
          mode="outlined"
          label="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword} // Bind the confirmPassword state
          onChangeText={setConfirmPassword} // Update the confirmPassword state
        />
        <TouchableOpacity
          onPress={() => handleLogin()} // Call handleLogin on press
          className="w-full border rounded-2xl bg-[black] border-black p-3"
        >
          <Text className="text-center text-2xl text-white">Sign Up</Text>
        </TouchableOpacity>
        <Divider bold />
        <Text className="text-center">Or Sign Up With</Text>
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
