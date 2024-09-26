export const ADD_ITEM= "ADD_ITEM";
export const REMOVE_ITEM= "REMOVE_ITEM";
export const UPDATE_TOTAL= "UPDATE_TOTAL";

export const addFeature= (feature) => {
    return { type: ADD_ITEM, payload: feature};
};

export const removeFeature=(feature) => {
    return { type: REMOVE_ITEM, payload: feature};
};

export const updateTotal = (total) => {
    return { type: UPDATE_TOTAL, payload: total};
};