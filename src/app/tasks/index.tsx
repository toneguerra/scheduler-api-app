import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import {useApi} from '@/hook/useApi'

export default function Tasks(){
    const [tasks, setTasks] = useState([]);

    const api  = useApi();

    async function getTasks(){
        const tasks =  await api.listAll();
        console.log(tasks);

        setTasks(tasks);
    }


    useEffect(()=>{
        getTasks();
    }, []);


    return(
        <View>
            <Text>Listando Tarefas</Text>

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