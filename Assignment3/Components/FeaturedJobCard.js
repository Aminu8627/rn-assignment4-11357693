import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Image,
    Pressable,
    ImageBackground,
  } from "react-native";
  import cardbackground from '../assets/Mask Group.png'

function FeaturedJobCard({jobTitle,companyName,companyLogo,salary,location}) {
  return (
    <View style={styles.featuredJobCard}>
      <View style={styles.topSection}>
        <View style={styles.logoOfCompany}>
        <Image source={companyLogo}/>
        </View>
        <View>
            <Text style={styles.jobTitleText}>{jobTitle}</Text>
            <Text style={styles.companyNameText}>{companyName}</Text>

        </View>
      </View>
      <View style={styles.bottomSection}>
        <View>
            <Text style={styles.salaryAmount}>{salary}</Text>
        </View>
        <View>
            <Text style={styles.locationText}>{location}</Text>

        </View>
      </View>
      
    </View>
  )
}

export default FeaturedJobCard

const styles = StyleSheet.create({
    featuredJobCard:{
        borderRadius:10,
        flexDirection:'column',
        justifyContent:'space-between',
        width:280,
        height:186,
        marginHorizontal:10,
        padding:10,
        backgroundColor:'#5386E4'
    },
    topSection:{
        flexDirection:'row',
    },
    logoOfCompany:{
        borderRadius:5,
        backgroundColor:'#FFFFFF',
        padding:8,
        marginRight:10
    },
    jobTitleText:{
        fontSize:16,
        fontWeight:'600',
        color:'#ffffff'

    },
    companyNameText:{
        fontSize:14,
        fontWeight:'400',
        color:'#ffffff'

    },
    bottomSection:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    salaryAmount:{
        fontSize:15,
        fontWeight:'500',
        color:'#ffffff'

    },
    locationText:{
        fontSize:15,
        fontWeight:'500',
        color:'#ffffff'

    },
})

