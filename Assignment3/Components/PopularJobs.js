import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import PopularJobCard from "./PopularJobCard";
import burgerKing from "../assets/burgerKing.png";
import BeatsLogo from '../assets/beats Logo.png';
import Facebook from '../assets/ion_logo-facebook.png'
import google from '../assets/flat-color-icons_google.png'
function PopularJobs() {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.featuredJobsText}>Popular Jobs</Text>
        </View>
        <View>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
      </View>
      <View>
      <PopularJobCard
        companyLogo={burgerKing}
        jobTitle={"Jr Executive"}
        salary={"$96,000/y"}
        companyName={"Burger King"}
        location={'Los Angels,USA'}
      />
      <PopularJobCard
        companyLogo={BeatsLogo}
        jobTitle={"Product Manager"}
        salary={"$84,000/y"}
        companyName={"Beats"}
        location={'Florida,USA'}
      />
       <PopularJobCard
        companyLogo={Facebook}
        jobTitle={"Product Manager"}
        salary={"$86,000/y"}
        companyName={"Facebook"}
        location={'Florida,USA'}
      />
      <PopularJobCard
        companyLogo={google}
        jobTitle={"Software Developer"}
        salary={"$180,000/y"}
        companyName={"Google"}
        location={'Florida,USA'}
      />
      <PopularJobCard
        companyLogo={Facebook}
        jobTitle={"Product Manager"}
        salary={"$86,000/y"}
        companyName={"Beats"}
        location={'Florida,USA'}
      />
      <PopularJobCard
        companyLogo={Facebook}
        jobTitle={"Product Manager"}
        salary={"$86,000/y"}
        companyName={"Beats"}
        location={'Florida,USA'}
      />
      <PopularJobCard
        companyLogo={Facebook}
        jobTitle={"Product Manager"}
        salary={"$86,000/y"}
        companyName={"Beats"}
        location={'Florida,USA'}
      />
      </View>
    </View>
  );
}

export default PopularJobs;

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 50,
  },
  featuredJobsText: {
    color: "#0D0D26",
    fontSize: 16,
    fontWeight: "600",
  },
  seeAllText: {
    color: "#95969D",
    fontSize: 14,
    fontWeight: "400",
  },
});
