import { ImageBackground } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({}) => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}>
        <Pressable><Pressable onPress={() => {
          navigation.navigate("aboutTheApp");
        }}><ImageBackground style={styles.jbwOyXQU} source={require("./background-basic-banner.png")} resizeMode="cover"></ImageBackground></Pressable></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  tCNUIrCG: {
    height: 60,
    width: 140,
    backgroundColor: "#000000",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    left: 98.5,
    top: 256.5
  },
  WsZoMhxO: {
    width: 100,
    height: 50,
    lineHeight: 44,
    fontSize: 24,
    borderRadius: 0,
    textAlign: "center",
    color: "#ffffff",
    position: "absolute",
    left: 20,
    top: 5
  },
  rcpuvhzg: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 200,
    height: 30,
    position: "absolute",
    left: 78.5,
    top: 199
  },
  AaxjoNFc: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  jbwOyXQU: {
    width: 333,
    height: 343
  }
});
export default Untitled1;