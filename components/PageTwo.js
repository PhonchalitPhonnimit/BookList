import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class PageOne extends Component {
 render() {
    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <Image resizeMode='contain' style={styles.image} source={{uri: this.props.book_image}}/>
            </View>
            <View style={{flex:1}}>
                <Text style={styles.header}>Title</Text>
                <Text>{this.props.title}</Text>
                <Text style={styles.header}>Author</Text>
                <Text>{this.props.author}</Text>
                <Text style={styles.header}>description</Text>
                <Text>{this.props.description}</Text>
            </View>
        </View>
    )
 }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      paddingLeft: 10
    },
    header: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5
    },
    image: {
        flex: 1
    }
});