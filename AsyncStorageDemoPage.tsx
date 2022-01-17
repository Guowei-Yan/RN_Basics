import React, { useState } from 'react';
import{
    SafeAreaView,
    StyleSheet,
    TextInput,
    Button,
    Text,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY = "text0";
export default (props: any) => {
    var [text, onChangeText] = useState("");
    const [showText, setShowText] = useState("");
    const onSave =async () =>{
        try{
            await AsyncStorage.setItem(KEY, text);
        } catch (error){
            console.log(error);
        }
        this.textInput.clear();
    }
    const onGet =async () =>{
        try{
            const received = await AsyncStorage.getItem(KEY);
            setShowText(received||'');
            console.log(received);
        } catch (error){
            console.log(error);
        }
    }
    return (
        <SafeAreaView style={style.root}>
            <TextInput
                style={style.input} 
                onChangeText={onChangeText}
                ref={input => { this.textInput = input }}
            />
            <Button title={'Save'} onPress= {onSave}/>
            <Button title={'Get'} onPress= {onGet}/>
            <Text>Results:{showText}</Text>
        </SafeAreaView>
    )
};
const style = StyleSheet.create({
    root: {
        flex: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding:10
    }
})