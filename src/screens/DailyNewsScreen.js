import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { ArticleList } from "../components/ArticelList";
import { h } from "../helpers/ResponsiveHelper";
import { AppBar } from "../components/AppBar";
import getArticles from "../axios/getArticles";
import Dropdown from "../components/DropDown";
import { categories, countryCodes } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";

import * as ArticleActions from "../redux/actions/ArticlesActions";


export const DailyNewsScreen = () => {

    const dispath = useDispatch();
    const articleState = useSelector((state) => state.articles);
    const category =useSelector((state) => state.articles.selectedCategory);
    const country = useSelector((state) => state.articles.selectedCountry);

    function getData() {
        dispath(ArticleActions.setLoading(true));
        getArticles({
            country: articleState.selectedCountry,
            category: articleState.selectedCategory
        }).then(result => {
            if (result.sucess) {
                dispath(ArticleActions.setArticles(result.data));
                dispath(ArticleActions.setLoading(false));
                dispath(ArticleActions.setError(null));
            } else {

                dispath(ArticleActions.setLoading(false));
                dispath(ArticleActions.setError(result.error));
            }
        });
    }


    useEffect(
        () => {
            getData();
        }, [category,country]);
    

    return (
        <View style={styles.screen}>
            {
                articleState.loading && <Loading />
            }
            {
                (articleState.articles.length != 0) && <>
                    <Dropdown value={articleState.selectedCategory} label={'Category'} options={categories} onSelect={(option) =>dispath(ArticleActions.setCategory(option))} />
                    <Dropdown value={articleState.selectedCountry} label={'Country'} options={countryCodes} onSelect={(option) => dispath(ArticleActions.setCountry(option))} />
                    <ArticleList articles={articleState.articles} /></>
            }
            {
                (articleState.error != null) && <Text>{articleState.error}</Text>
            }
            {
                (articleState.articles.length == 0 && !articleState.lo̥ading) && <Text>No articles found</Text>
            }
        </View>
    );
}


const Loading = () => {
    return (<ActivityIndicator size={'large'} color={'blue'} />);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});