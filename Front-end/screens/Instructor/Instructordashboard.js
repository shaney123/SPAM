import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Instructordashboard = () => {
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
          <View style={styles.profileSection}>
            <TouchableOpacity onPress={handleProfilePress}>
              <Image source={require('../Instructor/assets/prof.jpg')} style={styles.profileIcon} />
            </TouchableOpacity>
            <View style={styles.profileInfo}>
              <Text style={styles.headerText}>John Rey Cagaanan</Text>
              <Text style={styles.headerSubText}>john@gmail.com</Text>
              <Text style={styles.headerSubText}>1234547548</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.hamburgerButton} onPress={toggleMenu}>
            <Icon name="bars" size={24} color="#000080" />
          </TouchableOpacity>
        </View>

<View style={styles.content}>
  <Text style={styles.contentText}>Instructor Overview</Text>
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('ClassesScreen');
    }}
    style={styles.instructorOption}
  >
    <View style={styles.instructorOptionText} >
      <Text style={styles.instructorOptionTitle}>Classes</Text>
      <Text style={styles.instructorOptionNumber}>2</Text>
    </View>
    <Icon name="graduation-cap" size={65} color="#000080" style={styles.icon} />
  </TouchableOpacity>

  <TouchableOpacity
    onPress={() => {
      navigation.navigate('CoursesScreen');
    }}
    style={styles.instructorOption}
  >
    <View style={styles.instructorOptionText} >
      <Text style={styles.instructorOptionTitle}>Courses</Text>
      <Text style={styles.instructorOptionNumber}>1</Text>
    </View>
    <Icon name="book" size={65} color="#000080" style={styles.icon} />
  </TouchableOpacity>
</View>



        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="home" size={30} color="#000080" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="heart" size={30} color= "#000080" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="comment" size={30} color="#000080" />
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
    backgroundColor: '#F8B319',
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 15,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 75,
    height: 70,
    borderRadius: 35,
  },
  profileInfo: {
    marginLeft: 10,
  },
  headerText: {
    fontSize: 15,
    color: '#000080',
  },
  headerSubText: {
    fontSize: 10,
    color: '#000080',
  },
  hamburgerButton: {
    marginRight: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000080',
    paddingTop: 45,
    paddingBottom: 135,
  },
  contentText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#f8b319',
    paddingLeft: 10,
    paddingBottom: 25,
  },
  instructorOptions: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  instructorOption: {
    width: '94%',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
    borderColor: '#f8b319',
    borderWidth: 2,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  instructorOptionText: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  instructorOptionTitle: {
    fontSize: 18,
    color: '#000080',
    margin: 10,
    paddingLeft: 35,
  },
  instructorOptionNumber: {
    fontSize: 35,
    color: '#000080',
    textAlign: 'left',
    margin: 10,
    paddingLeft: 65,
  },
  icon: {
    paddingRight: 35,
    margin: 10,
  },

  menuOverlay: {
    position: 'absolute',
    top: 10,
    left: 160,
    right: 0,
    bottom: 0,
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#F8B319',
  },
  footerButton: {
    alignItems: 'center',
  },
});

export default Instructordashboard;
