import * as SecureStore from 'expo-secure-store';
export function useSession(){

    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
    }

    async function saveLogin(data){
        console.log("ATIVADA");
        try{
            //faz o processo do login ou chama o hook com a funcao de login
            // se a validação do usuario e senha = OK, grava dados na sessão
             await SecureStore.setItemAsync('teste', data);
             alert("Foi")
        }catch(error){
            console.log(error);
        }
    }

    async function getValueFor(key) {
        try{
            const result = await SecureStore.getItemAsync(key)
            return result;
        }catch(error){
            console.log(error)
        }
    }

    return { saveLogin, getValueFor };
}