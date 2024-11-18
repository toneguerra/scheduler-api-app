import * as SecureStore from 'expo-secure-store';
export function useApi(){

    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
    }
    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
          return result;
        } else {
          return "nook";
        }
    }

    async function listAll(){
        try {
            const response = await fetch('http://10.123.10.181:8000/api/tasks');
            const json = await response.json();
            return json;
        } catch (error){
            console.error(error);
        } 
    }

    async function addTask(dataTask){
        console.log("Bearer " + (await getValueFor('token')).toString());

        try{
            const response = await 
            fetch('http://10.123.10.181:8000/api/task/add',{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + (await getValueFor('token')).toString()
                },
                body: JSON.stringify({
                    "description": dataTask.description,
                    "date": dataTask.date,
                    "user_id": 1
                  }),

                  //body: JSON.stringify(toString(dataTask)),
            });

            const data = await response.json();

            console.log("data: ", data);
        }catch(error){
            console.log(error);
        }
    }

    async function login(){
        console.log("ATIVADA");
        try{
            const response = await 
            fetch('http://10.123.10.181:8000/api/auth/login',{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": "toneguerra@yahoo.com.br",
                    "password": "12345678",
                  }),
            });

            const data = await response.json();

            save('token', data.token)
            console.log("data: ", data);
        }catch(error){
            console.log(error);
        }
    }

    return { listAll, addTask, login };

}