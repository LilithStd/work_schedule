import { THEME_COLORS, CLIENT_FORM_TRANSLATED } from "@/consts/template";
import { ClientDataType } from "@/store/clientStore";
import { useGlobalStore } from "@/store/globalStore";


interface ClientDataContainerProps {
    time: string;
    clientData: ClientDataType[];
    editCallBack?: (client: ClientDataType) => void;
}

export default function ClientDataContainer({ clientData, time, editCallBack }: ClientDataContainerProps) {
    const currentLanguageApp = useGlobalStore((state) => state.currentLanguageApp);
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp);

    return (
        <div className={`flex flex-col w-full `}>
            {clientData.map((client) => (
                <div key={client.id} className={`flex flex-col  gap-2 p-2 rounded-xl border ${THEME_COLORS[currentThemeApp].element.listItem}`}>
                    <div className={`flex w-full justify-between gap-4`}>
                        <div className={`flex flex-col w-1/2`}>
                            <div className={`flex flex-col xl:flex-row  justify-center items-center xl:justify-between`}>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{CLIENT_FORM_TRANSLATED.NAME.TRANSLATE_LABEL[currentLanguageApp]}:</h3>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{client.name.length <= 0 ? <p className={`opacity-20`}>empty</p> : client.name}</h3>
                            </div>

                            <div className={`flex flex-col xl:flex-row  justify-center items-center xl:justify-between`}>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{CLIENT_FORM_TRANSLATED.SURNAME.TRANSLATE_LABEL[currentLanguageApp]}:</h3>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{client.surname.length <= 0 ? <p className={`opacity-20`}>empty</p> : client.surname}</h3>
                            </div>
                            <div className={`flex flex-col xl:flex-row  justify-center items-center xl:justify-between`}>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{CLIENT_FORM_TRANSLATED.PERSONAL_CODE.TRANSLATE_LABEL[currentLanguageApp]}:</h3>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{client.personalCode.length <= 0 ? <p className={`opacity-20`}>empty</p> : client.personalCode}</h3>
                            </div>
                            <div className={`flex flex-col xl:flex-row  justify-center items-center xl:justify-between`}>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{CLIENT_FORM_TRANSLATED.CUSTOMER.TRANSLATE_LABEL[currentLanguageApp]}:</h3>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`} >{client.customer.length <= 0 ? <p className={`opacity-20`}>empty</p> : client.customer}</h3>
                            </div>
                        </div>
                        <div className={`border-1 rounded-xl border-white-300`}></div>
                        <div className={`flex flex-col  w-1/2`}>
                            <div className={`flex flex-col xl:flex-row  justify-center items-center xl:justify-between`}>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{CLIENT_FORM_TRANSLATED.TIME.TRANSLATE_LABEL[currentLanguageApp]}:</h3>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{client.time.length <= 0 ? <p className={`opacity-20`}>empty</p> : client.time}</h3>
                            </div>
                            <div className={`flex flex-col xl:flex-row  justify-center items-center xl:justify-between`}>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{CLIENT_FORM_TRANSLATED.TYPE_EXPERTISE.TRANSLATE_LABEL[currentLanguageApp]}:</h3>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{client.typeEkspertise.length <= 0 ? <p className={`opacity-20`}>empty</p> : client.typeEkspertise}</h3>
                            </div>
                            <div className={`flex flex-col xl:flex-row  justify-center items-center xl:justify-between`}>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{CLIENT_FORM_TRANSLATED.SUBTYPE_EXPERTISE.TRANSLATE_LABEL[currentLanguageApp]}:</h3>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{client.subTypeEkspertise.length <= 0 ? <p className={`opacity-20`}>empty</p> : client.subTypeEkspertise}</h3>
                            </div>
                            <div className={`flex flex-col xl:flex-row  justify-center items-center xl:justify-between`}>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{CLIENT_FORM_TRANSLATED.STATUS.TRANSLATE_LABEL[currentLanguageApp]}:</h3>
                                <h3 className={`w-full text-center xl:text-left xl:w-1/2`}>{client.status.length <= 0 ? <p className={`opacity-20`}>empty</p> : client.status}</h3>
                            </div>
                        </div>

                    </div>


                    <button className={`${THEME_COLORS[currentThemeApp].button} flex rounded-xl m-auto items-center justify-center h-10 w-1/3 `} onClick={() => editCallBack && editCallBack(client)}>Edit</button>
                </div>
            ))}

        </div>
    )
}
