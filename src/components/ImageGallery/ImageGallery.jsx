import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ hits, onClick }) => {
    return (
        <ul className={styles.imageGallery}>
            {hits.map(hit => {
                return (
                    <ImageGalleryItem 
                    key={hit.id}
                    src={hit.webformatURL}
                    alt={hit.tags}
                    onClick={onClick}
                    dataSource={hit.largeImageURL}
                    />
                );
            })}
        </ul>
    );
};

ImageGallery.propTypes = {
    hits: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ImageGallery;