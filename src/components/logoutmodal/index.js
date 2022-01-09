import React from 'react';
import {Text,Pressable,View} from "react-native";
import Modal from "react-native-modal";
import styles from './styles';


function LogoutModal ({visible,onBack,onPress}) {

    return (
        <Modal transparent={true} animationIn={"slideInUp"} animationInTiming={500}
        animationOutTiming={ 500 } isVisible={ visible }backdropOpacity={ 0.4 }
        onBackdropPress={ onBack }>

            <View style={styles.mainView}>
               <View style={styles.modalView}>
                   <Text>Do You Want TO exit</Text>
                   <Pressable style={styles.button} onPress={onPress}>
                      <Text>Logout</Text>
                   </Pressable>
               </View>
            </View>
        </Modal>
    );
}

export default LogoutModal;