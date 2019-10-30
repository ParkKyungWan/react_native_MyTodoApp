import React from "react";
import {TextInput,StyleSheet} from 'react-native';
const Input = ({value,changeText,addTodo}) => (
<TextInput
value = {value}
onChangeText = {changeText} //텍스트 바꼈을때
onEndEditing={addTodo} // 입력 끝날때

style={styles.input}
placeholder={"오늘의 할 일"}
maxLength={30}
returnKeyType="done"/> 
);
const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        paddingTop:15,
}
})
export default Input;
