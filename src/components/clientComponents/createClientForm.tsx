'use client'

import { CLIENT_DATA_STATUS } from "@/consts/template";

interface CreateClientFormInterface {
    statusEditType: CLIENT_DATA_STATUS
    data: string;
}

export default function CreateClientForm({ statusEditType: statusEdit, data }: CreateClientFormInterface) {
    return (
        <div className={`flex flex-col w-full`}>
            <h2 className={`text-center`}>createClientForm</h2>
            <form className={`flex flex-col `}>
                <label htmlFor="name">
                    <input id="name" type="text" placeholder="name" />
                </label>
                <label htmlFor="surname">
                    <input id="surname" type="text" placeholder="surname" />
                </label>
                <label htmlFor="personal code">
                    <input id="personal code" type="text" placeholder="personal code" />
                </label>
                <label htmlFor="type expertise">
                    <input id="type expertise" type="text" placeholder="type expertise" />
                </label>
                <label htmlFor="status">
                    <input id="status" type="text" placeholder="status" />
                </label>
                <label htmlFor="customer">
                    <input id="customer" type="text" placeholder="customer" />
                </label>
            </form>
        </div>

    )
}
