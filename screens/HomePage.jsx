import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Trips'); // Tab aktif

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'data:image/jpeg;base64,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' }}
          style={styles.profileImage}
        />
        <Text style={styles.welcomeText}>WELCOME Wahyu Hidayat</Text>
        <TouchableOpacity>
          <Icon name="menu" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 8.4966,
          longitude: 4.5421,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{
            latitude: 8.4966,
            longitude: 4.5421,
          }}
          title="You are here"
        />
      </MapView>

      {/* Tab Content */}
      <View style={styles.tabContent}>
        {activeTab === 'Trips' && (
          <View style={styles.tripsContent}>
            <Text style={styles.tabTitle}>Fri, April 20, 2023</Text>
            <View style={styles.infoRow}>
              <Icon name="walk-outline" size={24} color="#fff" />
              <Text style={styles.infoText}>Km</Text>
              <Icon name="car-outline" size={24} color="#fff" />
              <Text style={styles.infoText}>Vehicle</Text>
              <Icon name="speedometer-outline" size={24} color="#fff" />
              <Text style={styles.infoText}>Fuel</Text>
            </View>
          </View>
        )}
        {activeTab === 'Speedometer' && (
          <View style={styles.speedometerContent}>
            <Text style={styles.tabTitle}>Kilometer</Text>
            <Text style={styles.speedText}>Current Speed: 37.6 km/h</Text>
          </View>
        )}
        {activeTab === 'Vehicle' && (
          <View style={styles.vehicleContent}>
            <Text style={styles.tabTitle}>Vehicle</Text>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.vehicleImage}
            />
            <Text style={styles.vehicleName}>Tesla</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Stop</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

      {/* Footer Navigation */}
      <View style={styles.footerNav}>
        <TouchableOpacity onPress={() => setActiveTab('Trips')}>
          <Icon name="location-outline" size={25} color={activeTab === 'Trips' ? '#007AFF' : '#fff'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Speedometer')}>
          <Icon name="speedometer-outline" size={25} color={activeTab === 'Speedometer' ? '#007AFF' : '#fff'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Vehicle')}>
          <Icon name="car-outline" size={25} color={activeTab === 'Vehicle' ? '#007AFF' : '#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#0d0d3d',
      padding: 15,
      marginTop: 20,  // Menambahkan marginTop untuk memindahkan header lebih ke bawah
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    welcomeText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    map: {
      flex: 1,
    },
    tabContent: {
      backgroundColor: '#12124a',
      padding: 15,
    },
    tripsContent: {
      alignItems: 'center',
    },
    speedometerContent: {
      alignItems: 'center',
    },
    vehicleContent: {
      alignItems: 'center',
    },
    tabTitle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    infoText: {
      color: '#fff',
      marginHorizontal: 10,
    },
    speedText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    vehicleImage: {
      width: 100,
      height: 50,
      marginBottom: 10,
    },
    vehicleName: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    buttonRow: {
      flexDirection: 'row',
      marginTop: 10,
    },
    button: {
      backgroundColor: '#007AFF',
      padding: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    footerNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#12124a',
      padding: 10,
    },
  });
  

export default HomePage;

