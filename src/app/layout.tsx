import {Slot} from "expo-router"
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";


export default function layout(){

    return (
        <>
            <Slot />
        </>
    );
}