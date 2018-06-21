import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react';
import AddToDo from './add_item';
import listData from '../data/list';
import List from './list';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount(){
        this.getListData();
    }
    getListData(){
        //make server call here for data
        this.setState({
            list: listData
        })
    }
    addItem(item){
        this.setState({
            list: [item, ...this.state.list]
        })
    }

    render(){
        console.log(this.state);
        return(
        <div className='container'>
            <h1 className="center">To Do List</h1>
            <AddToDo add={this.addItem.bind(this)}/>
            <List data={this.state.list}/>
         </div>
        );
    }
};
export default App;
