'use client'
import * as Select from '@radix-ui/react-select'
import { indents } from "@/consts/globalStyles";
import { CLIENT_DATA_STATUS, CLIENT_FORM_TRANSLATED, RegularExpression, THEME_COLORS } from "@/consts/template";
import { useGlobalStore } from "@/store/globalStore";
import { useState } from "react";
import ResetChooseInputType from "../../../public/icons/ArrowPath.svg"
import { Check, ChevronDown } from 'lucide-react';
import { ClientDataType, useClientStore } from '@/store/clientStore';
import { nanoid } from 'nanoid';


// type ClientDataFormType = {
//     name: string;
//     surname: string;
//     personalCode: string;
//     typeEkspertise: string;
//     subTypeExpertise: string;
//     status: string;
//     customer: string;
// };

interface CreateClientFormInterface {
    statusEditType: CLIENT_DATA_STATUS
    callBack: (status: boolean) => void
    clientData: (data: ClientDataType[]) => void
    data: string;
    time?: string;
    clientEditData?: ClientDataType;
}

export default function CreateClientForm({ statusEditType: statusEdit, data, time, callBack, clientData, clientEditData }: CreateClientFormInterface) {

    // consts

    // 
    // stores
    const currentLanguageApp = useGlobalStore((state) => state.currentLanguageApp)
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)
    const addClient = useClientStore((state) => state.addClient)
    const updateClient = useClientStore((state) => state.updateClient)
    // 
    // state
    const [typeExpertise, setTypeExpertise] = useState(statusEdit === CLIENT_DATA_STATUS.EDIT_CURRENT && clientEditData ? clientEditData.typeEkspertise : '');
    const [typeSelectedTime, setTypeSelectedTime] = useState(statusEdit === CLIENT_DATA_STATUS.EDIT_CURRENT && clientEditData ? clientEditData.time : (time ? time : ''));
    const [subTypeExpertise, setSubTypeExpertise] = useState(statusEdit === CLIENT_DATA_STATUS.EDIT_CURRENT && clientEditData ? clientEditData.subTypeEkspertise : '');
    const [statusClient, setStatusClient] = useState(statusEdit === CLIENT_DATA_STATUS.EDIT_CURRENT && clientEditData ? clientEditData.status : '');
    // 
    //functions
    const handleSubmitClientForm = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        const currentFormData = new FormData(e.currentTarget);
        const getValue = (fd: FormData, name: string) =>
            (fd.get(name)?.toString() ?? '');

        const formData: ClientDataType = {
            id: nanoid(),
            data: data,
            name: RegularExpression.NAME.test(getValue(currentFormData, 'name')) ? getValue(currentFormData, 'name') : '',
            surname: RegularExpression.SURNAME.test(getValue(currentFormData, 'surname')) ? getValue(currentFormData, 'surname') : '',
            time: typeSelectedTime,
            personalCode: RegularExpression.PERSONAL_CODE.test(getValue(currentFormData, 'personalCode')) ? getValue(currentFormData, 'personalCode') : '',
            customer: RegularExpression.CUSTOMER.test(getValue(currentFormData, 'customer')) ? getValue(currentFormData, 'customer') : '',
            typeEkspertise: typeExpertise,
            subTypeEkspertise: subTypeExpertise,
            status: statusClient,
        };
        if (statusEdit === CLIENT_DATA_STATUS.EDIT_CURRENT && clientEditData) {
            formData.id = clientEditData.id;
            updateClient(clientEditData.id, formData);
            callBack(false);
            return;
        } else {
            addClient(formData);
        }

        // clientData([formData]);
        callBack(false);
        // handle form submission
    }

    const handleResetForm = () => {
        setTypeExpertise('');
        setStatusClient('');
        setSubTypeExpertise('');
        setTypeSelectedTime('');
        // reset form fields
    }
    // 


    return (
        <div className={`flex flex-col w-full p-4 rounded-xl border ${THEME_COLORS[currentThemeApp].container.sub}`}>
            <h2 className={`text-center`}>createClientForm</h2>
            <form className={`flex flex-col justify-between gap-2 mt-4 w-full`} onSubmit={handleSubmitClientForm}>
                <label htmlFor="name" className={`flex w-full gap-2 justify-between items-center`}>
                    {CLIENT_FORM_TRANSLATED.NAME.TRANSLATE_LABEL[currentLanguageApp]}:
                    <input
                        id="name"
                        type="text"
                        name="name"
                        defaultValue={statusEdit === CLIENT_DATA_STATUS.EDIT_CURRENT && clientEditData ? clientEditData.name : ''}
                        className={`rounded-md border ${THEME_COLORS[currentThemeApp].element.borderColor} px-3 py-2 w-1/2 ${THEME_COLORS[currentThemeApp].container.input}`}
                        placeholder={CLIENT_FORM_TRANSLATED.NAME.TRANSLATE_LABEL[currentLanguageApp]} />
                </label>
                <label htmlFor="surname" className={`flex w-full items-center justify-between gap-2`}>
                    {CLIENT_FORM_TRANSLATED.SURNAME.TRANSLATE_LABEL[currentLanguageApp]}:
                    <input
                        id="surname"
                        type="text"
                        name="surname"
                        defaultValue={statusEdit === CLIENT_DATA_STATUS.EDIT_CURRENT && clientEditData ? clientEditData.surname : ''}
                        className={`rounded-md border ${THEME_COLORS[currentThemeApp].element.borderColor} px-3 py-2 w-1/2 ${THEME_COLORS[currentThemeApp].container.input}`}
                        placeholder={CLIENT_FORM_TRANSLATED.SURNAME.TRANSLATE_LABEL[currentLanguageApp]} />
                </label>
                <label htmlFor="personal_code" className={`flex w-full items-center justify-between gap-2`}>
                    {CLIENT_FORM_TRANSLATED.PERSONAL_CODE.TRANSLATE_LABEL[currentLanguageApp]}:
                    <input
                        id="personal_code"
                        type="text"
                        name="personalCode"
                        defaultValue={statusEdit === CLIENT_DATA_STATUS.EDIT_CURRENT && clientEditData ? clientEditData.personalCode : ''}
                        // placeholder={CLIENT_FORM_TRANSLATED.PERSONAL_CODE.TRANSLATE_LABEL[currentLanguageApp]}
                        placeholder={CLIENT_FORM_TRANSLATED.PERSONAL_CODE.PLACEHOLDER_ADDITIONAL}
                        className={`rounded-md border ${THEME_COLORS[currentThemeApp].element.borderColor} px-3 py-2 w-1/2 ${THEME_COLORS[currentThemeApp].container.input}`} />
                </label>
                <label htmlFor="customer" className={`flex w-full items-center justify-between gap-2`}>
                    {CLIENT_FORM_TRANSLATED.CUSTOMER.TRANSLATE_LABEL[currentLanguageApp]}:
                    <input
                        id="customer"
                        type="text"
                        name="customer"
                        className={`flex w-1/2 rounded-md border ${THEME_COLORS[currentThemeApp].element.borderColor} px-3 py-2 ${THEME_COLORS[currentThemeApp].container.input}`}
                        placeholder={CLIENT_FORM_TRANSLATED.CUSTOMER.PLACEHOLDER[currentLanguageApp]}
                        defaultValue={statusEdit === CLIENT_DATA_STATUS.EDIT_CURRENT && clientEditData ? clientEditData.customer : ''} />
                </label>
                <label htmlFor="time" className={`flex w-full items-center justify-between gap-2`}>
                    {CLIENT_FORM_TRANSLATED.TIME.TRANSLATE_LABEL[currentLanguageApp]}:
                    {typeSelectedTime !== 'Another (need to specify)' ? (
                        <Select.Root
                            value={typeSelectedTime}
                            onValueChange={(value) => setTypeSelectedTime(value)}
                        >
                            <Select.Trigger
                                className={`
                                            flex items-center w-1/2 justify-between gap-2
                                            rounded-md border ${THEME_COLORS[currentThemeApp].element.borderColor} px-3 py-2
                                            ${THEME_COLORS[currentThemeApp].container.input}
                                            focus:outline-none focus:ring-2 focus:ring-amber-600`}
                            >
                                <Select.Value placeholder="Select time" />
                                <Select.Icon>
                                    <ChevronDown size={16} />
                                </Select.Icon>
                            </Select.Trigger>

                            <Select.Portal>
                                <Select.Content
                                    className={`min-w-[var(--radix-select-trigger-width)] ${THEME_COLORS[currentThemeApp].container.input} ${THEME_COLORS[currentThemeApp].element.borderColor} z-50 rounded-md border shadow-lg`}
                                    position="popper"
                                >
                                    <Select.Viewport className="p-1 w-full">
                                        {CLIENT_FORM_TRANSLATED.TIME.TRANSLATE_OPINION[
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
                                                     data-[state=checked]:bg-amber-600`}
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
                        <div className={`flex w-1/2 items-center gap-2`}>
                            <input
                                id="time"
                                type="text"
                                name="time"
                                placeholder={CLIENT_FORM_TRANSLATED.TIME.PLACEHOLDER[currentLanguageApp]}
                                className={`rounded-md ${THEME_COLORS[currentThemeApp].element.borderColor} border px-3 py-2 w-full ${THEME_COLORS[currentThemeApp].container.input}`}
                            />
                            <ResetChooseInputType
                                className="w-6 h-6 cursor-pointer"
                                onClick={() => setTypeSelectedTime('')}
                            />
                        </div>
                    )}
                </label>
                <label htmlFor="type expertise" className={`flex w-full justify-between items-center gap-2`}>
                    <span>{CLIENT_FORM_TRANSLATED.TYPE_EXPERTISE.TRANSLATE_LABEL[currentLanguageApp]}:</span>
                    {typeExpertise !== 'Another (need to specify)' ? (
                        <Select.Root
                            value={typeExpertise}
                            onValueChange={setTypeExpertise}
                        >
                            <Select.Trigger
                                className={`
                                            flex items-center w-1/2 justify-between gap-2
                                            rounded-md border ${THEME_COLORS[currentThemeApp].element.borderColor} px-3 py-2
                                            ${THEME_COLORS[currentThemeApp].container.input}
                                            focus:outline-none focus:ring-2 focus:ring-amber-600`}
                            >
                                <Select.Value placeholder="Select type" />
                                <Select.Icon>
                                    <ChevronDown size={16} />
                                </Select.Icon>
                            </Select.Trigger>

                            <Select.Portal>
                                <Select.Content
                                    className={`min-w-[var(--radix-select-trigger-width)] ${THEME_COLORS[currentThemeApp].container.input} ${THEME_COLORS[currentThemeApp].element.borderColor} z-50 rounded-md border shadow-lg`}
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
                                                    ${THEME_COLORS[currentThemeApp].element.borderColor}
                                                    focus:ring-amber-600
                                                     data-[state=checked]:bg-amber-600`}
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
                            id="type_expertise"
                            name="type_expertise"
                            type="text"
                            onChange={(e) => setTypeExpertise(e.target.value)}
                            placeholder={CLIENT_FORM_TRANSLATED.TYPE_EXPERTISE.PLACEHOLDER_ADDITIONAL[currentLanguageApp]}
                            className={`rounded-md w-full ${THEME_COLORS[currentThemeApp].element.borderColor} border px-3 py-2 ${THEME_COLORS[currentThemeApp].container.input}`}
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
                                className={`
                                    flex items-center w-1/2 justify-between gap-2
                                            rounded-md border ${THEME_COLORS[currentThemeApp].element.borderColor} px-3 py-2
                                            ${THEME_COLORS[currentThemeApp].container.input}
                                            focus:outline-none focus:ring-2 focus:ring-amber-600`}
                                name="subtype_expertise"
                            >
                                <Select.Value placeholder="Select subtype" />
                                <Select.Icon>
                                    <ChevronDown size={16} />
                                </Select.Icon>
                            </Select.Trigger>

                            <Select.Portal>
                                <Select.Content
                                    className={`z-50 rounded-md border min-w-[var(--radix-select-trigger-width)] ${THEME_COLORS[currentThemeApp].element.borderColor}   shadow-lg ${THEME_COLORS[currentThemeApp].container.input}`}
                                    position="popper"
                                >
                                    <Select.Viewport className="p-1">
                                        {CLIENT_FORM_TRANSLATED.SUBTYPE_EXPERTISE.TRANSLATE_OPINION[
                                            currentLanguageApp
                                        ].map((option) => (
                                            <Select.Item
                                                key={option}
                                                value={option}
                                                className={`flex cursor-pointer items-center justify-between
                                                rounded px-3 py-2
                                                ${THEME_COLORS[currentThemeApp].container.input}
                                                ${THEME_COLORS[currentThemeApp].element.selectedOption}
                                                ${THEME_COLORS[currentThemeApp].element.checkedOption}`}
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
                                id="subType_expertise"
                                onChange={(e) => setSubTypeExpertise(e.target.value)}
                                className={`rounded-md ${THEME_COLORS[currentThemeApp].element.borderColor} w-full border px-3 py-2 ${THEME_COLORS[currentThemeApp].container.input}`}
                                defaultValue={statusEdit === CLIENT_DATA_STATUS.EDIT_CURRENT && clientEditData ? clientEditData.subTypeEkspertise : ''}
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
                                            ${THEME_COLORS[currentThemeApp].element.borderColor}
                                            ${THEME_COLORS[currentThemeApp].container.input}
                                            focus:outline-none focus:ring-2 focus:ring-amber-600`}
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
                                id="status"
                                type="text"
                                onChange={(e) => setStatusClient(e.target.value)}
                                defaultValue={statusEdit === CLIENT_DATA_STATUS.EDIT_CURRENT && clientEditData ? clientEditData.status : ''}
                                className={`rounded-md w-full  border px-3 py-2 ${THEME_COLORS[currentThemeApp].container.input}`}
                                placeholder={
                                    CLIENT_FORM_TRANSLATED.STATUS.PLACEHOLDER_ADDITIONAL[currentLanguageApp]
                                }
                                name="status"
                            />
                            <ResetChooseInputType
                                className="w-6 h-6 cursor-pointer"
                                onClick={() => setStatusClient('')}
                            />
                        </div>
                    )}
                </label>


                <div className={`flex gap-4 mt-4 justify-center items-center`}>
                    <button
                        type="submit"
                        className={`${THEME_COLORS[currentThemeApp].button} ${indents.button.padding} rounded-xl flex`}

                    >
                        {CLIENT_FORM_TRANSLATED.SUBMIT_BUTTON.TRANSLATE[currentLanguageApp]}
                    </button>
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
