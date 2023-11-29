import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
export default function ModalUsuario({ visible, onClose, bloco, blocoInfo }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', marginBottom: '4em' }}>Bloco {String(bloco)}</Text>
                    </View>
                    {blocoInfo && (
                        <>
                            <View style={styles.rowContainer}>
                                <View style={styles.columnContainer}>
                                    <Text>Quantidade de Apto</Text>
                                    <View style={styles.rowContainer}>
                                        <Image style={styles.logoimgrosa} source={require('./src/assets/img/apto.png')} />
                                        <Text>{blocoInfo.quantidadeTotal}</Text>
                                    </View>
                                </View>
                                <View style={styles.columnContainer}>
                                    <Text>Apto Disponíveis</Text>
                                    <View style={styles.rowContainer}>
                                        <Image style={styles.logoimgrosa} source={require('./src/assets/img/apto.png')} />
                                        <Text>{blocoInfo.quantidadeDisponivel}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rowContainer}>
                                <View style={styles.columnContainer}>
                                    <Text>Vagas por Apto</Text>
                                    <View style={styles.rowContainer}>
                                        <Image style={styles.logoimgrosa} source={require('./src/assets/img/apto.png')} />
                                        <Text>{2}</Text>
                                    </View>
                                </View>
                                <View style={styles.columnContainer}>
                                    <Text>Apto por Andar</Text>
                                    <View style={styles.rowContainer}>
                                        <Image style={styles.logoimgrosa} source={require('./src/assets/img/apto.png')} />
                                        <Text>{4}</Text>
                                    </View>
                                </View>
                            </View>
                        </>
                    )}
                    <View style={styles.centeredContainer}>
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Text style={{ color: '#ffffff' }}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: 350,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5, // Apenas para Android
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '2em',
    },
    columnContainer: {
        alignItems: 'center',
    },
    centeredContainer: {
        alignItems: 'center',
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: '#bc91c9',
        padding: 10,
        borderRadius: 5,
        width: '6em',
        alignItems: 'center',
    },
    logoimgrosa: {
        width: 20,
        height: 20,
        marginRight: '0.3em',
    },
});
