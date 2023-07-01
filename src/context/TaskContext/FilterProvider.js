import { useState } from 'react';
import { FilterContext } from './TasksContext';

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState('');

  const setFilterValue = (value) => {
    setFilter(value);
  };

  return (
    <FilterContext.Provider value={{ filter, setFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
