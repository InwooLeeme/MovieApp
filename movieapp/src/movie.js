import React from "react";
import PropTypes from "prop-types";

function Movie({ id, title, summary, poster, year, genres}){
    return <h4>{title}</h4>;
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