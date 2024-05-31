import React, { useState } from "react";
import {
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
  };

  return (
    <View style={styles.container}>
      {/* Today's Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.item}>
          {/* This is where the Task will go */}
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}

          {/*<Task text='Task 1' />
          <Task text='Task 2' /> */}
        </View>
      </View>
      {/* Write a Task Section */}
      <KeyboardAvoidingView
        behaviour={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Write a Task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  item: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    width: 250,
    borderRadius: 50,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderColor: "lightblue",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "lightblue",
    borderWidth: 1,
  },
  addText: {},
});
