import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Hi extends React.Component {
    constructor(props){
        super(props) //มันไม่ใช่ deafault constructor ไม่ส่งผ่านอัตโนมัติใช้ super props
        this.state = { beBold: true }
    }
    toggleBold = () => {
        let beBold = !this.state.beBold;
        this.setState({beBold: beBold})
    }
    render() {
        return (
            <Text style={this.state.beBold ? styles.bold : styles.noBold}
            onPress={this.toggleBold}>
                Hi {this.props.name}
            </Text>
        )
    }
}
const styles = StyleSheet.create({
    bold: {
        fontWeight: 'bold'
    },
    noBold: {
        fontWeight: '400'
    }
})

export default Hi