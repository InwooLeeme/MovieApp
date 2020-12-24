import React from "react";
import PropTypes from "prop-types";

function Movie({ title, summary, poster, year, genres}){
    return (
    <div class="movie">
        <img src={poster} alt={title} title={title}></img>
        <div class="movie__data">
            <h3 class="movie__title">{title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class="movie__summary">{summary}</p>
            <span class="movie__genres">{genres}</span>
        </div>
    </div>)
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired
}

export default Movie