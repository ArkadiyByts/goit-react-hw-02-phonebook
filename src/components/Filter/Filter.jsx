import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <div>
        <input
          type="name"
          value={value}
          onChange={onChange}
          placeholder="Please search by name"
        />
      </div>
    </div>
  );
};

export default Filter;