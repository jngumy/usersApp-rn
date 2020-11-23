import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import DataItem from './DataItem';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

interface Props {
    userData: {
        name: string,
        username: string,
        address : {
            street:string,
            suite: string
        },
        phone: string,
        email: string,
        website: string,
        company: {
            name: string
        }
    };
  }
  
const DetailBody = ({userData }: Props) => {
    return (
        <View style={styles.detailBody}>
            <View>
                <Image style={styles.profileBanner} source={{ uri: 'https://images.assetsdelivery.com/compings_v2/vda82/vda821901/vda82190100059.jpg' }} />
                <Image style={styles.profileImg} source={{ uri: 'https://pbs.twimg.com/profile_images/831173492968140804/43M7c5j_.jpg' }} />
            </View>

            <Text style={styles.nameTitle}>{userData.name}</Text>
            <Text style={styles.userName}>@{userData.username}</Text>

            <View style={styles.dataContainer}>
                <DataItem field="Email" data={userData.email} icon="mail" />
                <DataItem field="Adress" data={userData.address.street + ', '+userData.address.suite} icon="home" />
                <DataItem field="Phone" data={userData.phone} icon="phone" />
                <DataItem field="Website" data={userData.website} icon="bookmark" />
                <DataItem field="Company" data={userData.company.name} icon="computer" />
            </View>
        </View>
    )

}

export default DetailBody

const styles = StyleSheet.create({

    detailBody: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: '1%',
        paddingTop: '3%',
    },
    nameTitle: {
        fontSize: 30,
        fontFamily: 'SF-Pro-Display-Bold',
        lineHeight: 30

    },
    userName: {
        fontSize: 22,
        color: 'lightgrey',
        lineHeight: 23,
        fontFamily: 'SF-Pro-Display-Light',
    },
    profileImg: {
        width: windowWidth / 2.5,
        height: windowWidth / 2.5,
        borderRadius: windowWidth / 2.5,
        borderColor: 'white',
        borderWidth: 6,
        position: 'absolute',
        alignSelf: 'center',
        marginTop: windowHeight / 7
    },
    profileBanner: {
        width: windowWidth - 24,
        height: windowHeight / 4,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        marginBottom: windowWidth / 5
    },
    dataContainer: {
        width: '96%', 
        paddingVertical: 12, 
        marginTop: 15, 
        borderTopWidth: 0.5, 
        borderBottomWidth: 0.5, 
        borderColor: 'lightgrey'
    }
});