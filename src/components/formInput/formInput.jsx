import React from 'react';
import './formInput.scss';

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <div className="group">
    <input
      onChange={handleChange}
      className="form-input"
      {...otherProps}
    />
    {
      label ? (
        <label htmlFor="" className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label.toUpperCase()}
        </label>
      )
        :
        null
    }
  </div>
)
export default FormInput;