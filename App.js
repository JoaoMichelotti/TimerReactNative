import React, {useState, useEffect, useRef, use} from "react";
import { StatusBar, View, Text } from "react-native";
import Temporizador from "./src/components/Temporizador";
import CaixaTempo from "./src/components/CaixaTempo";
import BotaoRapido from "./src/components/botaoRapido";

export default function App() {


  const [ tempo, setTempo ] = useState(0);
  const [ entrada, setEntrada ] = useState("");
  const tempoRef = useRef(tempo);

  useEffect(() => {
    tempoRef.current = tempo;
  }, [tempo]);

  useEffect(() => {

    const interval = tempo > 0 && setInterval(() => {
      setTempo(tempo => tempo - 1);
    }, 1000);

   

    return () => clearInterval(interval);

  }, [tempo]);

  return (
    <View style={{flex: 1, justifyContent: "center", 
                alignItems: "center", backgroundColor: "#20262E"}}>

      <StatusBar barStyle="light-content" backgroundColor="#1C2229" /> 
        
      <Temporizador tempo={tempo} />

      <CaixaTempo entrada={entrada} 
      setEntrada={setEntrada} 
      setTempo={setTempo} />

      <View style={{flexDirection: "row", marginTop: 25}}>
        <BotaoRapido setTempo={setTempo} tempo="5" />
        <BotaoRapido setTempo={setTempo} tempo="120" />
        <BotaoRapido setTempo={setTempo} tempo="180" />
      </View>
      

    </View>
  );


}