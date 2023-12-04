import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const InboxScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'MESSAGES',
    });
  }, [navigation]);

  const handleDelete = (messageId) => {
    // Filter out the message with the given ID
    const updatedMessages = messages.filter((message) => message.id !== messageId);
    setMessages(updatedMessages);
  };

  const renderMessageItem = ({ item }) => (
    <TouchableOpacity
      style={styles.messageItem}
      onPress={() => navigation.navigate('MessageDetail', { message: item })}
    >
      <Text style={styles.sender}>{item.sender}</Text>
      <Text style={styles.body}>{item.body}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {messages.length > 0 ? (
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id}
          renderItem={renderMessageItem}
        />
      ) : (
        <Text>No messages yet.</Text>
      )}
      <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('CreateMessage')}>
        <Text style={styles.createButtonText}>Create Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  messageItem: {
    backgroundColor: '#ECECEC',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  sender: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: '#888888',
  },
  deleteButton: {
    color: 'red',
  },
  createButton: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  createButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default InboxScreen;
