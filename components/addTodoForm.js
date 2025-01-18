import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../src/features/todosSlice";

const AddTodoForm = () => {
  const todos = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [dueDate, setDueDate] = useState("");

  const save = () => {
    setError("");
    if (!title.length) {
      setError("Title can't be empty.");
      return;
    }
    if (!description.length) {
      setError("Description can't be empty.");
      return;
    }
    if (!dueDate) {
      setError("Due date can't be empty.");
      return;
    }
    if (todos.filter((el) => el.title === title).length) {
      setDescription("");
      setTitle("");
      setError("Duplicated todo.");
      return;
    }
    const newTodo = { title, description, dueDate, status: false };
    setTitle("");
    setDescription("");
    setDueDate("");
    return dispatch(addTodo(newTodo));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Enter the Title"
      />

      <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Enter the Description"
      />

      <TextInput
        style={styles.input}
        onChangeText={setDueDate}
        value={dueDate}
        placeholder="Enter the Due Date (YYYY-MM-DD)"
      />

      <Text style={{ color: "red", textAlign: "center", marginBottom: 3 }}>
        {error}
      </Text>

      <Button title="Save" onPress={save} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddTodoForm;
