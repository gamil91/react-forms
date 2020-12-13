import React, { Component } from 'react' 
import DisplayData from '../DisplayData.js'
import Form from './Form.js'

export default class ParentComponent extends Component {

    state = {
        firstName: "",
        lastName: ""
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            
        })
    }


    render(){
        return (
            <div>
                <Form 
                formData={this.state}
                handleChange={this.handleChange}
                />
                <DisplayData formData={this.state}/>
            </div> 
       )
    }

}