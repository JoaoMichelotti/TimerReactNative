import { StyleSheet } from "react-native";

export default StyleSheet.create({
    tempoContagem: {
        color: "#f1d968",
        fontSize: 64,
        textAlign: "center"
    },
    tempoUnidade: {
        color: "#f1d968",
        fontSize: 24,
        marginBottom: 32,
        textAlign: "center"
    },
    tempoCaixa: {
        flexDirection: "row",
    },
    tempoEntrada: {
        backgroundColor: "#1C2229",
        color: "#f1d968",
        fontSize: 24,
        height: 48,
        width: 128,
        textAlign: "center"
    },
    tempoBotao: {
        alignItems: "center",
        backgroundColor: "#1C2229",
        justifyContent: "center",
        height: 48,
        textAlign: "center",

    },
    tempoBotaoRapido: {
        alignItems: "center",
        backgroundColor: "#1C2229",
        justifyContent: "center",
        height: 48,
        textAlign: "center",
        padding: 8,
        borderWidth: 1,        // Define a largura da borda
        borderColor: "#c79452"    
    },
    tempoBotaoTexto: {
        color: "#c79452",
        fontSize: 24,
    }
});