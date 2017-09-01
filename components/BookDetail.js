import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class BookDetail extends React.Component {
    render() {
        const goToPageTwo = () => Actions.pageTwo({...this.props});
        return (
            <TouchableOpacity style={styles.container} onPress={goToPageTwo}>
                <View style={styles.left}>
                    <Image resizeMode='contain' style={styles.image} source={{uri: this.props.book_image}}/>
                </View>
                <View style={styles.right}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.text}>{this.props.author}</Text>
                </View>
                {/*<Text>{this.props.title}</Text>
                <Text>{this.props.author}</Text>
                <Image style={styles.image} source={{uri: this.props.bookImage}}/>*/}
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10
    },
    left: {
        flex: 3,
        height: 140,
        paddingLeft: 4,
        backgroundColor: '#fff'
    },
    right: {
        flex: 6,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#fff'
    },
    image: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 20
    },
    text: {
        marginTop: 5,
        fontWeight: '300',
        color: '#000'
    }
})

export default BookDetail