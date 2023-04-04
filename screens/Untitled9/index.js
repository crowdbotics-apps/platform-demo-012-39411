import { faqList } from "../../modules/faq/store/index.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled9 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(faqList());
  }, []);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.MOMCPsgY}></TextInput><TextInput style={styles.luBJZacE}></TextInput><View style={styles.YMMVUoTF}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  MOMCPsgY: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  luBJZacE: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    top: 0
  },
  YMMVUoTF: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled9;