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
          <div className = "form-row">

            <li key={index}>
                <h4>Ingredient #{index + 1}</h4>
                <div className="form-row">
                  <div className = "form-group col-md-1">
                    <button
                      type="button"
                      title="Remove Ingredient"
                      onClick={() => fields.remove(index)}/>
                  </div>
                  <div className="form-group col-md-2">
                    <Field
                      name={`${member}.order`}
                      type="text"
                      component={this.renderTextField}
                      label="Order"/>
                  </div>
                  <div className="form-group col-md-2">
                    <Field
                    name={`${member}.quantity`}
                    type="text"
                    component={this.renderTextField}
                    label="Quantity"/>
                  </div>
                  <div className="form-group col-md-3">
                      <Field
                      name={`${member}.measurement`}
                      component={CreateableSingleSelectPrompt}
                      options={this.props.measurements}
                      createRequest={createMeasurementRequest}
                    />
                  </div>
                <div className="form-group col-md-3">
                  <Field
                    name={`${member}.ingredient`}
                    component={CreateableSingleSelectPrompt}
                    options={this.props.ingredients}
                    createRequest={createIngredientRequest}
                  />
                </div>

              </div>

      
            </li>
          </div>

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