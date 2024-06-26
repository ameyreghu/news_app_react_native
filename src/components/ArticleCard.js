import { StyleSheet, View } from "react-native";

export const ArticleCard=({article})=>{
    return (
        <View style={styles.articleCard}>
            <Text>{article.title}</Text>
        </View>
    );
}

const styles=StyleSheet.create({

    articleCard:{
        width:'100%'

    }
});