
export function useApi(){



    async function listAll(){
        try {
            const response = await fetch('http://192.168.6.56:8000/api/tasks');
            const json = await response.json();
            return json;
        } catch (error){
            console.error(error);
        } 
    }

    async function addTask(dataTask){
        //console.log(dataTask);
        try{
            const response = await 
            fetch('http://192.168.6.56:8000/api/task/add',{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
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

    return { listAll, addTask };

}