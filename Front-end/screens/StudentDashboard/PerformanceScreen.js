import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PerformanceScreen = ({ route }) => {
  const { subject } = route.params;
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('lastVisitedScreen');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error clearing lastVisitedScreen:', error);
    }
  };

  const handleProfilePress = () => {
    navigation.navigate('Profiledashboard');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{subject.name}</Text>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            style={styles.contentBox}
            onPress={() => {
              // Navigate to the activities screen for the selected subject
              navigation.navigate('ActivitiesScreen', { subject });
            }}
          >
            <Text style={styles.contentBoxText}>View Activities</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contentBox}
            onPress={() => {
              // Navigate to the upcoming tasks screen for the selected subject
              navigation.navigate('UpcomingTasksScreen', { subject });
            }}
          >
            <Text style={styles.contentBoxText}>Upcoming Tasks</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contentBox}
            onPress={() => {
              // Navigate to the attendance screen for the selected subject
              navigation.navigate('AttendanceScreen', { subject });
            }}
          >
            <Text style={styles.contentBoxText}>Attendance Viewing</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton} onPress={handleProfilePress}>
            <Icon name="user" size={30} color="#000080" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('SettingsScreen')}>
            <Icon name="cog" size={30} color="#000080" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {menuOpen && (
        <View style={styles.menuOverlay}>
          <View style={styles.menuHeader}>
            <TouchableOpacity onPress={closeMenu}>
              <Icon name="times" size={30} color="#000080" />
            </TouchableOpacity>
          </View>
          <View style={styles.menuOptions}>
            <TouchableOpacity onPress={handleLogout}>
              <Text>Log out</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Option2')}>
              <Text>Option 2</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 35,
    paddingTop: 65,
    paddingBottom: 20,
    backgroundColor: '#f8b319'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000080',
  },
  hamburgerButton: {
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentBox: {
    width: '95%',
    backgroundColor: '#000080',
    marginVertical: 30,
    borderRadius: 20,
    padding: 45,
    alignItems: 'center',
  },
  contentBoxText: {
    fontSize: 18,
    color: '#ffff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#F8B319',
  },
  footerButton: {
    alignItems: 'center',
  },
  menuOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
    elevation: 55,
    borderRadius: 40,
  },
  menuHeader: {
    paddingTop: 45,
    marginLeft: 155,
  },
  menuOptions: {
    paddingTop: 45,
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
});

export default PerformanceScreen;
