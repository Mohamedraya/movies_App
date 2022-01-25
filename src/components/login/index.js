import React ,{useState}from 'react';
import {Text,View,TouchableOpacity,TextInput} from 'react-native';
import {useNavigation} from "@react-navigation/native";
//import { signInWithEmailAndPassword ,getAuth} from "firebase/auth";
import {auth} from "../../firebase/firebaseConfig";
import firebase from "../../firebase/firebaseConfig";
import Container from '../common/container/index';
import Button from "../common/button/index";
import styles from './styles';



const LoginComponent = () => {

    const navigation = useNavigation();
    //const [isLoginIn,setIsLoginIn] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    //const auth = getAuth();

    const loginUser =  () => {
        
      auth
      .signInWithEmailAndPassword(email,password)
      .then((userCredential) => {
        const user = userCredential.user; 
             navigation.navigate("HomeScreen")
        
        
      })
      .catch(error => {console.log(error)});
    
  
        /*signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed in 
             const user = userCredential.user; 
             navigation.navigate("HomeScreen")
             return user;}
                        )
        .catch((err) => {console.log(err);})*/
    }

    return (
        <Container>
            <View style={styles.wrapper}>
               <Text style={styles.title}>Welcome to Movietime!</Text>
               <Text style={styles.subTitle}>Your Personal guide to the world of cinema</Text>
            <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Email" value={email} 
                       onChangeText={text => setEmail(text)}/>
            <TextInput style={styles.input} placeholder="Password" value={password} 
                       onChangeText={text => setPassword(text)} secureTextEntry/>
              <Text style={styles.ques}>forgot Your Password?</Text>
              <Button title="SIGN IN" onPress={loginUser}/>

              <View style={styles.createSection}>
               <Text style={styles.infoText}>Need a new account?</Text>
               <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
                   <Text style={styles.regsText}>SIGN UP</Text>
               </TouchableOpacity>
              </View>
            </View>            
            </View>
        </Container>
    );
};

export default LoginComponent;