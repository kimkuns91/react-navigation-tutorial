import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabA } from './TabA';
import { NestedStackNavigation } from './NestedStacknavigator';
import { Ionicons } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator();

export class BottomTabNavigation extends React.Component{
    render(){
        return(
            <BottomTab.Navigator>
                <BottomTab.Screen 
                name='TabA' 
                component={ TabA }
                options={{tabBarIcon:()=><Ionicons name='home' size={20} />}}
                ></BottomTab.Screen>
                <BottomTab.Screen 
                name='TabB' 
                component={ NestedStackNavigation }
                options={{tabBarIcon:()=><Ionicons name='settings' size={20} />}}
                ></BottomTab.Screen>
            </BottomTab.Navigator>
        )
    }
}