import React, { useState } from 'react';
import "./Filter.scss";

const Filter = ({ onFilter, statusesList, genderList }) => {
  const [selectedOption, setValue] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    onFilter(filterValue,selectedOption);
  };


  return (
    <div className="filter">
      <form onSubmit={handleFilterSubmit}>
        <select value={filterValue} onChange={handleFilterChange}>
          <option value="">Select an option</option>
          <option value="name">Name</option>
          <option value="gender">Gender</option>
          <option value="status">Status</option>
        </select>
        {filterValue ? (
          filterValue == 'name' ? 
          (
          <input
            type="text"
            onChange={handleValueChange}
            placeholder="Name"
          />
          ) : filterValue == 'status' ? (
            <select value={selectedOption} className='selectFilter' onChange={handleValueChange}>
              <option value="">Select an option</option>
              {statusesList.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <select value={selectedOption} className='selectFilter' onChange={handleValueChange}>
              <option  value="">Select an option</option>
              {genderList.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )
        ) : ''
        
        }
        <button type="submit">Filter</button>
      </form>
    </div>
  );
};

export default Filter;
