import React from 'react';
import { StyleSheet, Text, View,FlatList,AsyncStorage,ScrollView } from 'react-native';
import Header from './app/components/Header';
import SubTitle from './app/components/SubTitle';
import Input from './app/components/Input';
import TodoItem from './app/components/Todo';



export default class App extends React.Component {

  state = {
    inputValue: "",
    todos:[
      {
        title: "물 3잔 마시기",
        isComplete:false
      },
      {
        title: "30분 이상 걷기",
        isComplete:false
      }
    ]
  }
  componentWillMount(){
    AsyncStorage.getItem('@todo:state').then(
      (state)=>{
        if(state!=null){
          this.setState(JSON.parse(state));
        }
      }
    );
  }
  
  _change = (value)=>{
    this.setState({inputValue:value},this._save);
  }
  _set = ()=>{
    this.setState({
    inputValue: '',
    todos: this.state.todos.concat({title:this.state.inputValue,isComplete:false}),
    
  },this._save);}
  _press =({item,index})=>{
    return(<TodoItem text={item.title} isComplete={item.isComplete} 
      check={()=>{
        const new_ = [...this.state.todos];
        new_[index].isComplete = !new_[index].isComplete;
        this.setState({todos:new_},this._save);
      }}
      remove={()=>{
        const new_ = [...this.state.todos];
        new_.splice(index,1);
        this.setState({todos:new_},this._save);
      }}
      />);
  }
  _save = () =>{
    AsyncStorage.setItem('@todo:state',JSON.stringify(this.state));
  }
  render(){
    return (
    <View style={styles.container}>
      <View style={styles.headercentered}>
        <Header/> 
      </View>

      
      <View style={styles.subContainer}>
      <SubTitle title="할 일을 입력해주세요"/>
        <Input
          value = {this.state.inputValue}
          changeText = {this._change}
          addTodo = {this._set}
        />

      </View>
      <View style={styles.subContainer}>
        <SubTitle title="해야할 일 목록"/>
      </View>
      <ScrollView >
        <View style={{marginTop:8,marginLeft:20}}>
          <FlatList 
            data = {this.state.todos} 

            renderItem = {this._press}

            keyExtractor={(item,index)=>{return `${index}`}}
          />
        </View>
      </ScrollView>

    </View>
  );
      }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
  headercentered : {
    alignItems : 'center',
  },
  
  subContainer: {
    marginLeft:20, 
    marginTop:10,
    }, 
    
});