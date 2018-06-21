import React, {Component} from 'react';

class AddToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            details: ''
        };

    }
    handleAddToDo(e){
        e.preventDefault();
        this.props.add(this.state);
        this.setState({
            title: '',
            details: ''
        })
    }
    render(){
        const { title, details } = this.state;
        return(
            <form onSubmit={this.handleAddToDo.bind(this)}>
                <div className="row">
                    <div className="col s5">
                        <label>Title</label>
                        <input type="text" value={title} onChange={e=> this.setState({title:e.target.value})}/>
                    </div>
                    <div className="col s5">
                        <label>Details</label>
                        <input type="text" value={details} onChange={e=> this.setState({details:e.target.value})}/>
                    </div>
                    <div className="col s2 center">
                        <button className="btn purple darken-2">Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default AddToDo;