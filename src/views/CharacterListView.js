import React from "react";
import { connect } from "react-redux";
import {getData} from '../actions';
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getData();
  }

  render() {
    if (this.props.loading) {
      // return something here to indicate that you are fetching data
      <h1>loading</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    characters:state.charsReducer.characters,
    error: state.charsReducer.error,
    loading: state.charsReducer.loading
  }

}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getData
    /* action creators go here */
  }
)(CharacterListView);
