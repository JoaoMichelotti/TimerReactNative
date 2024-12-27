import React from "react";
import { View, TextInput, Pressable, Image } from "react-native";
import estilo from "../styles/Temporizador";


export default function CaixaTempo(props) {
    return (
        <View style={estilo.tempoCaixa}>
            <TextInput
                style={estilo.tempoEntrada}
                keyboardType="number-pad"
                maxLength={3}
                placeholder="seg..."
                value={props.entrada}
                placeholderTextColor="#f1d968"
                onChangeText={props.setEntrada}
            />
            <Pressable
                onPress={() => props.setTempo(props.entrada > 0 ? props.entrada : 60)}>

                <View style={estilo.tempoBotao}>
                    <Image
                        source={{ uri: "https://i.ibb.co/LtggQ4L/icone.png" }}
                        style={{ width: 32, height: 32 }}
                    />
                </View>

            </Pressable>
        </View>
    );
}