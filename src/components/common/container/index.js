import React from 'react';
import {View,ScrollView} from 'react-native';
import styles from './styles';

const Container = ({children}) => {

    return (
        <ScrollView contentContainerStyle={styles.contianer}>          
              {children}          
        </ScrollView>
    );
}

export default Container;   

