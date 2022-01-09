import React from 'react';
import {View,Text,Image,FlatList, ScrollView} from 'react-native';
import CastPhoto from "../castphoto";
import MovieItem from '../movieitem';
import ListItem from '../listitem';
import styles from './styles';


const movies = [{
    image:  "https://reactjs.org/logo-og.png",
    name: "Titanic",
    year: "2012",
    id: '58694a0f-3da1-471f-bd96-145571e29d72'
},

{
    image:  "https://reactjs.org/logo-og.png",
    name: "Titan",
    year: "2012",
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
},

{
    image:  "https://reactjs.org/logo-og.png",
    name: "Titnic",
    year: "2012",
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba'
}

]

function CastDetails ({route}) {

    const {item,castId} = route.params;

    return (
        <ScrollView>
            <View style={styles.castInfo}>
               <Image source={{uri: profile_path}} style={styles.img}/>
               <View style={styles.castName}>
                   <Text style={styles.name}>ROBERT DOWNEY JR.</Text>
                   <Text style={styles.subName}>Actor, Producer, writer</Text>

             <View style={styles.info}>
                <View >
                 <Text style={styles.detailsTxt}>Date of Birth:</Text>
                 <Text style={styles.detailsTxt}>place of Birth:</Text>
                 <Text style={styles.detailsTxt}>Total films:</Text>
                </View>
                <View >
                 <Text style={styles.subdetailsTxt}>April 27,2018</Text>
                 <Text style={styles.subdetailsTxt}>New York, USA</Text>
                 <Text style={styles.subdetailsTxt}>243</Text>                 
                </View>
             </View>            
               </View>              
            </View>

            <View style={styles.wrapper}>
               <Text style={styles.title}>PHOTO</Text>
               <Text style={styles.subTitle}>Show All</Text>
             </View>
             
             <FlatList data={movies} keyExtractor={item => item.id} horizontal
                       renderItem={({item}) => (<CastPhoto imageUrl={item.image}/>)}/>
        
            <View style={styles.wrapper}>
               <Text style={styles.title}>MOST SUCCESSFUL MOVIES</Text>
               <Text style={styles.subTitle}>Show All</Text>
            </View>

            <FlatList data={movies} keyExtractor={item => item.id} horizontal
                      renderItem={({item}) => (<MovieItem name={item.name} imageUrl={item.image} rate={item.year}/>)}/>
        
            <Text style={styles.flatTitle}>ALL MOVIES</Text>
            <FlatList data={movies} keyExtractor={item => item.id}
                      renderItem={({item}) => (<ListItem imageUrl={item.image}/>)}/>
        </ScrollView>
    );
};

export default CastDetails;