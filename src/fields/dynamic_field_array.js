import React from 'react'
import { Field, FieldArray } from 'redux-form'
import CreateableSingleSelectPrompt from './creatable_singleselect'
import { createMeasurementRequest, createIngredientRequest } from '../api'

class DynamicFieldArray extends React.Component {

    renderTextField(field) {
      const { meta: { touched, error } } = field
      const className = `form-group ${touched && error ? 'has-danger': ''}`

      return (
          <div className={className}>
              <label>{field.label}</label>
              <input 
                  className="form-control"
                  type="text"
                  {...field.input}
              />
              <div className="text-help">
                  {touched ? error : ''}
              </div>
          </div>
      )
  }

  renderMeasurementsAsValues() {
    return _.map(this.props.measurements, measurement=> {
        return {'value': `${measurement.id}`, 'label': `${measurement.name}`}
    })
  }

  renderIngredientLines = ({ fields, meta: { touched, error } }) => (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push({})}>Add Ingredient</button>
          {touched && error && <span>{error}</span>}
        </li>
        {fields.map((member, index) =>
          <li key={index}>
            <button
              type="button"
              title="Remove Ingredient"
              onClick={() => fields.remove(index)}/>
            <h4>Ingredient #{index + 1}</h4>
            <Field
              name={`${member}.order`}
              type="text"
              component={this.renderTextField}
              label="Order"/>
            <Field
              name={`${member}.quantity`}
              type="text"
              component={this.renderTextField}
              label="Quantity"/>
            {/* <Field
              name={`${member}.measurement`}
              type="text"
              component={this.renderTextField}
              label="Measurement"/> */}
            <Field
              name={`${member}.measurement`}
              component={CreateableSingleSelectPrompt}
              options={this.props.measurements}
              createRequest={createMeasurementRequest}
            />
            <Field
              name={`${member}.ingredient`}
              component={CreateableSingleSelectPrompt}
              options={this.props.ingredients}
              createRequest={createIngredientRequest}
            />
    
          </li>
        )}
      </ul>
    )

    
      
    render() {
        return (
            <div>
                <FieldArray name="ingredientLines" component={this.renderIngredientLines}/>
            </div>
        )
    }


}

export default DynamicFieldArray