import React from 'react';
import { StyleSheet, Text, View, Button, ListView } from 'react-native';
import Hi from './components/Hi'
import BookDetail from './components/BookDetail'
import BookList from './components/BookList'
import { Router, Scene } from 'react-native-router-flux';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

/*const Hi = () => (
  //ไฟล์เดียวกันไม่ต่อ this
  hi = () => () วงเล็บ render เลยไม่ต้อง return
  <Text>Hi {props.name}</Text>
)*/
/*<Hi name="Arm"/> name คือ props*/
/* props คือตัวแปรที่ถูกเซตมาจากภายนอก state คือตัวแปรที่อยู่ภายใน */

//ทำ list view create data sourece ก่อน แล้วประกาศ contructor สร้าง function renderRow
const data = [
  {title:'SEEING RED',author:'Sandra Brown',bookImage:'https://s1.nyt.com/du/books/images/9781455572106.jpg'},
  {title:'THE STORE',author:'James Patterson and Richard DiLallo',bookImage:'https://s1.nyt.com/du/books/images/9780316395540.jpg'}
]

export default class App extends React.Component {

  /*constructor(props){
    super(props)
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {dataSource : ds.cloneWithRows(data)}
  }*/

  componentWillMount(){
    
  }

  /*_renderRow(rowData){
    return <BookDetail {...rowData}/>
  }*/
  /*_renderRow(rowData){
    return <Text>{rowData.name}  {rowData.phone}</Text>
  }*/

  doIt = () => {
    console.log("test ok")
  }

  /*
    <View style={styles.container}>
        <BookList />
        <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
        <Button onPress={this.doIt} title="TestClick" color="#841584"></Button>
        <Hi name="Arm"/>
        </View>
  */

  /*
    export default class PageOne extends Component {
      render() {
        return (
        
        )
      }
    }
    const PageOne = () => (

    )
    const PageOne = () => {
      return (

      )
    }
  */

  render() {
    return (
      <Router>
        <Scene key="root">
        <Scene key="pageOne" component={PageOne} title="Movies List" initial={true} />
        <Scene key="pageTwo" component={PageTwo} title="Movie Detail" />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
});
