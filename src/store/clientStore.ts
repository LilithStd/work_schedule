import {create} from 'zustand';

interface ClientStoreTypes {
    clientsList:[]
}

export const useClientStore = create<ClientStoreTypes>()((set,get) => ({
    clientsList: [],
}));