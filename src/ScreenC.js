import React from 'react';
import { View, Text } from 'react-native';

export class ScreenC extends React.Component {
    render() {
        return (
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>이것은 ScreenC 라고 합니다.</Text>
            </View>
        )
    }
}