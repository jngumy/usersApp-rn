import React from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import DetailBody from './components/DetailBody';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../redux/rootReducer';


const UserDetail = () => {
    console.log('render user detail');
    const navigation = useNavigation();
    const _onBackHandler = () => {
        navigation.goBack();
    };

    const BackButton = (
        <TouchableOpacity onPress={_onBackHandler}>
            <Icon
                name='chevron-left' color='#007AFF' />
        </TouchableOpacity>
    )


    // get the user id from the previous route param
    const route = useRoute();
    const userId = route.params?.userId;

    // Retrieve all the user data from the store
    const selectUserData = createSelector(
        (state: RootState) => state.users,
        (users) => {
            const fullUser = users[userId -1];
            return fullUser;
        },
    );
    const userData = useSelector(selectUserData);

    return (
        <View style={styles.container}>
            <Header
                barStyle="light-content"
                containerStyle={styles.headerStyle}
                leftComponent={BackButton}
                leftContainerStyle={styles.leftContainerStyle}
                centerComponent={{ text: 'Detail', style: { fontFamily: 'SF-Pro-Display-Bold', fontSize: 18, color: 'black' } }}
            />
            <DetailBody userData = {userData}/>
        </View>
    )
}



export default UserDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    headerStyle: {
        backgroundColor: 'white',
    },
    leftContainerStyle: {
        paddingLeft: 5
    },
})