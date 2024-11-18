import { useApi } from "@/hook/useApi";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home(){
    const api=useApi();

    async function logar(){
        console.log("LOGANDO")
        await api.login();
    }


    
    return(
        <View>
            <Text>Iniciando Com API</Text>
            <Button title="LOGAR STATIC" onPress={()=>logar()} />

            <Link href="./tasks">Listar as Tarefas</Link>
            <Link href="./addTask">Adicionar nova Tarefas</Link>
        </View>
    );
}