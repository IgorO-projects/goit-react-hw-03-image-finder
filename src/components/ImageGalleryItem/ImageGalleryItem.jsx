import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, onClick, dataSource }) => {
    return (
        <li className={styles.imageGalleryItem}>
          <img 
            src={src}
            alt={alt} 
            onClick={onClick}
            data-source={dataSource}
            className={styles.imageGalleryItem_image} />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    dataSource: PropTypes.string.isRequired,
}

export default ImageGalleryItem;