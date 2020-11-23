import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../redux/rootReducer';
import { useSelector, shallowEqual } from 'react-redux';

interface Props {
  userId: number;
}

export const UserItem = ({ userId }: Props) => {
  //navigation hook
  const navigation = useNavigation(); 

  //handler para navegar a pantalla detalle
  const _onPressHandler = () => {
    navigation.navigate('UserDetail', { userId });
  };
 
  //creo selector para obtener los datos que defino de la store
  const selectUserData = createSelector(
    (state: RootState) => state.users,
    (users) => {
      const fullUser = users[userId - 1];
      return {
        name: fullUser?.name,
        city: fullUser?.address.city,
      };
    },
  );
  const { name, city } = useSelector(
    selectUserData,
    shallowEqual,
  );
  console.log('render item id:' + userId)

  return (
    <ListItem  onPress={_onPressHandler} >
      <Avatar size="medium" rounded source={{ uri: 'https://pbs.twimg.com/profile_images/831173492968140804/43M7c5j_.jpg' }} />
      <ListItem.Content>
        <ListItem.Title >{name}</ListItem.Title>
        <ListItem.Subtitle >{city}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )
}

const memorizedUserItem = React.memo(UserItem);
export default memorizedUserItem;

