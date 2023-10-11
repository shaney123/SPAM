import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



const OverlayMenu = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInRight" // Choose your preferred animation
      animationOut="slideOutRight" // Choose your preferred animation
      onBackdropPress={onClose}
    >
      <View style={styles.overlayMenu}>
        <TouchableOpacity onPress={onClose}>
          <Icon name="close" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.menuItem}>Item 1</Text>
        <Text style={styles.menuItem}>Item 2</Text>
        <Text style={styles.menuItem}>Item 3</Text>
        {/* Add more menu items as needed */}
      </View>
    </Modal>
  );
};

export default OverlayMenu;