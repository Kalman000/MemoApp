import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>  

      <View>
        <View>
          <Text>MemoApp</Text>
          <Text>ログアウト</Text>
        </View>
      </View>

      <View>
        <View>
          <Text>買い物リスト</Text>
          <Text>2025年1月18日</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View>
        <View>
          <Text>買い物リスト</Text>
          <Text>2025年1月18日</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View>
        <View>
          <Text>買い物リスト</Text>
          <Text>2025年1月18日</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

    <View>
      <Text>+</Text>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Index

/*
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
*/