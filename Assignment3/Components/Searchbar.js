import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Pressable,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import filterButton from '../assets/filterSearch.png'

function Searchbar() {
  return (
    <View style={styles.searchArea}>
      <View style={styles.searchBox} >
      <Icon name="search" size={20} color="#888" style={styles.icon} />

        <TextInput placeholder="Search for a work or position" />
      </View>
      <View style={styles.searchfilter} >
        <Image source={filterButton}/>
      </View>
    </View>
  );
}

export default Searchbar;

const styles = StyleSheet.create({
searchArea:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:10,
    marginTop:30

},
searchBox:{
  columnGap:9,
  flexDirection:'row',
    flexBasis:'70%',
    backgroundColor:'#F2F2F3',
    padding:10,
    alignItems:'center',
    borderWidth:1,
    borderRadius:15,
    borderColor:'#F2F2F3'
    
},
searchfilter:{
    flexBasis:'10%',
    backgroundColor:'#F2F2F3',
    padding:10,
    borderRadius:7,
    marginRight:10
}

});
