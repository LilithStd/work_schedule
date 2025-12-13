'use client'

import { indents } from "@/consts/globalStyles";
import { CLIENT_DATA_STATUS, CLIENT_FORM_TRANSLATED, THEME_COLORS } from "@/consts/template";
import { useGlobalStore } from "@/store/globalStore";
import { useState } from "react";
import ResetChooseInputType from "../../../public/icons/ArrowPath.svg"

interface CreateClientFormInterface {
    statusEditType: CLIENT_DATA_STATUS
    data: string;
}

export default function CreateClientForm({ statusEditType: statusEdit, data }: CreateClientFormInterface) {
    // consts

    // 
    // stores
    const currentLanguageApp = useGlobalStore((state) => state.currentLanguageApp)
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)
    // 
    // state
    const [typeExpertise, setTypeExpertise] = useState('');
    const [additionalTypeExpertise, setAdditionalTypeExpertise] = useState('');
    const [statusClient, setStatusClient] = useState('');
    // 
    //functions
    const handleResetForm = () => {
        setTypeExpertise('');
        setStatusClient('');
        // reset form fields
    }
    // 


    return (
        <div className={`flex flex-col w-full`}>
            <h2 className={`text-center`}>createClientForm</h2>
            <form className={`flex flex-col `}>
                <label htmlFor="name" className={`flex gap-2`}>
                    {CLIENT_FORM_TRANSLATED.NAME.TRANSLATE[currentLanguageApp]}:
                    <input id="name" type="text" placeholder={CLIENT_FORM_TRANSLATED.NAME.TRANSLATE[currentLanguageApp]} />
                </label>
                <label htmlFor="surname" className={`flex gap-2`}>
                    {CLIENT_FORM_TRANSLATED.SURNAME.TRANSLATE[currentLanguageApp]}:
                    <input id="surname" type="text" placeholder={CLIENT_FORM_TRANSLATED.SURNAME.TRANSLATE[currentLanguageApp]} />
                </label>
                <label htmlFor="personal code" className={`flex gap-2`}>
                    {CLIENT_FORM_TRANSLATED.PERSONAL_CODE.TRANSLATE[currentLanguageApp]}:
                    <input id="personal code" type="text" placeholder={CLIENT_FORM_TRANSLATED.PERSONAL_CODE.TRANSLATE[currentLanguageApp]} />
                </label>
                <label htmlFor="type expertise" className={`flex gap-2`}>
                    <span>{CLIENT_FORM_TRANSLATED.TYPE_EXPERTISE.TRANSLATE_LABEL[currentLanguageApp]}:</span>
                    {typeExpertise !== 'Another (need to specify)' ? (
                        <select name="" id="type expertise" onChange={(e) => setTypeExpertise(e.target.value)}>
                            {CLIENT_FORM_TRANSLATED.TYPE_EXPERTISE.TRANSLATE_OPINION[currentLanguageApp].map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    ) : <div className={`flex items-center gap-2`}>
                        <input
                            id="type expertise"
                            type="text"
                            placeholder={CLIENT_FORM_TRANSLATED.TYPE_EXPERTISE.PLACEHOLDER_ADDITIONAL[currentLanguageApp]}
                        />
                        <ResetChooseInputType className="w-6 h-6 cursor-pointer" onClick={() => setTypeExpertise('')} />
                    </div>

                    }


                </label>
                <label className="flex gap-2">
                    <span>{CLIENT_FORM_TRANSLATED.STATUS.TRANSLATE_LABEL[currentLanguageApp]}:</span>

                    {statusClient !== 'Another (need to specify)' ? (
                        <select
                            id="status"
                            onChange={(e) => setStatusClient(e.target.value)}
                        >
                            {CLIENT_FORM_TRANSLATED.STATUS.TRANSLATE_OPINION[currentLanguageApp].map(
                                (option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                )
                            )}
                        </select>
                    ) : (
                        <div className="flex items-center gap-2">
                            <input
                                id="status-custom"
                                type="text"
                                placeholder={
                                    CLIENT_FORM_TRANSLATED.STATUS.PLACEHOLDER_ADDITIONAL[currentLanguageApp]
                                }
                            />
                            <ResetChooseInputType
                                className="w-6 h-6 cursor-pointer"
                                onClick={() => setStatusClient('')}
                            />
                        </div>
                    )}
                </label>
                <label htmlFor="customer" className={`flex gap-2`}>
                    {CLIENT_FORM_TRANSLATED.CUSTOMER.TRANSLATE[currentLanguageApp]}:
                    <input id="customer" type="text" placeholder={CLIENT_FORM_TRANSLATED.CUSTOMER.PLACEHOLDER[currentLanguageApp]} />
                </label>
                <div className={`flex gap-4 mt-4 justify-center items-center`}>
                    <button type="submit" className={`${THEME_COLORS[currentThemeApp].button} ${indents.button.padding} rounded-xl flex`}>{CLIENT_FORM_TRANSLATED.SUBMIT_BUTTON.TRANSLATE[currentLanguageApp]}</button>
                    <button
                        type="reset"
                        onClick={handleResetForm}
                        className={`${THEME_COLORS[currentThemeApp].button} ${indents.button.padding} rounded-xl flex`}>
                        {CLIENT_FORM_TRANSLATED.RESET_BUTTON.TRANSLATE[currentLanguageApp]}
                    </button>
                </div>

            </form>
        </div>

    )
}
