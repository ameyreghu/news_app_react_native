import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { ArticleList } from "../components/ArticelList";
import axios from "axios";
import { apiKey } from "../constants/constants";
import { h } from "../helpers/ResponsiveHelper";
import { AppBar } from "../components/AppBar";


export const DailyNewsScreen = () => {

    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    

    useEffect(
        () => {

            async function getArticles() {
                setLoading(true);
                try {
                    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
                    console.log(response.data);
                    setArticles(response.data.articles);
                    setLoading(false);
                } catch (error) {
                    setLoading(false);
                }

            }
            getArticles();

        }, []);
    return (
        <View style={styles.screen}>
            {
                loading && <Loading />
            }
            {
                (!loading && articles.length != 0) && <ArticleList articles={articles} />
            }
            {
                (!loading && articles.length == 0) && <Text>No Data</Text>
            }
        </View>
    );
}


const Loading = () => {
    return (
        <View>
            <ActivityIndicator />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});