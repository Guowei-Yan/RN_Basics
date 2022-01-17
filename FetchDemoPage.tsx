import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,    
} from 'react-native';
import Constants from './js/expand/dao/Constants';
import { get, login, post } from './js/expand/dao/HiNet';
export default (props: any) => {
    const [msg, setMsg]=useState("");
    const doFetch=()=>{

        // fetch('https://api.devio.org/uapi/test/test?requestPrams=aa')
        //     .then(res=>res.json())
        //     .then(result=>{
        //         setMsg(JSON.stringify(result));
        //     }).catch(e=>{
        //         console.log(e);
        //         setMsg(JSON.stringify(e))
        //     })
        // get(Constants.test.api)({ requestPrams : 'RN' }).then(result => {
        //     setMsg(JSON.stringify(result));
        // }).catch(error=>{
        //     console.log(error);
        //     setMsg(JSON.stringify(error));
        // })
        const formData = new FormData();
        formData.append("userName","abc666666");
        formData.append("password","123456");
        login(Constants.login.api)(formData)().then(result =>{
            setMsg(JSON.stringify(result));
        }).catch(error=>{
            console.log(error);
            setMsg(JSON.stringify(error));
        })
    }
    return (
        <SafeAreaView style={styles.root}>
            <TouchableOpacity onPress={doFetch}>
                <Text>Load</Text>
            </TouchableOpacity>
            <Text>{msg}</Text>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});