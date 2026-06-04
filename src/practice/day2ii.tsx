/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, StyleSheet ,TouchableOpacity} from 'react-native';
import React from 'react';

export const D2ii = () => {
  return (
    <View style={styles.container}>
      {/* top section */}
      <View style={styles.containerTop}>
        <Text style={styles.topText}>Where are {'\n'} you going?</Text>

        {/* FROM /TO section */}
        <View style={styles.locationBox}>
          <Text style={styles.label}>From</Text>
          <Text style={styles.value}>Brussels</Text>

          <View style={styles.line} />

          <Text style={styles.label}>From</Text>
          <Text style={styles.value}>Ghent</Text>
        </View>
      </View>
      {/* bottom section */}

      <View>
        <Text style={styles.sectionTitle}>Date</Text>
        <View style={styles.dateBox}>
          <Text style={styles.dateRow}>Today</Text>
          <Text style={styles.dateRow}>Tomorrow</Text>
          <Text style={styles.dateRow}>Other Date</Text>
        </View>
        
        {/* PASSENGERS */}
        <Text style={styles.sectionTitle}>Passengers</Text>
        <View style={styles.passengerRow}>
          {[1,2,3,4].map(num => (
            <View
              key={num}
              style={[
                styles.circle,
                num === 1 && styles.activeCircle
              ]}
            >
              <Text style={num === 1 ? styles.activeText : styles.circleText}>
                {num}
              </Text>
            </View>
          ))}
        </View>

          {/* BUTTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    width: '100%',
    height: '50%',
    backgroundColor: '#7ec8e3',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  topText: {
    position: 'absolute',
    color: '#fff',
    fontSize: 30,
    marginTop: 50,
    marginLeft: 50,
    fontWeight: '800',
  },
  locationBox: {
    marginTop: 200,
    marginLeft: 50,
  },
  label: {
    color: '#fff',
    fontSize: 18,
  },
  value: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },

  line: {
    color: '#fff',
    height: 1,
    marginVertical: 10,
  },

  //bottom styles
  dateBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  sectionTitle: {
    color: '#000',
    fontSize: 30,
    marginTop: 50,
    marginLeft: 50,
    fontWeight: '800',
  },

  dateRow: {
    fontSize: 18,
    color: '#636161',
  },

  passengerRow: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly'
  },
  circle: {
    width: 49,
    height: 49,
    borderRadius: 24.5,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent:'center',
    alignItems: 'center',
    marginRight: 10,
  },

  activeCircle: {
    backgroundColor: '#7ec8e3',
    borderColor: '#7ec8e3',
  },
   circleText: {
    color: '#333',
  },
  activeText: {
    color: '#fff',
    fontWeight: '700',
  },
  button: {
    height: 50,
    width: '75%',
    backgroundColor: 'grey',
    borderRadius: 40,
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center'

  },
  buttonText: {
    color:'#fff',
    fontSize: 18,
    fontWeight: '800',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingLeft: 30



  }
});
