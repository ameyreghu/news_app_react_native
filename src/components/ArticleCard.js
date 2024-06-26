import { StyleSheet, View, Text, Image } from "react-native";
import { h, w } from '../helpers/ResponsiveHelper';
import { kDefaultImage } from "../constants/constants";

export const ArticleCard = ({ article }) => {
    return (
        <View style={styles.articleCard}>
            <Image
                source={{ uri:article.urlToImage??kDefaultImage }}
                style={styles.image}
            />
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.description}>{article.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    articleCard: {
        backgroundColor: 'rgba(0,0,0,0.2)',
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