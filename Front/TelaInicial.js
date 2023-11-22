import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function TelaInicial(props) {

    function goToApt() {
        props.navigation.navigate('Bloco')
    }

    return (
        <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#e0e0e0' }}>
            <View>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={styles.logo} source={require('./img/logo.png')} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.perfil}>

                            </View>
                            <View>
                                <Text style={{ marginTop: '2.5em', marginLeft: '1em', color: "white", fontSize: '0.9em' }}>Olá, Raimundo</Text>
                                <Text style={{ marginTop: '0.1em', marginLeft: '1em', color: "white", fontSize: '0.9em' }}>Condomínio das Águas</Text>
                            </View>

                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Image style={styles.config} source={require('./img/config.png')} />
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#e0e0e0' }}>
                    <Text style={{ color: 'black', marginLeft: '1em', marginBottom: '0.8em', marginTop: '0.5em', fontSize: '0.8em' }}>PRINCIPAIS SERVIÇOS </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                    <TouchableOpacity>
                        <View style={styles.blocorec}>
                            <Image style={{ width: '17%', height: '50%', marginLeft: '1em', marginTop: '1.1em' }} source={require('./img/boleto.png')} />
                            <View>
                                <Text style={{ marginTop: '1.5em', marginLeft: '1.0em', fontWeight: 'bold', fontSize: '0.7em' }}>Boleto</Text>
                                <Text style={{ marginLeft: '1.2em', fontSize: '0.6em' }}>Pague seu Condomínio</Text>
                                <Text style={{ marginLeft: '1.2em', fontSize: '0.6em' }}>sempre em dia</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.blocorec}>
                            <Image style={{ width: '23%', height: '45%', marginLeft: '1em', marginTop: '1.4em' }} source={require('./img/reuniao.png')} />
                            <View>
                                <Text style={{ marginTop: '1.5em', marginLeft: '1.0em', fontWeight: 'bold', fontSize: '0.7em' }}>Assembleia</Text>
                                <Text style={{ marginLeft: '1.2em', fontSize: '0.6em' }}>Pague seu Condomínio</Text>
                                <Text style={{ marginLeft: '1.2em', fontSize: '0.6em' }}>sempre em dia</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#e0e0e0' }}>
                    <Text style={{ color: 'black', marginLeft: '1em', marginBottom: '0.8em', marginTop: '0.5em', fontSize: '0.8em' }}>OUTROS SERVIÇOS </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-evenly', marginBottom: '1em' }}>
                    <TouchableOpacity onPress={() => goToApt()}>
                        <View style={styles.blocosec}>
                            <Image style={{ width: '2.5em', height: '2.7em', marginTop: '1.8em' }} source={require('./img/casa.png')} />
                            <Text style={{ fontSize: '0.75em', marginTop: '1.2em' }}>APARTAMENTO</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.blocosec}>
                            <Image style={{ width: '1.5em', height: '2.6em', marginTop: '1.9em' }} source={require('./img/custo.png')} />
                            <Text style={{ fontSize: '0.75em', marginTop: '1.2em' }}>CUSTO</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.blocosec}>
                            <Image style={{ width: '2.6em', height: '2.8em', marginTop: '2em' }} source={require('./img/churrasqueira.png')} />
                            <Text style={{ fontSize: '0.75em', marginTop: '0.7em' }}>CHURRASQUEIRA</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-evenly', marginBottom: '1em' }}>
                    <TouchableOpacity>
                        <View style={styles.blocosec}>
                            <Image style={{ width: '2.0em', height: '2.8em', marginTop: '1.9em' }} source={require('./img/lixo.png')} />
                            <Text style={{ fontSize: '0.75em', marginTop: '1em' }}>LIXO</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.blocosec}>
                            <Image style={{ width: '2.6em', height: '2.6em', marginTop: '2.1em' }} source={require('./img/erro.png')} />
                            <Text style={{ fontSize: '0.75em', marginTop: '1em' }}>RECLAMAÇÕES</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.blocosec}>
                            <Image style={{ width: '2.6em', height: '2.8em', marginTop: '1.9em' }} source={require('./img/eleicao.png')} />
                            <Text style={{ fontSize: '0.75em', marginTop: '0.9em' }}>ELEIÇÕES</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bc91c9',
        borderBottomRightRadius: "1em",
        borderBottomLeftRadius: "1em",
    },

    logo: {
        marginTop: '0.5em',
        width: 80,
        height: 25
    },

    perfil: {
        marginLeft: '1em',
        marginTop: '1.5em',
        backgroundColor: '#ffffff',
        height: '4em',
        width: '4em',
        borderRadius: "50%",
        marginBottom: '3em'
    },

    config: {
        width: '0.5em',
        height: '2em',
        marginTop: '2.5em',
        marginRight: '1em'
    },

    blocorec: {
        width: '11em',
        height: '5em',
        backgroundColor: "#ffffff",
        borderRadius: '8px',
        justifyContent: 'center',
        flexDirection: "row",
        justifyContent: 'flex-start',
    },

    blocosec: {
        width: '7em',
        height: '7em',
        backgroundColor: "#ffffff",
        borderRadius: '8px',
        alignItems: 'center'
    },

    blocosecaux: {
        width: '7em',
        height: '7em',
        backgroundColor: "#ffffff",
        borderRadius: '8px',
        marginRight: 'em',
        marginLeft: '0.7em'
    }

});