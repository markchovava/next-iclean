"use server"

import { revalidatePath } from "next/cache";
import { baseURL } from "../baseURL";



export async function emailServiceAction(data: any) {
    const res = await fetch(`${baseURL}iclean-service-email`, {
        'method': 'POST',
        'body': JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    revalidatePath('/')
    return await res.json();
}


export async function emailRequestAction(data: any) {
    const res = await fetch(`${baseURL}iclean-request-email`, {
        'method': 'POST',
        'body': JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    revalidatePath('/')
    return await res.json();
}