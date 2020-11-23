import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements'

interface Props {
    field: string,
    data : string,
    icon: string
  }

const DataItem = ({ field, data, icon }: Props) => {
    return (
        <View style={styles.row}>
            <View style={styles.fieldSection}>
                <Icon name={icon} color='#007AFF' size={15} />
                <Text style={styles.field}>{field}</Text>
            </View>
            <View style={styles.dataSection}>
                <Text style={styles.data}>{data}</Text>
            </View>
        </View>
    )
}

const memorizedDataRow = React.memo(DataItem);


export default memorizedDataRow;

const styles = StyleSheet.create({
    row: {
        width: '100%',
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fieldSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    field: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 5
    },
    dataSection: {
        alignSelf: 'flex-end',

    },
    data: {
        fontSize: 16,
        color: 'grey',
        paddingLeft: 5,
    }

});