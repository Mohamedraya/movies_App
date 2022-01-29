import React ,{useEffect,useState}from 'react';
import {View,Text,Image,FlatList, ScrollView} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import DetailsHeader from '../DetailsHeader';
import CastImage from '../castImage';
import CastPhoto from '../castphoto';
import colors from '../../assets/theme/colors';
import styles from './styles';

import { useNavigation } from '@react-navigation/native';

const casts = [{
    image:  "https://reactjs.org/logo-og.png",
    name: "Titanic",
    id: '58694a0f-3da1-471f-bd96-145571e29d72'
},

{
    image:  "https://reactjs.org/logo-og.png",
    name: "Titan",
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
},

{
    image:  "https://reactjs.org/logo-og.png",
    name: "Titnic",
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
},
{
    image:  "https://reactjs.org/logo-og.png",
    name: "Titnic",
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b',
},
]

function MovieDetails () {

    //const movieId = route.params.id;
    const navigation = useNavigation();
    //const [casts,setCasts] = useState([]);634649
    const [movieDetails,setMovieDetails] = useState({});

   useEffect(() => {
       axios.get(`https://api.themoviedb.org/3/movie/634649?api_key=e7afa11e8652a24e75a9b127f4a9bc8e&language=en-US`)
       .then((response) => {setMovieDetails(response.data)})
       .catch((error) => console.log(error));
   }, []);


    return (
        <ScrollView>
          <DetailsHeader/>  
          <Image source={{uri: "https://image.tmdb.org/t/p/w500/" + movieDetails.backdrop_path}} style={styles.backgimg}/>            
          <View style={styles.wrapper}>
              <Image source={{uri: "https://image.tmdb.org/t/p/w500/" + movieDetails.poster_path}} style={styles.img}/>
              <Text style={styles.movName}>Matrix Movie</Text>          
          </View>
          <View style={styles.rateView}>
              <View style={styles.stars}>     
                <MaterialIcons name="star-rate" color={colors.yellow} size={21}/>
              </View>   
                <Text style={styles.rateTxt}>7.4</Text> 
              <View style={styles.stars}>                                 
                <Ionicons name="time-outline" color={colors.dark} size={21} style={styles.icon}/>
              </View>  
                <Text style={styles.rateTxt}>2h 36min</Text>                
          </View>
          <View style={styles.movType}>
             <View style={styles.typView}>
                 <Text>Fiction</Text>
             </View>
             <View style={styles.typView}>
                 <Text>Action</Text>
             </View>
             <View style={styles.typView}>
                 <Text>Adventure</Text>
             </View>
          </View>
          <View style={styles.detailsContainer}>
              <View style={styles.details}>
                 <Text style={styles.detailsTxt}>Release date:</Text>
                 <Text style={styles.detailsTxt}>Director:</Text>
                 <Text style={styles.detailsTxt}>Producer:</Text>
                 <Text style={styles.detailsTxt}>Composer:</Text>
                 <Text style={styles.detailsTxt}>Box Office:</Text>
              </View>
              <View style={styles.details}>
                 <Text style={styles.dateTxt}>Feidge</Text>
                 <Text style={styles.dircText}>Feidge</Text>
                 <Text style={styles.dircText}>Kevien Feidge</Text>
                 <Text style={styles.dircText}>Alan Silvister</Text>
                 <Text style={styles.dateTxt}>$2.049 billion</Text>
              </View>
          </View>

          <Text style={styles.storyTitle}>STORYLINE</Text>
          <Text style={styles.story}>Feidge</Text>
        
          <Text style={styles.cast}>CAST</Text>
          <FlatList data={casts} keyExtractor={item => item.id} horizontal
                    renderItem={({item}) => (<CastImage name={item.name} imageUrl={item.image} onPress={() =>navigation.navigate("CastDetailsScreen")}/>)}/>
         
         <Text style={styles.cast}>Photo</Text>
         <FlatList data={casts} keyExtractor={item => item.id} horizontal
                   renderItem={({item}) => (<CastPhoto  imageUrl={item.image}/>)}/>
        </ScrollView>
    );
}

export default MovieDetails;

/*<Image source={{uri: "https://reactjs.org/logo-og.png"}} style={styles.backgimg}/>


"https://i.ytimg.com/vi/MJuFdpVCcsY/movieposter_en.jpg"
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4dLuZsvF5o--DTrPSgQi2RKcQRHogV43iw&usqp=CAU"




<View style={styles.container} >
            <View style={styles.background} >
             <Image style={styles.image} source={{uri: "https://image.tmdb.org/t/p/w500/" + movieDetails.backdrop_path}} />
            </View>
          </View> 
*/
//