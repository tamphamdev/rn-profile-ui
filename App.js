import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView
} from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf")
  });
};
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
          <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
        </View>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("./assets/profile-picture.png")}
              style={styles.image}
            ></Image>
            <View style={styles.dm}>
              <MaterialIcons
                name="chat"
                size={18}
                color="#DFD8C8"
              ></MaterialIcons>
            </View>
            <View style={styles.active}></View>
            <View style={styles.add}>
              <Ionicons
                name="ios-add"
                size={48}
                color="#DFD8C8"
                style={{ marginTop: 6, marginLeft: 2 }}
              ></Ionicons>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
              Julie
            </Text>
            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
              Photographer
            </Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
            <Text style={[styles.text, styles.subText]}>Posts</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1
              }
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>42,232</Text>
            <Text style={[styles.text, styles.subText]}>Follower</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>208</Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
          </View>
        </View>
        {/* End info container */}
        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./assets/media1.jpg")}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./assets/media2.jpg")}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("./assets/media3.jpg")}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </ScrollView>
          <View style={styles.mediaCount}>
            <Text
              style={[
                styles.text,
                { fontSize: 24, color: "#DFD8C8", fontWeight: "300" }
              ]}
            >
              70
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }
              ]}
            >
              Media
            </Text>
          </View>
        </View>

        <Text style={[styles.subText, styles.recent]}> Recent Activity</Text>
        <View style={{ alignItems: "center" }}>
          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
              >
                Started following
                <Text style={{ fontWeight: "bold" }}>
                  {" "}
                  Jakie Chan and{" "}
                  <Text style={{ fontWeight: "bold" }}> Postmalone</Text>
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
              >
                Started following
                <Text style={{ fontWeight: "bold" }}> Billie Eilish</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    fontFamily: "roboto-light",
    color: "#52575D"
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    fontWeight: "500",
    textTransform: "uppercase"
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    width: 40,
    height: 40,
    top: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  active: {
    backgroundColor: "#32FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32
  },
  statsBox: {
    flex: 1,
    alignItems: "center"
  },
  mediaImageContainer: {
    width: 140,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1
  },
  recent: {
    marginLeft: 85,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16
  },
  recentItemIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20
  }
});
