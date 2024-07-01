import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { ArticleList } from "../components/ArticelList";
import { h } from "../helpers/ResponsiveHelper";
import { AppBar } from "../components/AppBar";
import getArticles from "../axios/getArticles";
import Dropdown from "../components/DropDown";
import { categories, countryCodes } from "../constants/constants";


export const DailyNewsScreen = () => {

    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('in');
    const [selectedCategory, setSelectedCategory] = useState('general');


    function getData() {
        setLoading(true);
        getArticles({
            country: selectedCountry,
            category: selectedCategory
        }).then(result => {
            if (result.sucess) {
                setArticles(result.data);
                setLoading(false);
                setError(null);
            } else {
                setLoading(false);
                setError(result.error);
            }
        });
    }


    useEffect(
        () => {
           getData();

        }, [selectedCountry, selectedCategory]);



    return (
        <View style={styles.screen}>
            {
                loading && <Loading />
            }
            {
                (articles.length != 0) && <>
                    <Dropdown value={selectedCategory} label={'Category'} options={categories} onSelect={(option) => setSelectedCategory(option)} />
                    <Dropdown value={selectedCountry} label={'Country'} options={countryCodes} onSelect={(option) => setSelectedCountry(option)} />
                    <ArticleList articles={articles} /></>
            }
            {
                (error != null) && <Text>{error}</Text>
            }
            {
                (articles.length == 0&&!loading) && <Text>No articles found</Text>
            }
        </View>
    );
}


const Loading = () => {
    return (<ActivityIndicator  size={'large'} color={'blue'}/>);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});