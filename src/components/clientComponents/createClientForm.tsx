'use client'

import { CLIENT_DATA_STATUS, CLIENT_FORM_TRANSLATED } from "@/consts/template";
import { useGlobalStore } from "@/store/globalStore";

interface CreateClientFormInterface {
    statusEditType: CLIENT_DATA_STATUS
    data: string;
}

export default function CreateClientForm({ statusEditType: statusEdit, data }: CreateClientFormInterface) {
    // stores
    const currentLanguageApp = useGlobalStore((state) => state.currentLanguageApp)
    // 
    return (
        <div className={`flex flex-col w-full`}>
            <h2 className={`text-center`}>createClientForm</h2>
            <form className={`flex flex-col `}>
                <label htmlFor="name" className={`flex gap-2`}>
                    {CLIENT_FORM_TRANSLATED.NAME.TRANSLATE[currentLanguageApp]}
                    <input id="name" type="text" placeholder={CLIENT_FORM_TRANSLATED.NAME.TRANSLATE[currentLanguageApp]} />
                </label>
                <label htmlFor="surname" className={`flex gap-2`}>
                    {CLIENT_FORM_TRANSLATED.SURNAME.TRANSLATE[currentLanguageApp]}
                    <input id="surname" type="text" placeholder={CLIENT_FORM_TRANSLATED.SURNAME.TRANSLATE[currentLanguageApp]} />
                </label>
                <label htmlFor="personal code" className={`flex gap-2`}>
                    {CLIENT_FORM_TRANSLATED.PERSONAL_CODE.TRANSLATE[currentLanguageApp]}
                    <input id="personal code" type="text" placeholder={CLIENT_FORM_TRANSLATED.PERSONAL_CODE.TRANSLATE[currentLanguageApp]} />
                </label>
                <label htmlFor="type expertise" className={`flex gap-2`}>
                    {CLIENT_FORM_TRANSLATED.TYPE_EXPERTISE.TRANSLATE[currentLanguageApp]}
                    <input id="type expertise" type="text" placeholder={CLIENT_FORM_TRANSLATED.TYPE_EXPERTISE.TRANSLATE[currentLanguageApp]} />
                </label>
                <label htmlFor="status" className={`flex gap-2`}>
                    {CLIENT_FORM_TRANSLATED.STATUS.TRANSLATE[currentLanguageApp]}
                    <input id="status" type="text" placeholder={CLIENT_FORM_TRANSLATED.STATUS.TRANSLATE[currentLanguageApp]} />
                </label>
                <label htmlFor="customer" className={`flex gap-2`}>
                    {CLIENT_FORM_TRANSLATED.CUSTOMER.TRANSLATE[currentLanguageApp]}
                    <input id="customer" type="text" placeholder={CLIENT_FORM_TRANSLATED.CUSTOMER.TRANSLATE[currentLanguageApp]} />
                </label>
            </form>
        </div>

    )
}
