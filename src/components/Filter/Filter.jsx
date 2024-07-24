import styles from './Filter.module.css';
import propTypes from 'prop-types';
 function Filter ({ handleFilterChange, filter }) {
  
 
  return (
    <div>
      <label className={styles.labelFilter}>
        Find Contacts by Name
        <br />
        <input type="text" onChange={handleFilterChange} value={filter}/>
      </label>
    </div>
  );
}    

Filter.propTypes = {
  handleFilterChange: propTypes.func,
  filter: propTypes.string,
}
export default Filter;