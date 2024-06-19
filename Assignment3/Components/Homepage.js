import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import profilePicture from "../assets/Ellipse.png";
import Searchbar from "./Searchbar";
import FeaturedJobs from "./FeaturedJobs";
import PopularJobs from "./PopularJobs";

let name = "Eric Atsu";
let email = "eric@gmail.com";
export default function Homepage() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userEmail}>{email}</Text>
          </View>
          <View>
            <Image source={profilePicture} />
          </View>
        </View>
        <Searchbar />
        <FeaturedJobs />
        <PopularJobs />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFD",
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginHorizontal: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0D0D26",
  },
  userEmail: {
    fontSize: 20,
    fontWeight: "400",
    color: "#95969D",
  },
});
