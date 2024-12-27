import React from "react";
import { View, Text } from "react-native";
import estilo from "../styles/Temporizador";

export default function Temporizador({tempo}) {
  return (
    <View>
      <Text style={estilo.tempoContagem}>{tempo}</Text>
      <Text style={estilo.tempoUnidade}>Segundos</Text>
    </View>
  );
}