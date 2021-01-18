import _ from 'lodash'
import React, { Component } from 'react'
import CreatableSelect from 'react-select/creatable'
import { createTagRequest } from '../api'


class CreateableMultiSelectPrompt extends Component {
    constructor(props) {
        super(props) 
    }

    handleChange = (newValue, actionMeta) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        if(actionMeta.action == 'create-option') {
            console.log("Hopefully I can do a post request here")
            const newTagValue = {'name': `${newValue[newValue.length - 1].value}`}
            createTagRequest(newTagValue)
            .then((response) => {
                console.log(response)
            })
        }

        const val = _.map(newValue, newV=> {
            return `${newV.value}`
        })

        return this.props.input.onChange(val)
      };

    render() {
        return (
            <CreatableSelect
                isMulti
                onChange={this.handleChange}
                // onChange={value => this.props.input.onChange(value)}
                options={this.props.options}
             />
        )
    }

}

export default CreateableMultiSelectPrompt