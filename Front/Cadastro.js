import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [block, setBlock] = useState('');
    const [apartment, setApartment] = useState('');

    const handleRegister = () => {
        const apiEndpoint = 'http://localhost:8080/morador';

        const userData = {
            name: username,
            senha: password,
            bloco: block,
            apto: apartment,
        };

        axios.post(apiEndpoint, userData)
            .then(response => {
                console.log('Usuário cadastrado com sucesso:', response.data);
            })
            .catch(error => {
                console.error('Erro ao cadastrar usuário:', error);
            });

        props.navigation.navigate('TelaInicial')
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#e0e0e0' }}>
            <View style={styles.logo}>
                <Image style={styles.logoimg} source={require('./src/assets/img/logo.png')} />
            </View>

            <View style={styles.otherView}>
                <View style={styles.login}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.logoimgrosa} source={require('./src/assets/img/logorosa.png')} />

                        <View style={styles.entrada}>
                            <Image style={styles.user} source={require('./src/assets/img/login.png')} />
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o Usuário"
                                value={username}
                                onChangeText={text => setUsername(text)}
                            />
                        </View>

                        <View style={styles.entrada2}>
                            <Image style={styles.senha} source={require('./src/assets/img/senha.png')} />
                            <TextInput
                                style={styles.input}
                                placeholder="Digite a Senha"
                                value={password}
                                onChangeText={text => setPassword(text)}
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={styles.entrada2}>
                            <Image style={styles.bloco} source={require('./src/assets/img/apto.png')} />
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o Bloco"
                                value={block}
                                onChangeText={text => setBlock(text)}
                            />
                        </View>

                        <View style={styles.entrada2}>
                            <Image style={styles.apto} source={require('./src/assets/img/aptochave.png')} />
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o Apartamento"
                                value={apartment}
                                onChangeText={text => setApartment(text)}
                            />
                        </View>

                        <TouchableOpacity style={styles.botao} onPress={handleRegister}>
                            <Text style={{ color: '#ffffff' }}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: '8em',
        height: '4em',
        backgroundColor: '#bc91c9',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: '1em',
        borderBottomLeftRadius: '1em',
    },

    logoimg: {
        width: 80,
        height: 25,
    },

    logoimgrosa: {
        width: 80,
        height: 25,
        marginTop: '1em'
    },

    otherView: {
        width: '100%',
        height: '55%',
        backgroundColor: '#bc91c9',
        alignItems: 'center'
    },

    login: {
        width: '80%',
        height: '25em',
        backgroundColor: '#ffffff',
        bottom: '9em',
        borderTopLeftRadius: '1em',
        borderTopRightRadius: '1em',
        borderBottomRightRadius: '1em',
        borderBottomLeftRadius: '1em'
    },

    entrada: {
        width: '90%',
        height: '2.5em',
        backgroundColor: '#e0e0e0',
        borderRadius: '1em',
        flexDirection: 'row',
        marginTop: '2em'
    },

    entrada2: {
        width: '90%',
        height: '2.5em',
        backgroundColor: '#e0e0e0',
        borderRadius: '1em',
        flexDirection: 'row',
        marginTop: '1.5em'
    },

    user: {
        width: '1em',
        height: '1.2em',
        marginLeft: '0.9em',
        marginTop: '0.55em'
    },

    input: {
        marginLeft: '1em',
        height: 40,
        width: '75%',
        margin: 12,
        margin: 0,
        outlineStyle: "none"
    },

    senha: {
        width: '1em',
        height: '1.4em',
        marginLeft: '0.9em',
        marginTop: '0.55em'
    },

    bloco: {
        width: '1.3em',
        height: '1.1em',
        marginLeft: '0.7em',
        marginTop: '0.55em'
    },

    apto: {
        width: '1.3em',
        height: '1.3em',
        marginLeft: '0.7em',
        marginTop: '0.55em'
    },

    botao: {
        width: '6em',
        height: '2.2em',
        backgroundColor: '#bc91c9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '1em',
        marginTop: '2em'
    }
});
