import { StyleSheet, View, Image, Text, TouchableOpacity, Modal } from "react-native";
import { useContext, useState } from 'react';
import ModalApartamento from './ModalApartamento'

export default function Bloco() {

    const [modalVisible, setModalVisible] = useState(false);
    const [bloco, setbloco] = useState();

    function goToModal(blocoalterado) {
        setbloco(blocoalterado)
        setModalVisible(!modalVisible);
    }

    return (
        <View style={{ backgroundColor: '#e0e0e0', height: '100%' }}>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#e0e0e0' }}>
                <View style={styles.logo}>
                    <Image style={styles.logoimg} source={require('./img/logo.png')} />
                </View>
                <Text style={{ marginTop: '2em', fontSize: '1em', marginBottom: '2.2em' }}>Apartamento</Text>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-evenly', marginBottom: '1em' }}>
                        <TouchableOpacity onPress={() => goToModal(1)}>
                            <View style={styles.blocosec}>
                                <Image style={{ width: '3em', height: '3.1em', marginTop: '1.8em' }} source={require('./img/casa.png')} />
                                <Text style={{ fontSize: '0.8em', marginTop: '1.2em' }}>BLOCO 1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => goToModal(2)}>
                            <View style={styles.blocosec}>
                                <Image style={{ width: '3em', height: '3.1em', marginTop: '1.8em' }} source={require('./img/casa.png')} />
                                <Text style={{ fontSize: '0.8em', marginTop: '1.2em' }}>BLOCO 2</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: '1em' }}>
                        <TouchableOpacity onPress={() => goToModal(3)}>
                            <View style={styles.blocosec}>
                                <Image style={{ width: '3em', height: '3.1em', marginTop: '1.8em' }} source={require('./img/casa.png')} />
                                <Text style={{ fontSize: '0.8em', marginTop: '1.2em' }}>BLOCO 3</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => goToModal(4)}>
                            <View style={styles.blocosec}>
                                <Image style={{ width: '3em', height: '3.1em', marginTop: '1.8em' }} source={require('./img/casa.png')} />
                                <Text style={{ fontSize: '0.8em', marginTop: '1.2em' }}>BLOCO 4</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-evenly', marginBottom: '1em' }}>
                        <TouchableOpacity onPress={() => goToModal(5)}>
                            <View style={styles.blocosec}>
                                <Image style={{ width: '3em', height: '3.1em', marginTop: '1.8em' }} source={require('./img/casa.png')} />
                                <Text style={{ fontSize: '0.8em', marginTop: '1.2em' }}>BLOCO 5</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ModalApartamento visible={modalVisible} onClose={goToModal} bloco={bloco} />
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
        marginLeft: '0.5em',
        marginRight: '0.5em'
    }
})      
