import React ,{useEffect,useState}from 'react';
import {View,Text,Image,FlatList, ScrollView} from 'react-native';
import axios from "axios";
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

function CastDetails () {

    const [mostPopular,setMostPopular] = useState([]);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e7afa11e8652a24e75a9b127f4a9bc8e&language=en-US&page=1")
             .then((response) => {setMostPopular(response.data.results)})
             .catch((error) => console.log(error))
     },[]);

    return (
        <ScrollView>
            <View style={styles.castInfo}>
               <Image source={{uri: "https://reactjs.org/logo-og.png"}} style={styles.img}/>
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

            <FlatList data={mostPopular} keyExtractor={item => item.id} horizontal
                      renderItem={({item}) => (<MovieItem name={item.title} imageUrl={item.poster_path} rate={item.vote_average}/>)}/>
        
            <Text style={styles.flatTitle}>ALL MOVIES</Text>
            <FlatList data={mostPopular} keyExtractor={item => item.id}
                      renderItem={({item}) => (<ListItem imageUrl={item.poster_path} title={item.title} rate={item.vote_average}/>)}/>
        </ScrollView>
    );
};

export default CastDetails;