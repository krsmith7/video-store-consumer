import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/Movie.css';
import { Button } from 'reactstrap';


class Movie extends Component {
  constructor() {
    super();
  }

  clickHandler = () => {
    this.props.addToLibraryCallback(this.props.id);
  }

  render () {
    const image_alt_tag = `Movie poster for ${this.props.title}`;

    return (
      <div className="movie-item">
        <img className="movie-item__image" src={this.props.image_url} alt={image_alt_tag}/>
        <div className="movie-item__details">
          <h2>{this.props.title}</h2>
          <h4>{this.props.release_date}</h4>
          <p>{this.props.overview}</p>
          <Button color="secondary"  className="movie-item__select-button" onClick={this.clickHandler}>
             {this.props.message}</Button>
        </div>
      </div>
    )
  }
}

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  image_url: PropTypes.string,
  external_id: PropTypes.number,
  message: PropTypes.string
};

export default Movie;
