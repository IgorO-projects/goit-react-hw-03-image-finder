import './App.css';
import { Component } from 'react';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import ServiceApi from './components/ServiceAPI';
import Loading from './components/Loading';
import Modal from './components/Modal';
import Pnotify from '../node_modules/pnotify/dist/es/PNotify';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';

class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    error: null,
    showModal: false,
    modalSrc: '',
    modalAlt: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = query => {
    // this.setState({ searchQuery: query }, this.fetchHits());
    this.setState({ 
      hits: [],
      searchQuery: query,
      currentPage: 1,
      error: null,
     });
  }

  onScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  }

  fetchHits = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    ServiceApi.fetchHits(options)
    .then(response => {
      this.setState(prevState => ({
        hits: [...prevState.hits, ...response.data.hits],
        currentPage: prevState.currentPage + 1,
      }));
      
      this.onScroll();
    })
    .catch(()=> Pnotify.error({title: 'something went wrong :('}))
    .finally(()=> this.setState({ isLoading: false }));
  }

  onImageClick = (event) => {
    this.setState({ 
      modalSrc: event.target.dataset.source,
      modalAlt: event.target.alt,
      showModal: true
    });
  }
  render() {
    const { hits, isLoading, showModal, modalSrc, modalAlt } = this.state;
    return (
      <div className="App">
        <SearchBar onSubmit={this.onChangeQuery}/>
        <ImageGallery 
        hits={hits}
        onClick={this.onImageClick} />
        {isLoading && <Loading />}
        {hits.length !== 0 && !isLoading && (<Button onClick={this.fetchHits}/>)}
        {showModal && <Modal 
        src={modalSrc}
        alt={modalAlt}
        onClose={this.toggleModal}/>}
    </div>
    );
  };
};

export default App;
