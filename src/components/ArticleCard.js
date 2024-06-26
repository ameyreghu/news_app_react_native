import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { h, w } from '../helpers/ResponsiveHelper';
import { kDefaultImage } from "../constants/constants";
import { useNavigation } from "@react-navigation/native";
import * as RouteNames from '../constants/RouteNames';

export const ArticleCard = ({ article }) => {
    const navigation=useNavigation();

    function goToDetails(){
        navigation.navigate(RouteNames.ArticleDetails,{article:article});
    }
    return (
        <TouchableOpacity style={styles.articleCard} onPress={goToDetails}>
            <Image
                source={{ uri:article.urlToImage??kDefaultImage }}
                style={styles.image}
            />
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.description}>{article.description}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    articleCard: {
        backgroundColor: 'white',
        marginHorizontal: w(10),
        marginVertical: h(10),
        paddingHorizontal: w(20),
        paddingVertical: h(20),
        borderRadius:10
    },
    image:{
         width:'100%', 
        height:h(200),
        objectFit:"fill" ,
        borderRadius:10
    },
    title:{
        fontSize:16,
        fontWeight:'700',
        marginTop:h(5)
    },
    description:{
        fontSize:12,
        fontWeight:'400',
        marginTop:h(5)
    }
});