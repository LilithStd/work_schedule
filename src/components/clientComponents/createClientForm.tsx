'use client'
import * as Select from '@radix-ui/react-select'
import { indents } from "@/consts/globalStyles";
import { CLIENT_DATA_STATUS, CLIENT_FORM_TRANSLATED, THEME_COLORS } from "@/consts/template";
import { useGlobalStore } from "@/store/globalStore";
import { useState } from "react";
import ResetChooseInputType from "../../../public/icons/ArrowPath.svg"
import { Check, ChevronDown } from 'lucide-react';

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
    const [subTypeExpertise, setSubTypeExpertise] = useState('');
    const [statusClient, setStatusClient] = useState('');
    // 
    //functions
    const handleResetForm = () => {
        setTypeExpertise('');
        setStatusClient('');
        setSubTypeExpertise('');
        // reset form fields
    }
    // 


    return (
        <div className={`flex flex-col w-full n`}>
            <h2 className={`text-center`}>createClientForm</h2>
            <form className={`flex flex-col justify-between gap-4 mt-4 w-full`}>
                <label htmlFor="name" className={`flex w-full gap-2 justify-between items-center`}>
                    {CLIENT_FORM_TRANSLATED.NAME.TRANSLATE[currentLanguageApp]}:
                    <input
                        id="name"
                        type="text"
                        className={`rounded-md border px-3 py-2 w-1/2 ${THEME_COLORS[currentThemeApp].container.input}`}
                        placeholder={CLIENT_FORM_TRANSLATED.NAME.TRANSLATE[currentLanguageApp]} />
                </label>
                <label htmlFor="surname" className={`flex w-full items-center justify-between gap-2`}>
                    {CLIENT_FORM_TRANSLATED.SURNAME.TRANSLATE[currentLanguageApp]}:
                    <input
                        id="surname"
                        type="text"
                        className={`rounded-md border px-3 py-2 w-1/2 ${THEME_COLORS[currentThemeApp].container.input}`}
                        placeholder={CLIENT_FORM_TRANSLATED.SURNAME.TRANSLATE[currentLanguageApp]} />
                </label>
                <label htmlFor="personal code" className={`flex w-full items-center justify-between gap-2`}>
                    {CLIENT_FORM_TRANSLATED.PERSONAL_CODE.TRANSLATE[currentLanguageApp]}:
                    <input
                        id="personal code"
                        type="text"
                        placeholder={CLIENT_FORM_TRANSLATED.PERSONAL_CODE.TRANSLATE[currentLanguageApp]}
                        className={`rounded-md border px-3 py-2 w-1/2 ${THEME_COLORS[currentThemeApp].container.input}`} />
                </label>
                <label htmlFor="type expertise" className={`flex w-full justify-between items-center gap-2`}>
                    <span>{CLIENT_FORM_TRANSLATED.TYPE_EXPERTISE.TRANSLATE_LABEL[currentLanguageApp]}:</span>
                    {typeExpertise !== 'Another (need to specify)' ? (
                        <Select.Root
                            value={typeExpertise}
                            onValueChange={setTypeExpertise}
                        >
                            <Select.Trigger
                                className={`flex items-center w-1/2 justify-between gap-2
                                            rounded-md border px-3 py-2
                                            ${THEME_COLORS[currentThemeApp].container.input}
                                            focus:outline-none focus:ring-2 focus:ring-sky-500`}
                            >
                                <Select.Value placeholder="Select type" />
                                <Select.Icon>
                                    <ChevronDown size={16} />
                                </Select.Icon>
                            </Select.Trigger>

                            <Select.Portal>
                                <Select.Content
                                    className={`min-w-[var(--radix-select-trigger-width)] ${THEME_COLORS[currentThemeApp].container.input} z-50 rounded-md border shadow-lg`}
                                    position="popper"
                                >
                                    <Select.Viewport className="p-1 w-full">
                                        {CLIENT_FORM_TRANSLATED.TYPE_EXPERTISE.TRANSLATE_OPINION[
                                            currentLanguageApp
                                        ].map((option) => (
                                            <Select.Item
                                                key={option}
                                                value={option}
                                                className={`
                                                    flex 
                                                    cursor-pointer 
                                                    items-center
                                                    w-full
                                                    justify-between
                                                    rounded px-3 py-2
                                                    ${THEME_COLORS[currentThemeApp].element.selectedOption}
                                                     data-[state=checked]:bg-sky-200`}
                                            >
                                                <Select.ItemText>{option}</Select.ItemText>
                                                <Select.ItemIndicator>
                                                    <Check size={14} />
                                                </Select.ItemIndicator>
                                            </Select.Item>
                                        ))}
                                    </Select.Viewport>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                    ) : <div className={`flex w-1/2 items-center gap-2`}>
                        <input
                            id="type expertise"
                            type="text"
                            placeholder={CLIENT_FORM_TRANSLATED.TYPE_EXPERTISE.PLACEHOLDER_ADDITIONAL[currentLanguageApp]}
                            className={`rounded-md w-full border px-3 py-2 ${THEME_COLORS[currentThemeApp].container.input}`}
                        />
                        <ResetChooseInputType className="w-6 h-6 cursor-pointer" onClick={() => setTypeExpertise('')} />
                    </div>

                    }


                </label>
                <label className="flex w-full items-center justify-between gap-2">
                    <span>
                        {CLIENT_FORM_TRANSLATED.SUBTYPE_EXPERTISE.TRANSLATE_LABEL[currentLanguageApp]}:
                    </span>

                    {subTypeExpertise !== 'Another (need to specify)' ? (
                        <Select.Root
                            value={subTypeExpertise}
                            onValueChange={setSubTypeExpertise}
                        >
                            <Select.Trigger
                                className={`flex items-center w-1/2 justify-between gap-2
                                            rounded-md border px-3 py-2
                                            ${THEME_COLORS[currentThemeApp].container.input}
                                            focus:outline-none focus:ring-2 focus:ring-sky-500`}
                            >
                                <Select.Value placeholder="Select subtype" />
                                <Select.Icon>
                                    <ChevronDown size={16} />
                                </Select.Icon>
                            </Select.Trigger>

                            <Select.Portal>
                                <Select.Content
                                    className={`z-50 rounded-md border min-w-[var(--radix-select-trigger-width)]   shadow-lg ${THEME_COLORS[currentThemeApp].container.input}`}
                                    position="popper"
                                >
                                    <Select.Viewport className="p-1">
                                        {CLIENT_FORM_TRANSLATED.SUBTYPE_EXPERTISE.TRANSLATE_OPINION[
                                            currentLanguageApp
                                        ].map((option) => (
                                            <Select.Item
                                                key={option}
                                                value={option}
                                                className={`"flex cursor-pointer items-center justify-between
                                                rounded px-3 py-2
                                                ${THEME_COLORS[currentThemeApp].container.input}
                                                 focus:bg-sky-100
                                                     data-[state=checked]:bg-sky-200"`}
                                            >
                                                <Select.ItemText>{option}</Select.ItemText>
                                                <Select.ItemIndicator>
                                                    <Check size={14} />
                                                </Select.ItemIndicator>
                                            </Select.Item>
                                        ))}
                                    </Select.Viewport>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                    ) : (
                        <div className="flex items-center w-1/2 gap-2 justify-between">
                            <input
                                type="text"
                                className={`rounded-md w-full border px-3 py-2 ${THEME_COLORS[currentThemeApp].container.input}`}
                                placeholder={
                                    CLIENT_FORM_TRANSLATED.SUBTYPE_EXPERTISE
                                        .PLACEHOLDER_ADDITIONAL[currentLanguageApp]
                                }

                            />
                            <ResetChooseInputType
                                className="w-6 h-6 cursor-pointer"
                                onClick={() => setSubTypeExpertise('')}
                            />
                        </div>
                    )}
                </label>
                <label className="flex w-full gap-2 items-center justify-between">
                    <span>{CLIENT_FORM_TRANSLATED.STATUS.TRANSLATE_LABEL[currentLanguageApp]}:</span>

                    {statusClient !== 'Another (need to specify)' ? (
                        <Select.Root
                            value={statusClient}
                            onValueChange={setStatusClient}>
                            <Select.Trigger
                                className={`flex items-center w-1/2  justify-between gap-2
                                            rounded-md border  px-3 py-2
                                            ${THEME_COLORS[currentThemeApp].container.input}
                                            focus:outline-none focus:ring-2 focus:ring-sky-500`}
                            >
                                <Select.Value placeholder="Select status" />
                                <Select.Icon>
                                    <ChevronDown size={16} />
                                </Select.Icon>
                            </Select.Trigger>

                            <Select.Portal>
                                <Select.Content
                                    className={`${THEME_COLORS[currentThemeApp].container.input} z-50 rounded-md border min-w-[var(--radix-select-trigger-width)]  shadow-lg`}
                                    position="popper"
                                >
                                    <Select.Viewport className="p-1">
                                        {CLIENT_FORM_TRANSLATED.STATUS.TRANSLATE_OPINION[
                                            currentLanguageApp
                                        ].map((option) => (

                                            <Select.Item
                                                key={option}
                                                value={option}
                                                className={`
                                                flex cursor-pointer items-center justify-between
                                                rounded px-3 py-2
                                                ${THEME_COLORS[currentThemeApp].element.selectedOption}
                                                ${THEME_COLORS[currentThemeApp].element.checkedOption}
                                                `}
                                            >
                                                <Select.ItemText>{option}</Select.ItemText>
                                                <Select.ItemIndicator>
                                                    <Check size={14} />
                                                </Select.ItemIndicator>
                                            </Select.Item>
                                        ))}
                                    </Select.Viewport>
                                </Select.Content>
                            </Select.Portal>
                        </Select.Root>
                    ) : (
                        <div className="flex items-center w-1/2 gap-2 justify-between">
                            <input
                                id="status-custom"
                                type="text"
                                className={`rounded-md w-full  border px-3 py-2 ${THEME_COLORS[currentThemeApp].container.input}`}
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

                <label htmlFor="customer" className={`flex w-full items-center justify-between gap-2`}>
                    {CLIENT_FORM_TRANSLATED.CUSTOMER.TRANSLATE[currentLanguageApp]}:
                    <input
                        id="customer"
                        type="text"
                        className={`flex w-1/2 rounded-md border px-3 py-2 ${THEME_COLORS[currentThemeApp].container.input}`}
                        placeholder={CLIENT_FORM_TRANSLATED.CUSTOMER.PLACEHOLDER[currentLanguageApp]} />
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
