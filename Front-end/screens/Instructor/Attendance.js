import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: '1', name: 'John Doe', present: false, late: false, date: null },
    { id: '2', name: 'Jane Smith', present: false, late: false, date: null },
 
  ]);

  const [currentDate, setCurrentDate] = useState(new Date());

  const toggleAttendance = (id) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, present: !student.present, date: currentDate } : student
    );
    setStudents(updatedStudents);
  };

  const generateReports = () => {
    const absentStudents = students.filter((student) => !student.present);
    const lateStudents = students.filter((student) => student.late);
    const presentStudents = students.filter((student) => student.present);

    console.log('--- Attendance Report ---');
    console.log(`Date: ${currentDate.toDateString()}`);
    console.log('--- Absent Students ---');
    console.log(absentStudents.map((student) => student.name).join(', '));
    console.log('--- Late Students ---');
    console.log(lateStudents.map((student) => student.name).join(', '));
    console.log('--- Present Students ---');
    console.log(presentStudents.map((student) => student.name).join(', '));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.studentItem, { backgroundColor: item.present ? '#c0ffd6' : '#ffd6d6' }]}
      onPress={() => toggleAttendance(item.id)}
    >
      <Text style={styles.studentName}>{item.name}</Text>
      <Text>{item.present ? 'Present' : 'Absent'}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance App</Text>
      <Button title="Generate Reports" onPress={generateReports} />
      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.studentList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentList: {
    width: '100%',
  },
  studentItem: {
    padding: 20,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Attendance;
