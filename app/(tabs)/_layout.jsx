import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import color from '../utils/Constant';
const TabBarItem = ({ iconName, IconComponent = Ionicons, size = 26, color, focused, label }) => (
  <View style={styles.tabItemContainer}>
    <IconComponent name={iconName} size={size} color={color} />
    <Text style={[styles.tabLabel, { color: color }]}>{label}</Text>
  </View>
);

export default function TabLayout() {


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: color.ACTIVE_TABS,
        tabBarInactiveTintColor: color.INACTIVE_TABS,
        tabBarStyle: styles.tabBar,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Learn"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarItem
              iconName={focused ? "book" : "book-outline"}
              color={color}
              focused={focused}
              label="Learn"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="DailyChallenge" 
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarItem
              iconName={focused ? "flame" : "flame-outline"} 
              color={color}
              focused={focused}
              label="Challenge" 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Achievement"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarItem
              iconName={focused ? "trophy" : "trophy-outline"}
              color={color}
              focused={focused}
              label="Achievement"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarItem
              iconName={focused ? "person-circle" : "person-circle-outline"}
              size={28}
              color={color}
              focused={focused}
              label="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 65,
    paddingTop: 5,
    paddingBottom: 5,
    borderTopWidth: 0.5,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  tabItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    marginTop: 2,
  },
  indicator: {
    position: 'absolute',
    bottom: 6,
    height: 3.5,
    width: 40,
    backgroundColor: '#000000',
    borderRadius: 2,
  },
});
