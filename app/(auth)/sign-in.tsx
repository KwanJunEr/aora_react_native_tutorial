import React from "react";
import { Image, ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log In to Aora
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e : any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Pasword"
            value={form.password}
            handleChangeText={(e : any) => setForm({ ...form, password: e })}   
            otherStyles="mt-7"
          />
          <CustomButton
          
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

{/*Spread operator used for preserving */}
