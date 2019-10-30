import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
const Header = () => (
<View style={styles.h}>
<Text style={styles.headerText}>할일을 저장해두는 어플입니다!</Text>
</View>
);
const styles = StyleSheet.create({
h:{
marginTop:70,
marginBottom:40,
},
headerText: {
fontSize: 26,
fontWeight: 'bold',
color:'#3f4e66',
},
});
export default Header;
