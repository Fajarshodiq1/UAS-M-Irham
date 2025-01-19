import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const users = [
      { username: "user1", password: "password1" },
      { username: "user2", password: "password2" },
    ];

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      onLogin(username);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text> {/* Added Heading */}
      <View style={styles.form}>
        {error && <Text style={styles.error}>{error}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  form: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 15,
    paddingLeft: 10,
    fontSize: 16,
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default LoginForm;
