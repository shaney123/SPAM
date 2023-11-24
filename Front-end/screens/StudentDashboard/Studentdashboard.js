import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Studentdashboard = () => {
  const navigation = useNavigation();

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

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const subjects = [
    {
      name: "Information Assurance Security",
      imageSource: require('../StudentDashboard/assets/mb6.png'),
    },
    {
      name: "Networking 2",
      imageSource: require('../StudentDashboard/assets/mb5.png'),
    },
    {
      name: "Technopreneurship",
      imageSource: require('../StudentDashboard/assets/mb4.png'),
    },
    {
      name: "Mobile Programming",
      imageSource: require('../StudentDashboard/assets/mb3.png'),
    },
    {
      name: "IT Elective 1",
      imageSource: require('../StudentDashboard/assets/mb2.png'),
    },
    {
      name: "Software Engineering",
      imageSource: require('../StudentDashboard/assets/mb1.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.contentContainer}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={handleProfilePress}>
              <Image source={require('../StudentDashboard/assets/profile.png')} style={styles.profileIcon} />
            </TouchableOpacity>
            <View>
              <Text style={styles.headerText}>Jenyshane P. Tagarda</Text>
              <Text style={styles.headerSubText}>shane@gmail.com</Text>
              <Text style={styles.headerSubText}>2021304034</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.hamburgerButton} onPress={toggleMenu}>
            <Icon name="bars" size={24} color="#000080" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.centeredContent}>
            <View style={styles.searchContainer}>
              <Icon name="search" size={23} color="#f8b319" style={styles.searchIcon} />
              <TextInput
                placeholder="Search"
                style={styles.searchInput}
                placeholderTextColor="#000080"
                onChangeText={(text) => {}}
              />
            </View>
          </View>
          <Text style={styles.contentText}>SUBJECTS</Text>

          <View style={styles.subjectContainer}>
            {subjects.map((subject, index) => (
               <TouchableOpacity key= {index} onPress={()=>{
                  navigation.navigate('PerformanceScreen' , { subject});
                }}>
              <View style={styles.subjectBox} key={index}>
                  <Image source={subject.imageSource} style={styles.subjectIcon} />
                   <Text style={styles.subjectText}>{subject.name}</Text>
               </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="home" size={30} color="#000080" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="heart" size={30} color="#000080" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Icon name="comment" size={30} color ="#000080" />
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
    zIndex: 0,
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 75,
    height: 70,
    borderRadius: 35,
  },
  headerText: {
    fontSize: 15,
    color: '#000080',
    marginLeft: 10,
  },
  headerSubText: {
    fontSize: 10,
    color: '#000080',
    marginLeft: 10,
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
  centeredContent: {
    alignItems: 'center',
  },
  contentText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#f8b319',
    marginVertical: 10,
    textAlign: 'left',
    paddingLeft: 10,
    paddingBottom: 25,
  },
  searchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 25,
  },
  searchIcon: {
    marginRight: 25,
    paddingLeft: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000080',
  },
  subjectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subjectBox: {
    width: 95,
    height: 105,
    backgroundColor: 'white',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#f8b319',
    borderWidth: 2,
  },
  subjectText: {
    fontSize: 10,
    color: '#000080',
    marginTop: 5,
    textAlign: 'center',
  },
  subjectIcon: {
    width: 90,
    height: 55,
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

export default Studentdashboard;
