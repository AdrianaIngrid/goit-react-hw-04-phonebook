import styles from './Filter.module.css';
import propTypes from 'prop-types';
import { MdPersonSearch } from 'react-icons/md';
 function Filter ({ handleFilterChange, filter }) {
  
 
  return (
    <div>
      <label className={styles.labelFilter}>
        Find Contacts by Name
        <br />
        <span className = {styles.spanFind}>
          <MdPersonSearch />
        </span>
        <input className={styles.inputSearch }type="text" onChange={handleFilterChange} value={filter} />
      </label>
    </div>
  );
}    

Filter.propTypes = {
  handleFilterChange: propTypes.func,
  filter: propTypes.string,
}
export default Filter;