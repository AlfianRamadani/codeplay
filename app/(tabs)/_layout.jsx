import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { colors } from '../utils/Constant';

const TabBarItem = ({ iconName, IconComponent = Ionicons, size = 26, color, focused, label }) => (
  <SafeAreaView style={styles.tabItemContainer}>
    <IconComponent name={iconName} size={size} color={color} />
    <Text style={[styles.tabLabel, { color }]} numberOfLines={2}>
      {label}
    </Text>
  </SafeAreaView >
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.ACTIVE_TABS,
        tabBarInactiveTintColor: colors.INACTIVE_TABS,
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
              label="Belajar"
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
              label="Tantangan"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Leaderboard"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarItem
              iconName={focused ? "stats-chart" : "stats-chart-outline"}
              color={color}
              focused={focused}
              label="Peringkat"
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
              label="Pencapaian"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
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
    height: 70,
    paddingTop: 5,
    paddingBottom: 5,
    borderTopWidth: 0.5,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  tabItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
    width: 80, // Give enough width for longer labels
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    marginTop: 2,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});