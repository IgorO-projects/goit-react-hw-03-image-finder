import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
    return (
        <button 
        onClick={onClick}
        className={styles.button}
        type="button"> 
            Load more
        </button>
    )
}

Button.propTypes ={ 
    onClick: PropTypes.func.isRequired,
}

export default Button;