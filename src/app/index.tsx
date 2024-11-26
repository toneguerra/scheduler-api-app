import { useApi } from "@/hook/useApi";
import { useSession } from "@/hook/useSession";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";


export default function Home(){
    const api=useApi();
    const session=useSession();

    const [vlrSession, setVlrSession] = useState<string>()

    async function salvarDados(dados:string){
        console.log("LOGANDO")
        await session.saveLogin(dados);
        receberDados();
    }

    async function receberDados(){
        const x = await session.getValueFor('teste')
        .then(data => {
            console.log(data)
            
            setVlrSession(data?.toString())
        });
    }

    async function logar(){
        console.log("LOGANDO")
        await api.login();
    }

    useEffect( () => {
        receberDados();
 
      }, [vlrSession]);
    
    return(
        <View>
            <Text>Iniciando Com API</Text>
            <Button title="LOGAR STATIC" onPress={()=>logar()} />

            <Link href="./tasks">Listar as Tarefas</Link>
            <Link href="./addTask">Adicionar nova Tarefas</Link>

            <Text>------AQUI O EXEMPLO------------</Text>

            <Button title="ADD Valor inicial DADOS DA SESSÃO" onPress={()=>salvarDados("Jeronimo")}/>
            <Text>{vlrSession}</Text>

        </View>
    );
}