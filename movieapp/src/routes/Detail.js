import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history } = this.props;
        if(location.state === undefined){
            // redirect
            history.push("/");
        }
    }
    render(){
        const {location:{state}} = this.props;
        const {year, title, summary, genres,poster} = this.props.location.state;
        if(state){
            return (
                <div className="detail">
                    <img src={poster} alt={title} title={title}></img>
                        <div className="detail">
                        <h3 className="detail__title">{title}</h3>
                        <h5 className="detail__year">{year}</h5>
                        <ul className="detail__genres">{
                            genres.map(
                                (genre, index) => <li key={index} className="genres__genre">{genre}</li>
                            )
                        }</ul>
                        <p className="detail__summary">{summary}</p>
                    </div>
                </div>
            );
        }
        else{
            return null;
        }
    }
}

export default Detail