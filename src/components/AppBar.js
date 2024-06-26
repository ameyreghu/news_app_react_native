import { StyleSheet, View, Text, Platform } from "react-native";
import { h, w } from "../helpers/ResponsiveHelper";

export const AppBar = ({
    title
}) => {
    return (
        <View style={[styles.appBar, styles.platformStyles]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        appBar: {
            width: "100%",
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: h(13),
            paddingHorizontal: w(15),
            backgroundColor:'white'
        },
        platformStyles: Platform.select(
            {
                android: {
                    marginTop: h(40),
                    elevation: 10
                },
                ios: {
                    shadowColor: 'black',
                    shadowOffset: { width: 2, height: 0 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3,
                }
            }
        ),
        title: {
            alignSelf: 'center',
            fontSize: '16',
            fontWeight: '600'
        },

    }
);