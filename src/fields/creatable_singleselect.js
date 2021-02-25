import React from 'react'
import CreatableSelect from 'react-select/creatable'

class CreateableSingleSelectPrompt extends React.Component {
    constructor(props) {
        super(props) 

        // should add a state.selected value
        // should also have some form of mapping the state.selected to a selected that my API
        // will understand

        this.state = {
            // what I will be passing back to the redux form to use in the post recipe request
            responseSelected: -1,

        } 
    }

    handleChange = (newValue, actionMeta) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        switch(actionMeta.action) {
            case('create-option'):
                console.log("Hopefully I can do a post request here")
                const newCreatedValue = {'name': `${newValue.value}`}
                this.props.createRequest(newCreatedValue)
                .then((response) => {
                    console.log(response)
                    this.setState({
                        responseSelected: response.data.id
                    }, () => {
                        console.log(this.state)
                        return this.props.input.onChange(this.state.responseSelected)
                    })
                })
                break;
            case('select-option'):
                console.log('select option')
                const selectedVal = newValue.value
                console.log(selectedVal)
                this.setState({
                    responseSelected: selectedVal,
                }, () => {
                    console.log(this.state)
                    return this.props.input.onChange(this.state.responseSelected)
                })
                break;
            default:
                console.log("I don't want this to get called ever")

        }

        return this.props.input.onChange(this.state.responseSelected)
        
      };

    render() {
        return (
            <div >
                <label>{this.props.label}</label>
                <CreatableSelect
                    onChange={this.handleChange}
                    options={this.props.options}
                />
            </div>
        )
    }
}

export default CreateableSingleSelectPrompt