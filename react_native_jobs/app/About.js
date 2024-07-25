import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Home = () => {
  return (
    <ScrollView>
      <View style={{ paddingLeft: 100, margin: 10 }}>
        <View style={styles.box}>
          <Text style={{ fontSize: 57.5, color: "white", fontWeight: "bold" }}>
            Change the game for your gatherings 
          </Text>
          <Text style={{ fontSize: 25, color: "white", paddingTop: 20 }}>
            ZANNANA IS HERE TO MAKE HOSTING AND JOINING GAME NIGHTS A LOT
            EASIER.
          </Text>
        </View>
        <Text style={styles.vision}>Vision</Text>
        <Text style={styles.content}>
          At Zannana, we envision a world where tabletop gaming transcends
          boundaries, bringing people together and igniting imaginations.
        </Text>
        <Text style={styles.content}>
          Through our dedication to fostering a thriving gaming community and
          providing excpetional products and experiences, we strive to make
          every visit to Zannana an unforgettable jounrey into the world of
          tabletop gaming.
        </Text>
        <View style={styles.box2}>
          <View style={styles.mission}>
            <Text style={styles.vision}>Our mission</Text>
            <Text style={styles.content}>
              Zannana was created specifically for tabletop game lovers, by
              tabletop game lovers. Our purpose is to make it easier to host and
              join tabletop game events near you, in addition to trading,
              buying, and selling your tabletop games.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  box: {
    height: 450,
    width: 1050,
    backgroundColor: "grey",
    paddingTop: 100,
    paddingLeft: 85,
    paddingRight: 350,
    borderRadius: 10,
  },
  vision: {
    paddingTop: 15,
    fontSize: 35,
    color: "red",
    paddingBottom: 20,
    paddingLeft: 10,
  },
  content: {
    fontSize: 20,
    paddingLeft: 10,    
    paddingBottom: 25,
    alignContent: "center",
  },
  mission: {
    height: 250,
    width: 475,
    backgroundColor: "white",
    paddingRight: 10,
    paddingLeft: 10,
    margin: 60,
    borderRadius: 10,
  },
  box2: {
    height: 450,
    width: 1050,
    backgroundColor: "grey",
    paddingTop: 100,
    paddingLeft: 40,
    paddingRight: 350,
    borderRadius: 10,
  }
});
