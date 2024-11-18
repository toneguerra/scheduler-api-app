import {Slot} from "expo-router"
import * as SecureStore from 'expo-secure-store';


export default function layout(){
    return (
        <>
            <Slot />
        </>
    );
}