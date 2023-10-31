import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HistoricoScreen() {
  const navigation = useNavigation();
  const [fazendas, setFazendas] = useState([
    {
      id: 1,
      nome: 'Rancho da Serra',
      imageSource: require('../../assets/logo-teste.png'),
      selecionada: false,
    },
    {
      id: 2,
      nome: 'Fazenda Bem-te-vi',
      imageSource: require('../../assets/logo-teste.png'),
      selecionada: false,
    },
    {
      id: 3,
      nome: 'Rancho Fundo',
      imageSource: require('../../assets/logo-teste.png'),
      selecionada: false,
    },
    {
      id: 4,
      nome: 'Rancho dos Vales',
      imageSource: require('../../assets/logo-teste.png'),
      selecionada: false,
    },
  ]);

  const [selecoes, setSelecoes] = useState({});
  const [resultado, setResultado] = useState(null);

  const toggleSelecionada = (id) => {
    const fazendasAtualizadas = fazendas.map((fazenda) => {
      if (fazenda.id === id) {
        return { ...fazenda, selecionada: !fazenda.selecionada };
      }
      return fazenda;
    });
    setFazendas(fazendasAtualizadas);

    setSelecoes((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const calcularFazendasSelecionadas = () => {
    // Lógica para calcular as fazendas selecionadas aqui
    const fazendasSelecionadas = fazendas.filter((fazenda) => fazenda.selecionada);
    // lógica do cálculo aqui
    setResultado(`Fazendas selecionadas: ${fazendasSelecionadas.length}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.fazendaItem,
        { backgroundColor: item.selecionada ? 'lightgray' : 'white' },
      ]}
      onPress={() => toggleSelecionada(item.id)}
    >
      <Image source={item.imageSource} style={styles.fazendaImage} />
      <View style={styles.textContainer}>
        <Text style={styles.fazendaNome}>{item.nome}</Text>
        <Text style={styles.dataCalculo}>Data do Cálculo: 15/04/2023</Text>
      </View>
      {selecoes[item.id] && (
        <Icon name="check" size={20} color="green" style={styles.checkIcon} />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Ola, Sr(a) Pessoa')}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Histórico de Calculos</Text>
        <TouchableOpacity onPress={() => teste}>
          <Icon name="bars" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={fazendas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={{ marginBottom: 20 }}
      />
      <TouchableOpacity
        style={styles.calcularButton}
        onPress={calcularFazendasSelecionadas}
      >
        <Text style={styles.calcularButtonText}>Calcular</Text>
      </TouchableOpacity>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e8b57',
    padding: 16,
    paddingStart: '2%',
    paddingEnd: '2%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: '8%',
    paddingBottom: '8%',
    padding: '4%',
  },
  iconButton: {
    paddingTop: '12%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  fazendaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    backgroundColor: 'white',
  },
  fazendaImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  fazendaNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dataCalculo: {
    fontSize: 12,
    color: 'gray',
  },
  checkIcon: {
    marginRight: 8,
  },
  calcularButton: {
    backgroundColor: 'white',
    padding: 18,
    width: '50%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '10%',
  },
  calcularButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e8b57',
  },
  resultado: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 16,
    textAlign: 'center',
  },
});
