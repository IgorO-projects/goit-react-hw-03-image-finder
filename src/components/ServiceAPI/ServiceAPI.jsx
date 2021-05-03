import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '20714819-0852724b96f75a6ed867164b1';

const fetchHits = ({ searchQuery, currentPage }) => {
    return (
        axios
        .get(`${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    );
};
fetchHits.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    currentPage: PropTypes.string.isRequired,
}

export default { fetchHits };