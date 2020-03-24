import React from 'react'

const Form = props =>{

  return (
    <form>
      <div className="form-row align-items-center">
        <div className="col-auto my-1">
          <label className="mr-sm-2" htmlFor="input">Employee Search</label>
          <input
            type="text"
            className="form-control"
            name='input'
            value={props.input}
            onChange={props.handleInputChange}
          />
          <select className="custom-select mr-sm-2"
            onChange={props.handleSelectChange}>
            <option value="1">Country</option>
            <option value="2">Department</option>
          </select>
        </div>
        <div className="col-auto my-1">
          <button 
          type="submit" 
          className="btn btn-primary" 
          onClick={props.handleFormSubmit}>Seach</button>
        </div>
      </div>
    </form>

  )
}

export default Form