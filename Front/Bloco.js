import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from 'react';
import ModalApartamento from './ModalApartamento';

export default function Bloco(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [bloco, setBloco] = useState();
    const [blocoInfo, setBlocoInfo] = useState(null);

    const blocos = [1, 2, 3, 4, 5];

    const fetchBlocoInfo = async (blocoNumero) => {
        try {
            const response = await fetch(`http://localhost:8080/condo/dadosBloco/${blocoNumero}`);
            const data = await response.json();
            setBlocoInfo(data);
        } catch (error) {
            console.error('Erro ao buscar informações do bloco:', error);
        }
    };

    useEffect(() => {
        if (bloco !== undefined) {
            fetchBlocoInfo(bloco);
        }
    }, [bloco]);

    function goToModal(blocoAlterado) {
        setBloco(blocoAlterado);
        setModalVisible(!modalVisible);
    }

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
                <Text style={{ marginTop: '2em', fontSize: '1em', marginBottom: '2.2em' }}>Apartamento</Text>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-evenly', flexWrap: 'wrap', marginBottom: '1em' }}>
                        {blocos.map((blocoNumero, index) => (
                            <TouchableOpacity key={blocoNumero} onPress={() => goToModal(blocoNumero)}>
                                <View style={styles.blocosec}>
                                    <Image style={{ width: '3em', height: '3.1em', marginTop: '1.8em' }} source={require('./src/assets/img/casa.png')} />
                                    <Text style={{ fontSize: '0.8em', marginTop: '1.2em' }}>BLOCO {blocoNumero}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <ModalApartamento visible={modalVisible} onClose={goToModal} bloco={bloco} blocoInfo={blocoInfo} />
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

    blocosec: {
        width: '9em',
        height: '9em',
        backgroundColor: "#ffffff",
        borderRadius: '8px',
        alignItems: 'center',
        marginBottom: '2em'
    }
});      
