import React from 'react';
import { StyleSheet, Text, View, Button, ListView } from 'react-native';
import BookDetail from './BookDetail'

/*const data = [
    {title:'SEEING RED',author:'Sandra Brown',bookImage:'https://s1.nyt.com/du/books/images/9781455572106.jpg'},
    {title:'THE STORE',author:'James Patterson and Richard DiLallo',bookImage:'https://s1.nyt.com/du/books/images/9780316395540.jpg'}
]*/

  
class BookList extends React.Component {

    constructor(props){
        super(props)
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {dataSource : ds.cloneWithRows([])}
    }

    componentWillMount(){
        fetch('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=73b19491b83909c7e07016f4bb4644f9:2:60667290')
        .then((response) => response.json()) // parse to JSON
        .then((responseJSON) => {
            console.log(responseJSON.results.books)
            let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
            this.setState({
                dataSource : ds.cloneWithRows(responseJSON.results.books)
            })    
        })
    }

    _renderRow(rowData){
        return <BookDetail {...rowData}/>
    }
    render() {
        return (
            <View>
                <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}/>
            </View>
        )
    }
}

export default BookList