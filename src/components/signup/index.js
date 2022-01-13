import React ,{useState}from 'react';
import {Text,View,TouchableOpacity,TextInput} from 'react-native';
import {useNavigation} from "@react-navigation/core";
import {authentication} from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import Container from '../common/container/index';
import Button from "../common/button/index";
import styles from './styles';


const SignupComponent = () => {

    const navigation = useNavigation();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signupUser = () => {
        createUserWithEmailAndPassword(authentication,email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);

            updateProfile(user,{displayName: name})
            .then()
            .catch(error => console.log(error));
            })
        .catch((err) => {console.log(err);})
    }


    return (
        <Container>
            <View style={styles.wrapper}>
               <Text style={styles.title}>Welcome to Movietime!</Text>
               <Text style={styles.subTitle}>Your Personal guide to the world of cinema</Text>
            <View style={styles.form}>
            <TextInput style={styles.input} placeholder="UserName" value={name} 
                       onChangeText={text => setName(text)}/>
            <TextInput style={styles.input} placeholder="Email" value={email} 
                       onChangeText={text => setEmail(text)}/>
            <TextInput style={styles.input} placeholder="Password" value={password} 
                       onChangeText={text => setPassword(text)} secureTextEntry/>
              <Button title="SIGN UP" onPress={signupUser}/>

              <View style={styles.createSection}>
               <Text style={styles.infoText}>Need a new account?</Text>
               <TouchableOpacity onPress={() => {navigation.navigate("loginScreen")}}>
                   <Text style={styles.regsText}>LOGIN</Text>
               </TouchableOpacity>
              </View>
            </View>            
            </View>
        </Container>
    );
};

export default SignupComponent;