import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <WebView source={{ uri: "https://mock-up.onehomeph.com/login.php" }} />
  </SafeAreaView>
);

export default App;
