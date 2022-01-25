import React ,{useState}from 'react';
import {Text,View,TouchableOpacity,TextInput} from 'react-native';
import {useNavigation} from "@react-navigation/native";
//import { createUserWithEmailAndPassword ,updateProfile ,getAuth} from "firebase/auth";
import {auth} from "../../firebase/firebaseConfig";
import Container from '../common/container/index';
import Button from "../common/button/index";
import styles from './styles';


function SignupComponent  ()  {

    const navigation = useNavigation();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    //const auth = getAuth();

    const signupUser =  () => {

        auth.createUserWithEmailAndPassword(email,password)
        .then((res) => {
            res.user.updateProfile({
              displayName: name
            })
            console.log('User registered successfully!');
           
            navigation.navigate('LoginScreen');
          })
          .catch(error => {console.log(error)})      
        }
      
         /*createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigation.navigate("LoginScreen");

            updateProfile(user,{displayName: name})
            .then()
            .catch(error => console.log(error));
            })
        .catch((err) => {console.log(err);})*/
    


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
               <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                   <Text style={styles.regsText}>LOGIN</Text>
               </TouchableOpacity>
              </View>
            </View>            
            </View>
        </Container>
    );
};

export default SignupComponent;