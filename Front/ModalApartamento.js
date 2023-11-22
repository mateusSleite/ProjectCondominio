import { Modal, View, Text, TouchableOpacity, FlatList } from 'react-native';


export default function ModalUsuario({ visible, onClose, bloco })
{
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: 300 }}>
                    <TouchableOpacity onPress={onClose} style={{ marginTop: 10, backgroundColor: 'lightgray', padding: 10, borderRadius: 5 }}>
                        <Text>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}