import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const MovieHeader = (props) => {
    
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{props.appTitleappTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary"><span>{ props.displayFav ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStatetoProps = (state) => {
    return {
        appTitle: state.appTitle,
        displayFavs: state.favoritesReducer.displayFavs
    }
}

export default connect(mapStatetoProps,{})(MovieHeader);