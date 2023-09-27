import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";
import {
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  FlatList,
} from "react-native";
import Task from "./components/Task";
import { useEffect, useState } from "react";

export default function App() {
  const [textInput, setTextInput] = useState();
  const [tasks, setTasks] = useState([
  ]);
  const addTask = () => {
    console.log(textInput);
    if (textInput.trim() !== "") {
      setTasks([...tasks, textInput]);
      setTextInput("");
      Keyboard.dismiss();
    }
  };
  // useEffect(()=>{
  //   console.log(textInput);
  // },[textInput])
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.heading}>Today’s tasks</Text>

            <FlatList
              data={tasks}
              renderItem={({ item }) =>(<View style={styles.taskContainer}><Task  taskText={item}/></View>)}
            />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "height"}
        >
          <View style={styles.bottom}>
            <TextInput
              style={[styles.textInput, !textInput && styles.centeredText]}
              placeholder="Write a Task"
              placeholderTextColor="#c0c0c0"
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
            />
            <TouchableOpacity onPress={addTask} style={styles.addBottom}>
              <Icon name="add-sharp" size={32} color="gray" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredText: {
    textAlign: "center",
  },
  // wrapper: {
  //   backgroundColor: "#d3d3d3",
  //   height: "100%",
  //   width: "100%",
  // },
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 96,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: "space-between",
    backgroundColor: "gray",
  },
  top:{
    height:"80%"
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  taskContainer: {
    marginHorizontal: 20,
    paddingVertical:10,
  },
  textInput: {
    backgroundColor: "#fff",
    color: "#c0c0c0",
    paddingVertical: 15,
    borderRadius: 60,
    width: "80%",
    paddingLeft:20,
  },
  bottom: {
    flexDirection: "row",
    borderRadius: 52,
    gap: 20,
    position: "absolute",
    bottom: 36,
    justifyContent: "space-between",
    alignSelf: "center",
    marginHorizontal:20
  },
  addBottom: {
    backgroundColor: "#fff",
    borderRadius: 52,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
