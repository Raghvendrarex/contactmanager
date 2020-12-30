import React, { Component } from 'react';
import { Consumer } from "../../context";
import { v1 as uuidv1 } from 'uuid';

class AddContact extends Component {
    
    state = {
        name:"",
        email:"",
        phone:""
    }

    onChange =  (event) => {
        this.setState({ [event.target.name] : event.target.value });
    }

    onSubmit = (dispatch, event) => {
        event.preventDefault();

        const { name, email, phone} = this.state;

        const newContact = {
            id : uuidv1(),
            name,
            email,
            phone
        }
        dispatch({type:'ADD_CONTACT', payload:newContact});

        this.setState({
            name:"",
            email:"",
            phone:""
        })
    }
    
    render() {
        const {name,email,phone} = this.state;
        return (
            <Consumer>
                {value=>{
                    const { dispatch }  = value;
                    return(
                        <div className='card mb-3'>
                <div className='card-header'>Add Contact</div>
                <div className='card-body'>
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input className='form-control form-control-lg' type='text' name='name'
                            value={name} placeholder='Enter Your Name' onChange={this.onChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input className='form-control form-control-lg' type='text' name='email'
                            value={email} placeholder='Enter Your Email' onChange={this.onChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='phone'>Phone</label>
                            <input className='form-control form-control-lg' type='text' name='phone'
                            value={phone} placeholder='Enter Your Phone' onChange={this.onChange} />
                        </div>
                        <input type="submit" value="Add Contact" className="btn btn-block btn-light" />
                    </form>
                </div>
            </div>
                    )
                }}
            </Consumer>
            
        )
    };
}

export default AddContact;