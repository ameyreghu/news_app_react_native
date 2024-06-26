import { FlatList, ScrollView } from "react-native";
import { ArticleCard } from "./ArticleCard";

export const ArticleList=({articles})=>{
    return (
        <ScrollView style={{
            flex:1
        }}>
        {
          articles.map(
            (article,index)=><ArticleCard key={index} article={article}/>
          )
        }
        </ScrollView>
    );
}