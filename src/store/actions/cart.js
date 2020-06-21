import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addItem = createAction('ADD_ITEM')
export const removeItem = createAction('REMOVE_ITEM')
export const existItem = createAction('EXIST_ITEM')
export const removeAll = createAction('REMOVE_ALL')

export default createReducer(INITIAL_STATE, {
    [addItem.type]: (state, action) => [...state, action.payload],
    [removeItem.type]: (state, action) => state.filter(item => item.ProductID !== action.payload),
    [existItem.type]: (state, action) => state.find(item => item.ProductID == action.payload),
    [removeAll.Type]: (state, action) => state.filter(item => false == true)
});