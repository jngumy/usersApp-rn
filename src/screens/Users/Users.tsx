import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersData } from '../../redux/UsersSlice';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../redux/rootReducer';

import { FlatList, Text, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import { Header } from 'react-native-elements';
import UserItem from './components/UserItem';


const keyExtractor = (item, index) => index.toString()

const renderItem = ({ item }: { item: string }) => (
    <UserItem userId={item.id} />
)

const Users = () => {
    const dispatch = useDispatch();

    // Fetch all the users data 
    useEffect(() => {
        dispatch(fetchUsersData());
    }, []);

    // Retrieve users from store
    const selectUsers = createSelector(
        (state: RootState) => state.users,
        (users) => users,
    );

    const selectLoading = createSelector(
        (state: RootState) => state.loading,
        (loading) => loading
    )
    const users = useSelector(selectUsers);
    const loading = useSelector(selectLoading);


    console.log('render users screen');
    return (
        <>
            <SafeAreaView style={styles.container} >
                <Header
                    barStyle="light-content"
                    containerStyle={styles.headerStyle}
                    leftComponent={{ icon: 'menu', color: '#007AFF' }}
                    rightComponent={{ icon: 'settings', color: '#007AFF' }}
                    rightContainerStyle={styles.leftContainerStyle}
                    leftContainerStyle={styles.leftContainerStyle}
                    centerComponent={{ text: 'Home', style: { fontFamily: 'SF-Pro-Display-Bold', fontSize: 18, color: 'black' } }}
                />
                <Text style={styles.title}>Users</Text>
                {loading && (
                    <ActivityIndicator
                        style={{ height: 80 }}
                        color='#007AFF'
                        size="large"
                    />
                )}
                <FlatList
                    keyExtractor={keyExtractor}
                    data={users}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        </>
    )
}

export default Users;

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
    title: {
        fontSize: 35,
        paddingLeft: 15,
        paddingBottom: 0,
        marginBottom: 0,
        fontFamily: 'SF-Pro-Display-Bold'
    },
    section: {
        fontSize: 11,
        backgroundColor: 'lightgrey',
        paddingVertical: '1%',
        paddingLeft: '2.5%',
        color: 'grey',
        fontWeight: 'bold',
    },
    searchBar: {
        paddingHorizontal: 15,
    },
    userItem: {
        fontFamily: 'SF-Pro-Display-Regular',
        fontSize: 20,
        paddingLeft: 15
    }
})

