import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import {useApi} from '@/hook/useApi'
import { useSession } from "@/hook/useSession";

export default function Tasks(){
    const [tasks, setTasks] = useState([]);

    const api  = useApi();
    const session=useSession();

    const [vlrSession, setVlrSession] = useState<string>()


    async function getTasks(){
        const tasks =  await api.listAll();
        console.log(tasks);

        setTasks(tasks);
    }

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


    useEffect(()=>{
        getTasks();
        receberDados();
    }, [vlrSession]);


    return(
        <View>
            <Text>Listando Tarefass</Text>
            <Button title="TROCAR DADOS DA SESSÃO" onPress={()=>salvarDados("Alex Guerra")}/>

            <Text>{vlrSession}</Text>

            <FlatList
                //className="bg-indigo-950 w-full p-2"
                data={tasks}
                keyExtractor={(item)=>String(item.id)}
                renderItem={({item})=>
                    <View /*className="flex-row justify-between"*/>
                        <Text /*className="text-indigo-100"*/>
                            {item.id} - {item.description} - {item.date}
                        </Text>
                    </View>
                }
            />
        </View>
    );
}