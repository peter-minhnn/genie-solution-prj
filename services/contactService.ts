import {ContactType} from "@/types/contact";
import {BaseResponseType} from "@/types/base";

const API_URL = '/api/contact';

export const fetchData = async (): Promise<BaseResponseType> => {
    const response = await fetch(`${API_URL}/list`);
    return await response.json();
};

export const saveContact = async (newData: ContactType): Promise<BaseResponseType> => {
    try {
        const data = await fetch(`${API_URL}/post`, {
            method: 'POST',
            body: JSON.stringify(newData)
        })
        return await data.json() ;
    } catch (error) {
        return {code: 0, message: 'Failed to send contact'};
    }
};

export const deleteContact = async (id: string): Promise<BaseResponseType> => {
    try {
        const data = await fetch(`${API_URL}/delete`, {
            method: 'DELETE',
            body: JSON.stringify({id})
        })
        return await data.json();
    } catch (error) {
        return {code: -1, message: 'Failed to delete contact'};
    }
};