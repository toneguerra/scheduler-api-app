import { useApi } from "@/hook/useApi";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function AddTask(){
    const api = useApi();

    const [description,setDescritption] = useState('');
    const [date,setDate] = useState('');
    const [user_id,setUserId] = useState(1);

    async function saveData(){
        await api.addTask({description, date});
    }
    return(

        <View>
            <Text>Adicionando Tarefa</Text>

            <TextInput value={description} onChangeText={setDescritption} placeholder="Descricao"/>
            <TextInput value={date} onChangeText={setDate} placeholder="Data" />

            <Button title="Mandar" onPress={()=>saveData()} />
        </View>
    );

}