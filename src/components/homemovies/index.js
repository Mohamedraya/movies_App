import React ,{useState,useEffect} from 'react';
import {View,Text,FlatList,Image, ScrollView,Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../HomeHeader';
import MovieItem from '../../components/movieitem';
import SmallMovieItem from "../../components/smallmovieitem";
import axios from 'axios';
import colors from '../../assets/theme/colors';
import styles from './styles';


const slides = [
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
    "https://reactjs.org/logo-og.png"
]


const movies = [{
    picture:  "https://reactjs.org/logo-og.png",
    name: "Titanic",
    rate: "5.6",
    id: '58694a0f-3da1-471f-bd96-145571e29d72'
},

{
    picture:  "https://reactjs.org/logo-og.png",
    name: "Titan",
    rate: "5.7",
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
},

{
    picture:  "https://reactjs.org/logo-og.png",
    name: "Titnic",
    rate: "5.8",
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba'
}

]


function HomeMovies () {

    const [imgActive,setImgActive] = useState(0);
    const [mostPopular,setMostPopular] = useState([]);
    const [upComing,setUpComing] = useState([]);
    const navigation = useNavigation();
    


    useEffect(() => {
       axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e7afa11e8652a24e75a9b127f4a9bc8e&language=en-US&page=1")
            .then((response) => {setMostPopular(response.data.results)})
            .catch((error) => console.log(error))
    },[]);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=e7afa11e8652a24e75a9b127f4a9bc8e&language=en-US&page=1")
             .then((response) => {setUpComing(response.data.results)})
             .catch((error) => console.log(error))
     },[]);

   const onchange = (nativeEvent) => {
    
       if(nativeEvent) {       
           const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurment);
           if (slide != imgActive) {
               setImgActive(slide);
           }
       }
    }

    return (
        <ScrollView>

            <HomeHeader/>
            <View style={styles.slide}>
               <ScrollView onScroll={({nativeEvent}) => onchange(nativeEvent)}
                           showsHorizontalScrollIndicator={false}
                           pagingEnabled horizontal style={styles.slide}>

                    {
                        mostPopular.map((e,index) => <Image key={e} resizeMode="contain"
                                                       style={styles.slide}
                                                       source={{uri:"https://image.tmdb.org/t/p/w500/" + e.backdrop_path}}/>)
                    }           
               </ScrollView>
               <View style={styles.wrapDot}>
                 {
                     mostPopular.map((e,index) => 
                     <Text key={e} style={imgActive == index ? styles.dotActive : styles.dot}>
                       ●
                     </Text>)
                 }
               </View>
            </View>

          <View style={styles.wrapper}>
            <Text style={styles.title}>Most Popular Movies</Text>
            <Text style={styles.subTitle}>Show All</Text>
          </View>  
           
           <FlatList data={mostPopular} keyExtractor={item => item.id} horizontal
           renderItem={({item}) => (<MovieItem name={item.title} rate={item.vote_average} imageUrl={item.poster_path}
                                   onPress={() =>{navigation.navigate("MovieDetailsScreen")} }/>)}/>
          
          <View style={styles.wrapper}>
            <Text style={styles.title}>New Movies</Text>
            <Text style={styles.subTitle}>Show All</Text>
          </View>

          <FlatList data={upComing} keyExtractor={item => item.id} horizontal
           renderItem={({item}) => (<SmallMovieItem name={item.title} rate={item.vote_average} imageUrl={item.poster_path}
                                                    onPress={() =>{navigation.navigate("MovieDetailsScreen")} }/>)}/>          
        
        </ScrollView>
    );
   
}

export default HomeMovies;

/*<AppHeader menu title="Movietime" optionalIcon="search" optionalFunc={() => console.log("")}
right="person-outline" iconColor={colors.black} headerBg={colors.white}/>


<AppHeader menu title="Movietime" optionalIcon="search" optionalFunc={() => console.log("")}
right="person-outline" iconColor={colors.black}/>
*/