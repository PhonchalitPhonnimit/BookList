import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import BookList from './BookList'
export default class PageOne extends Component {
 render() {
    const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
    return (
        <View style={styles.container}>
            <BookList />
            {/*<ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
            <Button onPress={this.doIt} title="TestClick" color="#841584"></Button>
            <Hi name="Arm"/>*/}
        </View>
    )
 }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
});