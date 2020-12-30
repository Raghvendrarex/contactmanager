import React ,{ Component } from "react";

const Context = React.createContext();

const reducer = (state, action ) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [action.payload, ...state.contacts ]
            };
        default :{
            return state;
        }
    }
}

export class Provider extends Component{
    state ={ 
        contacts: [
            {
              id: 1,
              name: 'john doe',
              email: 'john@gmail.com',
              phone: '555-555-5555'
            },
            {
              id: 2,
              name: 'sample singh',
              email: 'sample@gmail.com',
              phone: '666-666-6666'
            },
            {
              id: 3,
              name: 'example singh',
              email: 'example@gmail.com',
              phone: '777-777-7777'
            }
        ],

        dispatch: action => {
            this.setState(state => reducer(state,action));
        }

    };



    render(){
        return(
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    };

}

export const Consumer = Context.Consumer;