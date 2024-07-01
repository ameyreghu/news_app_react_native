import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { h, w } from '../helpers/ResponsiveHelper';

const Dropdown = ({ value, label, options, onSelect }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <View style={[{
            width: '100%',
            paddingHorizontal: w(10),
            marginVertical: h(10),
        }, isExpanded && { height: h(200) }]}>
            <ScrollView contentContainerStyle={styles.dropDownContainer}>
                {!isExpanded && <TouchableOpacity style={{
                    width: '100%',
                    alignItems: 'center',
                }} onPress={() => setIsExpanded(true)} ><Text>{label} : {value}</Text></TouchableOpacity>}
                {isExpanded && options.map((option, index) => (
                    <TouchableOpacity key={index} style={{
                        width: '100%',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginVertical: h(5)
                    }} onPress={() => {
                        onSelect(option);
                        setIsExpanded(false);
                    }}>
                        <Text style={{
                            fontSize: 16,
                        }}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default Dropdown;

const styles = StyleSheet.create({
    dropDownContainer: {
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: h(10),
    }
});