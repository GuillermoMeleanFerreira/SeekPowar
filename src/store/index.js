import {configureStore} from '@reduxjs/toolkit';

import rootCart from './actions/cart'

export default configureStore({
    reducer:{
        cart: rootCart
    }
})