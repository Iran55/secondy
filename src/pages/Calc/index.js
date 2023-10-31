import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Calculo = () => {
  const navigation = useNavigation();
  const _goBack = () => console.log('Went back');
  const _handleMore = () => console.log('Shown more');

  return (
    <ScrollView style={styles.container}>
      <Appbar.Header theme={{ colors: { primary: 'red' } }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Calculo da Fazenda" titleStyle={styles.title} />
        <Ionicons
          name="menu-outline"
          size={24}
          color="black"
          onPress={_handleMore}
        />
      </Appbar.Header>

      <View style={styles.text1}>
        <Text>Rancho da Serra</Text>
      </View>

      <View style={styles.content}>
        <ScrollView>
          <View style={styles.box}>
            <Image source={''} style={styles.image} />
            <Text style={styles.imageText}>Volume do biodigestor: 000 m²</Text>
            <Text style={styles.imageText}>
              Altura total do biodigestor: 000 m
            </Text>
            <Text style={styles.imageText}>
              Diametro da câmara do biodigestor: 00 m
            </Text>
            <Text style={styles.imageText}>
              Altura da câmara do biodigetor: 00 m
            </Text>
            <Text style={styles.imageText}>Diâmetro do biodigestor: 00 m</Text>
            <Text style={styles.imageText}>Altura do gasômetro: 00 m</Text>
            <Text style={styles.imageText}>Comprimento do cano guia: 00 m</Text>
            <Text style={styles.imageText}>
              Dimenssões dos tanques de carga e descarga: 00 m
            </Text>
            <Text style={styles.imageText}>
              Comprimento do cano de descarga: 00 m
            </Text>
            <Text style={styles.imageText}>
              Comprimento do cano de carga: 00 m
            </Text>
            <Text style={styles.textRed}>
              Volume de gás produzido pelo biodigestor: 00 m²
            </Text>
            <Text style={styles.textRed}>Data de criação: 17/09/2023</Text>
            <View style={styles.button}>
              <Button
                theme={{ colors: { primary: 'seagreen' } }}
                mode="contained"
                onPress={() => navigation.navigate('Inserir dados')}>
                Novo Calculo
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e8b57',
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  box: {
    border: 2,
    borderRadius: 10,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text1: {
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    border: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 300,
    padding: 3,
    marginTop: 30,
    marginBottom: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  imageText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 5,
  },
  textRed: {
    marginTop: 10,
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginBottom: 30,
  },
});

export default Calculo;
