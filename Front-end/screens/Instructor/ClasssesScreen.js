import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';

const ClassesScreen = () => {
  const navigation = useNavigation();

  // Dummy data for sections and students sample rani
  const sectionsData = [
    { id: '1', name: 'Section A', students: [{ id: '1', name: 'Student 1' }, { id: '2', name: 'Student 2' }] },
    { id: '2', name: 'Section B', students: [{ id: '3', name: 'Student 3' }, { id: '4', name: 'Student 4' }] },
  ];

  const renderSectionItem = ({ item }) => (
    <TouchableOpacity
      style={styles.instructorOption}
      onPress={() => {
        navigation.navigate('SectionDetailScreen', { section: item });
      }}
    >
      <View style={styles.instructorOptionText}>
        <Text style={styles.instructorOptionTitle}>{item.name}</Text>
        <Text style={styles.instructorOptionNumber}>Students: {item.students.length}</Text>
      </View>
      <Icon name="group" size={65} color="#000080" style={styles.icon} />
    </TouchableOpacity>
  );

  const handleAddSection = () => {
    console.log('Adding a section');
  };

  const handleDropSection = () => {
    console.log('Dropping a section');
  };

  const handleViewReports = () => {
    console.log('Viewing recent reports');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.contentText}>Classes Screen</Text>

      <FlatList
        data={sectionsData}
        keyExtractor={(item) => item.id}
        renderItem={renderSectionItem}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={handleAddSection}>
          <Icon name="plus" size={30} color="#000080" />
          <Text>Add Section</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleDropSection}>
          <Icon name="minus" size={30} color="#000080" />
          <Text>Drop Section</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={handleViewReports}>
          <Icon name="file-text-o" size={30} color="#000080" />
          <Text>View Reports</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8B319',
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
    paddingLeft: 25,
  },
  instructorOptionNumber: {
    fontSize: 35,
    color: '#000080',
    textAlign: 'left',
    margin: 10,
    paddingLeft: 40,
  },
  icon: {
    paddingRight: 30,
    margin: 10,
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

export default ClassesScreen;
