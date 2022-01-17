import React, {useState} from 'react';
import { 
    StyleSheet,
    SafeAreaView,
    View,
    Linking
} from 'react-native';
import { ConfirmButton, Input, SearchHelp, NavBar } from '../common/LoginComponent';
import Constants from '../expand/dao/Constants';

export default (props:any) => {
    const [userName,setUserName] = useState('');
    const [password,setPassWord] = useState('');
    const [msg, setMsg] = useState('for help');
    const [helpUrl, setHelpUrl] = useState('https://google.com')
    const LoginAction = () =>{
        if (userName==='' || password===''){
            setMsg(`username and password can't be null`)
            return;
        }else{
            setMsg('for help');
        }
        
    }
    return (
        <SafeAreaView style={style.root}>
            <NavBar title='登录' righTitle='注册'
                onRightClick={() => {
                    Linking.openURL(Constants.apiDoc)
                }}
            />
            <View style={style.content}>
                <Input
                    label='Username'
                    placeholder='username'
                    shortLine={true}
                    onChangeText={(text:string)=>setUserName(text)}
                />
                <Input
                    label='Password'
                    placeholder='password'
                    shortLine={true}
                    secure={true}
                    onChangeText={(text:string)=>setPassWord(text)}
                />
                <ConfirmButton title="Login" onClick={LoginAction} />
                <SearchHelp msg={msg} helpUrl={helpUrl} />
            </View> 
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    root: {
        flex:1,
    },
    content:{
        paddingTop: 20,
        backgroundColor:'#D0D4D4'
    }
})