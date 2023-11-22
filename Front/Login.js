import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function Login(props) {

    function goToLogin()
    {
        props.navigation.navigate('TelaInicial')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#e0e0e0' }}>
            <View style={styles.logo}>
                <Image style={styles.logoimg} source={require('./img/logo.png')} />
            </View>

            <View style={styles.otherView}>
                <View style={styles.login}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.logoimgrosa} source={require('./img/logorosa.png')} />
                        <View style={styles.entrada}>
                            <Image style={styles.user} source={require('./img/login.png')} />
                            <TextInput style={styles.input} placeholder="Digite seu Usuário" />
                        </View>
                        <View style={styles.entrada2}>
                            <Image style={styles.senha} source={require('./img/senha.png')} />
                            <TextInput style={styles.input} placeholder="Digite sua Senha" />
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => goToLogin()} style={styles.botao}>
                                <Text style={{ color: '#ffffff' }}>Logar</Text>
                            </TouchableOpacity>
                        </View>
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
        height: '22em',
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
        marginTop: '3.5em'
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

    botao: {
        width: '6em',
        height: '2.2em',
        backgroundColor: '#bc91c9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '1em',
        marginTop: '5.5em'
    }

});
