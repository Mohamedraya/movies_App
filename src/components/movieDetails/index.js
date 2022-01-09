import React from 'react';
import {View,Text,Image,FlatList} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import AppHeader from "../../components/appheader";
import CastImage from '../castImage';
import CastPhoto from '../castphoto';
import colors from '../../assets/theme/colors';
import styles from './styles';
import { useEffect } from 'react/cjs/react.development';
import { useNavigation } from '@react-navigation/native';

/*const casts = [{
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
]*/

function MovieDetails ({route}) {

    const {item,movieId} = route.params;
    const navigation = useNavigation();
    const [casts,setCasts] = useState([]);
    const [movieDetails,setMovieDetails] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e7afa11e8652a24e75a9b127f4a9bc8&language=en-US`)
             .then((response) => {setMovieDetails(response.data.results)})
             .catch((error) => console.log(error))
     },[]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=e7afa11e8652a24e75a9b127f4a9bc8e&language=en-US`)
             .then((response) => {setCasts(response.data.results)})
             .catch((error) => console.log(error))
     },[]);

    return (
        <View>
          <AppHeader back optionalIcon="heart" optionalFun={()=>console.log("")}
                     right="ellipsis-vertical" iconColor={colors.white} headerBg={colors.light}/>  
          <Image source={{uri: "https://reactjs.org/logo-og.png"}} style={styles.backgimg}/>           
          <View style={styles.wrapper}>
              <Image source={{uri: item.poster_path}} style={styles.img}/>
              <Text style={styles.movName}>{item.title}</Text>          
          </View>
          <View style={styles.rateView}>      
                <MaterialIcons name="star-rate" color={colors.yellow} size={30}/>
                <Text style={styles.rateTxt}>{item.vote_average}</Text>                                
                <Ionicons name="time-outline" color={colors.dark} size={30} style={styles.icon}/>
                <Text style={styles.rateTxt}>2h 29min</Text>                
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
                 <Text style={styles.dateTxt}>{item.release_date}</Text>
                 <Text style={styles.dircText}>{item.original_title}</Text>
                 <Text style={styles.dircText}>Kevien Feidge</Text>
                 <Text style={styles.dircText}>Alan Silvister</Text>
                 <Text style={styles.dateTxt}>$2.049 billion</Text>
              </View>
          </View>

          <Text style={styles.storyTitle}>STORYLINE</Text>
          <Text style={styles.story}>{item.overview}</Text>
        
          <Text style={styles.cast}>CAST</Text>
          <FlatList data={casts} keyExtractor={item => item.id} horizontal
                    renderItem={({item}) => (<CastImage name={item.character} imageUrl={item.profile_path} onPress={() =>navigation.navigate("CastDetailsScreen",item)}/>)}/>
         
         <Text style={styles.cast}>Photo</Text>
         <FlatList data={casts} keyExtractor={item => item.id} horizontal
                   renderItem={({item}) => (<CastPhoto  imageUrl={item.profile_path}/>)}/>
        </View>
    );
}

export default MovieDetails;

//<Image source={{uri: "https://reactjs.org/logo-og.png"}} style={styles.backgimg}/>