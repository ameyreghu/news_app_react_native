import { StyleSheet, View, Image, Text, Button } from "react-native";
import { kDefaultImage } from "../constants/constants";
import { h,w } from "../helpers/ResponsiveHelper";
import { Linking } from "react-native";

export const ArticleDetailsScreen = ({ route }) => {

    const {article}= route.params;

    const date= new Date(article.publishedAt);
    const formatedDate= date.toLocaleString('en-US');

    function OpeninBrowser(){
        Linking.openURL(article.url);
    }
    return (
        <View style={styles.screen}>
            <Image
                source={{ uri: article.urlToImage ?? kDefaultImage }}
                style={styles.image}
            />
            <Text style={styles.title}>{article.title}</Text>
            <View style={styles.row}>
            <Text style={styles.subTitle}>{article.author}</Text>
            <Text style={styles.subTitle}>{formatedDate}</Text>
            </View>
            <Text style={styles.description}>{article.description}</Text>
            <Text style={styles.description}>{article.content}</Text>
            <Button title="Open in Browser" onPress={OpeninBrowser}/>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        screen: {
            flex: 1,
            marginHorizontal:w(10)
        },
        image:{
            width:'100%', 
           height:h(200),
           objectFit:"fill" ,
           borderRadius:10
       },
       row:{
        flexDirection:'row',
        justifyContent:'space-between'
       },
       title:{
           fontSize:16,
           fontWeight:'700',
           marginTop:h(5)
       },
       subTitle:{
        fontSize:14,
           fontWeight:'500',
           marginTop:h(5)
       },
       description:{
           fontSize:12,
           fontWeight:'400',
           marginTop:h(5)
       }
    }
);