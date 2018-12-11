import React, { Component } from "react";
import { Button } from "reactstrap";
import {connect} from "react-redux";
import { updateFilter } from "../actions/index";


class EventFilterWho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsFiltred: null // a vérifier par Monica/Nadim
 
    };

    this.id = this.props.match.params.id;

  }

  componentWillMount() {

  }

  eventsFiltred = who => {
    this.props.updateFilter({ who: who });
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="buttoncenter">

        <Button onClick={() => this.eventsFiltred("Famille")} color="secondary" size="lg" block>
          Famille
        </Button>
        
      </div>
    );
  }
}

export default connect(null,
  dispatch => ({
    updateFilter: filter => {
      dispatch(updateFilter(filter));
    }
  }))(EventFilterWho);
