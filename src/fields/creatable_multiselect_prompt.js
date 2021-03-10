import _ from 'lodash'
import React, { Component } from 'react'
import CreatableSelect from 'react-select/creatable'
import { createTagRequest } from '../api'


class CreateableMultiSelectPrompt extends Component {
    constructor(props) {
        super(props) 

        // should add a state.selected value
        // should also have some form of mapping the state.selected to a selected that my API
        // will understand

        this.state = {
            // what the component itself recognizes as the values
            promptSelected: [],
            // what I will be passing back to the redux form to use in the post recipe request
            responseSelected: [],
            // way to reference the values that I've created. I might actually want this to be more 
            // of a hashmap. I'll use this to map between ids and values to remove them 
            createdVals: []
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
                const newTagValue = {'name': `${newValue[newValue.length - 1].value}`}
                createTagRequest(this.props.token, newTagValue)
                .then((response) => {
                    console.log(response)
                    // this is wrong. Need to figure how to do it correctly
                    this.setState({

                        createdVals: [...this.state.createdVals, {'id': response.data.id, 'name': newTagValue.name}],
                        responseSelected: [...this.state.responseSelected, response.data.id],
                        promptSelected: newValue,
                    }, () => {
                        console.log(this.state)
                        return this.props.input.onChange(this.state.responseSelected)
                    })
                })
                break;
            case('select-option'):
                console.log('select option')
                const selectedVal = newValue[newValue.length - 1].value
                console.log(selectedVal)
                console.log(newValue)
                this.setState({
                    responseSelected: [...this.state.responseSelected, selectedVal],
                    promptSelected: newValue,
                }, () => {
                    console.log(this.state)
                    return this.props.input.onChange(this.state.responseSelected)
                })
                break;
            case('remove-value'):
                var newCreatedVals = []
                var newResponseSelected = []
                if(newValue != null ) {
                    const difference = this.state.promptSelected.filter(x => !newValue.includes(x));

                    // I was second guessing if I need the createdVals...I think I do need some way to join
                    // the ids and values of the created Values. So I think I'm good
                    if (this.state.createdVals.find(val => val.name == difference[0].value)) {
                        const foundCreated = this.state.createdVals.find(val => val.name == difference[0].value)
                        newCreatedVals = this.state.createdVals.filter(x => x.name != foundCreated.name)
                        newResponseSelected = this.state.responseSelected.filter(x => x != foundCreated.id)
                    }
                    else {
                        newResponseSelected = this.state.responseSelected.filter(x => x != difference[0].value)
                    }
                }

                this.setState({
                    responseSelected: newResponseSelected,
                    promptSelected: newValue,
                    createdVals: newCreatedVals,
                }, () => {
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
            <CreatableSelect
                isMulti
                onChange={this.handleChange}
                options={this.props.options}
             />
        )
    }

}

export default CreateableMultiSelectPrompt