import React from "react";
import { View, Text, Pressable } from "react-native";
import estilo from "../styles/Temporizador";

export default function BotaoRapido(props) {

    return (
        <View style = {{marginRight: 16}}>
            <Pressable
                onPress={() => {
                    props.setTempo(props.tempo)}    
                }>

                <View style={estilo.tempoBotaoRapido}>
                    <Text style={estilo.tempoBotaoTexto}>{props.tempo}s</Text>
                </View>

            </Pressable>

        </View>
    );
}

