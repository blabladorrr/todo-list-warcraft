import { useContext, useState } from 'react';
import { FilterContext } from './TasksContext';


const FilterTasks = () => {
  const { setFilterValue } = useContext(FilterContext);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    setFilterValue(value);
  };

  return (
    <div>
      <h2>Search task:</h2>
      <input
        className="input"
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default FilterTasks;
