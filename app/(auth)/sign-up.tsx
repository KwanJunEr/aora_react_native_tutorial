import React from "react";
import { Image, ScrollView, View, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import {createUser} from "../../lib/appwrite"

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit =  async () => {
    if(!form.username || !form.email || !form.password){
      Alert.alert('Error','Please fill in all the fields')
    }
    setIsSubmitting(true);
    try{
      const result = await createUser(form.email, form.password, form.username);

      //set it to global content
      router.replace('/home')
    }catch(error : any){
      Alert.alert('Error', error.message)
    }finally{
      setIsSubmitting(false)
    }
   
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign Up to Aora
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e: any) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Pasword"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

{
  /*Spread operator used for preserving */
}
