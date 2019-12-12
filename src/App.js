import React from 'react';
import { connect } from 'react-redux';


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addItem, removeItem } from './Actions/FeatureActions';
import { initialState} from './Reducers/reducer'

const App = (props) => {
  

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeItem(item);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addItem(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={initialState.car} />
        <AddedFeatures car={initialState.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={initialState.additionalFeatures} />
        <Total car={initialState.car} additionalPrice={initialState.additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return{
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  {addItem, removeItem }
)(App);



