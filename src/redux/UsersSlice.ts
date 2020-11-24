import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Axios, { AxiosResponse } from 'axios';
import { Alert } from 'react-native';
import { AppThunk } from './store';
import { User } from './../utils/utils_interfaces';


interface UsersState {
    users: any;
    loading: boolean;
    error: string | null;
  }

// Estado inicial
const initialState : UsersState = {
    users: [],
    loading: false,
    error: null,
};

//usersSlice con definicion de reducers
const UsersSlice = createSlice({
    name: 'Users',
    initialState: initialState,
    reducers: {
        getUserDataRequest(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
            state.error = null;
        },
        getUsersDataSuccess(state, action) {
            const users = action.payload;
            state.users = users;
            state.loading = false;
            state.error = null;

        },
        getUsersDataFailure(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        cleanError(state) {
            state.error = null;
        },
    }
})

export const { getUserDataRequest, getUsersDataSuccess ,getUsersDataFailure, cleanError} = UsersSlice.actions

export default UsersSlice.reducer


//fetch data method
export const fetchUsersData = (): AppThunk => async (dispatch) => {
    try {
      dispatch(getUserDataRequest(true));
      const response : AxiosResponse<User[]> = await Axios.get(
        'https://jsonplaceholder.typicode.com/users',
        { timeout: 8000 },
      );
      const usersData = response.data;
      dispatch(getUsersDataSuccess(usersData));
    } catch (error) {
      dispatch(getUsersDataFailure(error.message));
      Alert.alert(
        'Error',
        'An error has been occur retrieven the users list',
        [
          {
            text: 'OK',
            onPress: () => {
              dispatch(cleanError());
            },
          },
        ],
        { cancelable: false },
      );
    }
  };