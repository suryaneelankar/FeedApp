import React, { Component, useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';

const OTPScreen = ({ navigation }) => {

    const [confirm, setConfirm] = useState(null);

    const [code, setCode] = useState('');

    const [showLoader, SetshowLoader] = useState(false);

    useEffect(() => {
        // signInwithPhoneNum()
    }, [])

    function ShowActivityLoader() {
        return (
            <Modal
                transparent={true}
                animationType={"none"}
                visible={showLoader}
                onRequestClose={() => {
                    console.log("close modal");
                }}
            >
                <View style={styles.Loadingcontainer}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            </Modal>
        );
    }

    const signInwithPhoneNum = async () => {
        try {
            const confirm = await auth().signInWithPhoneNumber('+1 650-555-3434')
            alert(JSON.stringify(confirm))
            console.warn('successsssssss')
        } catch (e) {
            alert(JSON.stringify(e))
            console.warn('errorrrrrrrrrrrrr')
        }
    }

    async function signInWithPhoneNumber(phoneNumber) {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            await confirm.confirm(code);
        } catch (error) {
            console.log('Invalid code.');
        }
    }



    const renderHeader = () => {
        return (
            <View style={{ backgroundColor: '#7A22FF', height: 60, top: 0, flexDirection: 'row' }}>


            </View>
        )
    }


    const navigateToLobby = () => {
        navigation.navigate('FeedApp')
        SetshowLoader(true)
    }





    return (
        <View style={styles.container}>
            {renderHeader()}
            {/* {ShowActivityLoader()} */}
            <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={styles.ModalOkButtonStyle}
                    onPress={() => navigateToLobby()}>

                    <Text style={{ color: 'white', textAlignVertical: 'center', alignSelf: 'center', height: 40, fontWeight: 'bold', fontSize: 16 }}>GO TO LOBBY </Text>
                </TouchableOpacity>

                <TextInput value={code} onChangeText={text => setCode(text)} />

            </View>


        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    button: {
        // position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: 'red',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }
    },
    ModalOkButtonStyle: {
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#38B100',
        borderRadius: 6,
        borderColor: '#fff',
        width: 175,
        height: 40,
        marginHorizontal: 10,
        alignSelf: 'center'
    },

})

export default OTPScreen