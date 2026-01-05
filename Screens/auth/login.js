import { StyleSheet, TouchableOpacity, View, Text, Image, KeyboardAvoidingView } from "react-native";
import AddItem from "../../components/addItem";
import { useEffect, useState } from "react";
import Colors from "../../styles/Colors";
import { loginUser } from "./authfunction";

const LoginScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [form, setForm] = useState(false);

    useEffect((() => {
        if (name.trim() === "" || surname.trim() === "") {
            setForm(false);
        } else {
            setForm(true);
        }

    }), [name, surname])



    const login = () => {
        const newUser = {
            id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
            name: name,
            surname: surname
        }
        loginUser(newUser).then(
            (result) => {
                if (result === 'v') {
                    navigation.replace('Menu')
                }
            }
        )
        setName('');
        setSurname('');
        console.log(newUser);
        console.log("'Fin d'ajout")

    }

    return (
        <KeyboardAvoidingView style={styles.container} >

            <Text style={styles.text}>
                Connexion
            </Text>
            <Image source={require('../../assets/logo.png')}
                style={styles.logo}
                resizeMode="cover" />

            <AddItem type={
                'Nom'
            }
                val={name}
                setValue={setName} />
            <AddItem type={
                "Prenom"
            }
                val={surname}
                setValue={setSurname} />
            {
                form && (
                    <TouchableOpacity style={styles.btn} onPress={() => login()}>
                        <Text style={{ textAlign: "center", color: 'white' }} >
                            Se connecter
                        </Text>
                    </TouchableOpacity>
                )
            }
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
        backgroundColor: Colors.white,
        tintColor: 'white'
    },
    btn: {
        backgroundColor: Colors.green,
        padding: 10,
        marginTop: 10,
        borderRadius: 16,
    },
    text: {
        textAlign: 'center',
        color: Colors.green,
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 32,
        paddingLeft: 8,
    },
    logo: {
        width: 'auto',
        height: 100,
        marginBottom: 20,
        backgroundColor: "white"
    },
})

export default LoginScreen;