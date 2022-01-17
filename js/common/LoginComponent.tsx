import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, Linking } from "react-native";

export const Input =(props:any) => {
    const { label, placeholder, shortLine, secure, onChangeText } = props;
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={style.row}>
                <Text style={style.inputLabel}> {label} </Text>
                <TextInput
                    style={style.input}
                    placeholder={placeholder}
                    secureTextEntry={secure}
                    autoCapitalize={'none'} // no cap or small letters diff
                    onChangeText={onChangeText}
                />
            </View>
            <View style={{
                height: 0.5,
                backgroundColor: '#D0D4D4',
                marginLeft: shortLine ? 20 : 0
            }}/>
        </View>
    )
}

export const ConfirmButton=(props:any) =>{
    const { title, onClick } = props;
    return(
        <TouchableOpacity style={ style.confirmButtonLayout } onPress={onClick}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
};
export const SearchHelp=(props:any) =>{
    const{ msg, helpUrl} = props;
    return(
        <View style={style.helpTip}>
            <Text style={{fontSize:10,}}>{msg}</Text>
            {!!helpUrl && (<Button title='Google Search' onPress={() => {
                Linking.openURL(helpUrl)
            }} />)}
        </View>
    )
}
export const NavBar = (props: any) => {
    const { title, righTitle, onRightClick } = props;
    return (
        <View style={style.navBar}>
            <View />
            <View style={style.titleLayout}>
                <Text style={style.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={onRightClick}>
                <Text style={style.button}>{righTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({ 
    row:{
        flexDirection: "row"
    },
    inputLabel: {
        marginLeft: 15,
        marginTop: 18,
        marginBottom: 18,
        fontSize: 16,
        width: 90,
    },
    input:{
        flex: 1,
        margin: 15
    },
    confirmButtonLayout: {
        backgroundColor: 'grey',
        alignItems: 'center',
        padding: 12,
        margin: 20,
        marginTop: 30,
        borderRadius: 5

    },
    helpTip: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 44
    },
    titleLayout: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
    button: {
        color: '#007AFF',
        paddingRight: 15,
        fontSize: 16
    }
})