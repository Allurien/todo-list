import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import AddToDo from './add_item';
import List from './list';
import axios from 'axios';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
        this.baseURL = 'http://api.reactprototypes.com';
        this.api_key = '?key=c418allu';
    }
    componentDidMount(){
        this.getListData();
    }
    async getListData(){
        try {
            const resp = await axios.get(`${this.baseURL}/todos${this.api_key}`);
            this.setState({
                    list: resp.data.todos
                });
        } catch(err){
            console.log('Get data error:', err.message);
        }
    }
    async addItem(item){
        try {
            await axios.post(`${this.baseURL}/todos${this.api_key}`, item);
            this.getListData();
        } catch(err){
            console.log('add error data:', err.message);
        }
    }

    async deleteItem(id){
        const resp = await axios.delete(`${this.baseURL}/todos/${id}${this.api_key}`);
        this.getListData();
    }

    render(){
        return(
        <div className='container'>
            <h1 className="center">To Do List</h1>
            <AddToDo add={this.addItem.bind(this)}/>
            <List data={this.state.list} delete={this.deleteItem.bind(this)}/>
         </div>
        );
    }
};
export default App;
