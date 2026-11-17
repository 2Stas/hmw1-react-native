import { router } from "expo-router";
import { Button, StyleSheet, View } from "react-native";
 
export default function Index() {
  return (
    <View style={styles.container}>
      <Button title="Open Profile" onPress={() => router.push('/profile')}/>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
 