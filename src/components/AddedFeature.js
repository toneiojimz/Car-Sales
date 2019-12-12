import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem} from '../Actions/FeatureActions';

const AddedFeature = props => {
  const [newFeat, setNewFeat] = useState();

  const handleChanges = e => {
    setNewFeat(e.target.value);
  };

  return (
    <div>
      {!props.editting ? (
        <h1>
          {props.feature.name} 
          <i onClick={props.addItem}/>
        </h1>
      ) : (
      <li>
        {/* Add an onClick to run a function to remove a feature */}
        <button className="button" onClick={() => props.removeItem(newFeat)} >Features Updated</button>
        {props.feature.name}
      </li>
      )}
    </div>
  );
};

export default AddedFeature;
