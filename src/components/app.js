import 'materialize-css/dist/css/materialize.min.css'
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
        //.then promise method
        // axios.get(`${this.baseURL}/todos${this.api_key}`).then(resp => {
        //     console.log('get todos response:', resp.data.todos);
        //     this.setState({
        //         list: resp.data.todos
        //     });
        // }).catch(err =>{
        //     console.log('get todos error:', err.message);
        // })
        try {
            const resp = await axios.get(`${this.baseURL}/todos${this.api_key}`);
            this.setState({
                    list: resp.data.todos
                });
        } catch(err){
            console.log('Get error data:', err.message);
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
