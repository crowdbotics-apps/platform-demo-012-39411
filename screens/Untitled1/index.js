import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  route
}) => {
  const {
    title = "title"
  } = route.params || {};
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.tCNUIrCG}><Text style={styles.WsZoMhxO}>Click Me</Text></View></ScrollView>
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
    left: 108.5,
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
  }
});
export default Untitled1;