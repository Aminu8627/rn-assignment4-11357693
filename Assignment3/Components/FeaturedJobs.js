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
import FeaturedJobCard from "./FeaturedJobCard";
import Facebook from "../assets/ion_logo-facebook.png";
import google from '../assets/flat-color-icons_google.png'
function FeaturedJobs() {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.featuredJobsText}>Featured Jobs</Text>
        </View>
        <View>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <FeaturedJobCard
        companyLogo={Facebook}
        jobTitle={"Software Engineer"}
        location={"Accra,Ghana"}
        companyName={"Facebook"}
        salary={"$180,000"}
        style={styles.facebookJobRole}
        
      />
      <FeaturedJobCard
        companyLogo={google}
        jobTitle={"Frontend Developer"}
        location={"Accra,Ghana"}
        companyName={"Google"}
        salary={"$160.000"}
        style={styles.googleJobRole}
        
      />
      <FeaturedJobCard
        companyLogo={Facebook}
        jobTitle={"Software Engineer"}
        location={"Accra,Ghana"}
        companyName={"Facebook"}
        salary={"$180.00"}
        style={styles.facebookJobRole}
        
      />
      <FeaturedJobCard
        companyLogo={Facebook}
        jobTitle={"Software Engineer"}
        location={"Accra,Ghana"}
        companyName={"Facebook"}
        salary={"$180.00"}
        style={styles.facebookJobRole}
        
      />
      <FeaturedJobCard
        companyLogo={Facebook}
        jobTitle={"Software Engineer"}
        location={"Accra,Ghana"}
        companyName={"Facebook"}
        salary={"$180.00"}
        style={styles.facebookJobRole}
        
      />
      <FeaturedJobCard
        companyLogo={Facebook}
        jobTitle={"Software Engineer"}
        location={"Accra,Ghana"}
        companyName={"Facebook"}
        salary={"$180.00"}
        style={styles.facebookJobRole}
        
      />
      </ScrollView>
    </View>
  );
}

export default FeaturedJobs;

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
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
  facebookJobRole:{
  },
  googleJobRole:{
    backgroundColor:'#04284A'
  }
});
