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

function PopularJobCard({jobTitle,companyName,companyLogo,salary,location}) {
  return (
    <View style={styles.PopularJobCardSection}>
    <View style={styles.leftSection}>
      <Image source={companyLogo} />
      </View>  
    <View style={styles.middleSection}>
      <Text style={styles.jobTitleText}>{jobTitle}</Text>
      <Text style={styles.companyNameText}>{companyName}</Text>
    </View>
    <View style={styles.rightSection}>
    <Text style={styles.salaryAmount}>{salary}</Text>
    <Text style={styles.locationText}>{location}</Text>
    </View>
    </View>
  )
}

export default PopularJobCard

const styles = StyleSheet.create({
  PopularJobCardSection:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:30,
    marginVertical:10,
    padding:10,
    backgroundColor:'#ffffff'
  },
  jobTitleText:{
    fontSize:14,
    fontWeight:'600',
    color:'#0D0D26'

},
companyNameText:{
  fontSize:13,
  fontWeight:'400',
  color:'#0D0D26'

},
salaryAmount:{
  fontSize:12,
  fontWeight:'400',
  color:'#0D0D26'

},
locationText:{
  fontSize:13,
  fontWeight:'400',
  color:'#0D0D26'

},
})