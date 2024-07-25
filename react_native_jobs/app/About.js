import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL
        style={styles.image}
      />
      <Text style={styles.description}>
        Welcome to our game night app! We bring people together through the joy of games. Whether you're into board games, card games, or any other tabletop activities, we've got something for everyone.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default About;
