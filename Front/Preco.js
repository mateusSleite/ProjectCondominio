import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Preco(props) {

    var session = JSON.parse(sessionStorage.getItem("morador"));
    var bloco = session.bloco;
    var apto = session.apto;
    const [preco, setPreco] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/condo/preco/${bloco}/${apto}`)
            .then(response => {
                setPreco(response.data);
            })
            .catch(error => {
                console.log('Erro ao buscar o preço', error);
            });
    }, [bloco, apto]);

    function goToTela() {
        props.navigation.navigate('TelaInicial');
    }

    return (
        <View style={{ backgroundColor: '#e0e0e0', height: '100%' }}>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#e0e0e0' }}>
                <TouchableOpacity onPress={() => goToTela()}>
                    <View style={styles.logo}>
                        <Image style={styles.logoimg} source={require('./src/assets/img/logo.png')} />
                    </View>
                </TouchableOpacity>
                <Text style={{ marginTop: '2em', fontSize: '1em', marginBottom: '2.2em' }}>Custo</Text>
                <View style={styles.carde}>
                    <Text style={{ marginTop: '8em', fontSize: '0.7em', marginBottom: "0.2em", color: "#686b6b" }}>VALOR A PAGAR</Text>
                    <Text style={{ fontSize: '2.5em', color:"#bc91c9" }}>R$ {preco},00</Text>
                    <Text style={{ marginTop: '0.5em', fontSize: '0.7em', marginBottom: "4em", color: "#686b6b" }}>PREÇO SUJEITO A MODIFICAÇÕES</Text>
                    <View style={{flexDirection: "row"}}>
                    <TouchableOpacity>
                        <View style={styles.carde2}>
                            <Image style={styles.img} source={require('./src/assets/img/info.png')} />
                            <Text style={{ fontSize: '0.7em', color:"#FFFFFF" }}>INFORMAÇÕES</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.carde3}>
                            <Image style={styles.img2} source={require('./src/assets/img/boletobranco.png')} />
                            <Text style={{ fontSize: '0.7em', color:"#FFFFFF" }}>BOLETO</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </View>
    )
    
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

    carde: {
        width: "90%",
        height: "20em",
        backgroundColor: "white",
        marginTop: "1em",
        borderRadius: "10px",
        alignItems: "center"
    },  

    carde2: {
        width: "6.5em",
        height: "3em",
        backgroundColor: "#bc91c9",
        borderRadius: "5px",
        marginRight: "0.5em",
        justifyContent: "center",
        alignItems: "center"
    },

    carde3: {
        width: "7em",
        height: "3em",
        backgroundColor: "#bc91c9",
        borderRadius: "5px",
        marginLeft: "0.5em",
        justifyContent: "center",
        alignItems: "center"
    },

    img: {
        width: "1.2em",
        height  : "1.2em",
        marginRight: "0.2em",
        marginBottom: "0.2em"
    },

    img2: {
        width: "0.9em",
        height  : "1.2em",
        marginRight: "0.2em",
        marginBottom: "0.2em"
    }

});
