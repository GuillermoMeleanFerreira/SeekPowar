import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import Colors from '../../styles/colors'

import styles from './styles';

function SearchBarComponent({ searchText, setSearchText }) {

    function updateSearch(search) {
        setSearchText(search)
    }

    return (
        <SearchBar
            platform={'ios'}
            leftIconContainerStyle={styles.leftIconContainerStyle}
            rightIconContainerStyle={styles.leftIconContainerStyle}
            containerStyle={styles.searchBar}
            placeholderTextColor={Colors.tdp_lightPurple}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            cancelButtonProps={{}}
            buttonTextStyle={styles.buttonTextStyle}


            placeholder="Procure aqui ..."
            onChangeText={updateSearch}
            value={searchText}
        />
    );
}

export default SearchBarComponent;