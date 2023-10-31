import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

export default function Register() {
    const navigation = useNavigation();
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo-teste.png')}
                    style={{ width: '40%' }}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <TextInput placeholder="Digite seu nome" style={styles.input} />
                <TextInput placeholder="Sobrenome" style={styles.input} />
                <TextInput placeholder="E-mail" style={styles.input} />
                <TextInput placeholder="Nova senha" style={styles.input} />
                <TextInput placeholder="Confirmar senha" style={styles.input} />

                {/* Campos para Data de Nascimento */}
                <View style={styles.dateInputContainer}>
                    <TextInput
                        placeholder="Dia"
                        style={styles.dateInput}
                        keyboardType="numeric"
                        value={day}
                        onChangeText={text => setDay(text)}
                    />
                    <TextInput
                        placeholder="Mês"
                        style={styles.dateInput}
                        keyboardType="numeric"
                        value={month}
                        onChangeText={text => setMonth(text)}
                    />
                    <TextInput
                        placeholder="Ano"
                        style={styles.dateInput}
                        keyboardType="numeric"
                        value={year}
                        onChangeText={text => setYear(text)}
                    />
                </View>

                {/* Selecionar Gênero */}
                <RNPickerSelect
                    placeholder={{ label: 'Selecione o Gênero', value: null }}
                    items={[
                        { label: 'Feminino', value: 'feminino' },
                        { label: 'Masculino', value: 'masculino' },
                        { label: 'Personalizado', value: 'personalizado' },
                    ]}
                    value={gender}
                    onValueChange={(value) => setGender(value)}
                    style={pickerSelectStyles}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}>Cadastre-se</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e8b57',
    },
    containerLogo: {
        flex: 1,
        backgroundColor: '#2e8b57',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 3,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: '#2e8b57',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    dateInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateInput: {
        borderBottomWidth: 1,
        height: 40,
        width: '30%',
        fontSize: 16,
        marginTop: 12,
        marginBottom: 12,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        borderBottomWidth: 1,
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingRight: 30,
    },
    inputAndroid: {
        borderBottomWidth: 1,
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        fontSize: 16,
        paddingHorizontal: 10,
        paddingRight: 30, 
    },
});
