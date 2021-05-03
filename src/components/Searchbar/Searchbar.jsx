import { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component  {
    state = {
       query: '', 
    }

    handleSubmit = event => {
        event.preventDefault();
        const { onSubmit } = this.props;
        onSubmit(this.state.query);

        this.setState({query: ''});
    }

    handleChange = event => {
        this.setState({ query: event.currentTarget.value});
    }

    
    render () {
        return (
            <header className={styles.searchbar}>
              <form 
              className={styles.searchForm}
              onSubmit={this.handleSubmit}>
                <button type="submit" className={styles.searchForm__button}>
                  <span className={styles.searchForm__button_label}>Search</span>
                </button>
    
                <input
                  className={styles.searchForm__input}
                  onChange={this.handleChange}
                  value={this.state.query}
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                />
              </form>
            </header>
        );
    }
};

export default Searchbar;