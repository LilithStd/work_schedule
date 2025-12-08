'use client'
import { useGlobalStore } from "@/store/globalStore";
import LanguageSwitcher from "./languageSwitcher";
import ThemeSwitcher from "./themeSwitcher";
import { APP_ROUTES_LABEL } from "@/consts/template";
import Link from "next/link";
import { indents } from "@/consts/globalStyles";



export default function Header() {
    //store
    const currentLanguageApp = useGlobalStore((state) => state.currentLanguageApp)
    //
    return (
        <header className={`p-8 pb-0`}>
            <div className="flex bg-sky-600 rounded-xl">
                <button className={`flex justify-between bg-sky-600  rounded-xl ${indents.subContainer.margin} ${indents.subContainer.padding}`}>
                    <Link href={APP_ROUTES_LABEL.MAIN.PATH} className="flex items-center justify-center rounded-xl bg-sky-500 p-2 w-60 text-center">{APP_ROUTES_LABEL.MAIN.LABEL[currentLanguageApp]}</Link>
                </button>
                <div className="flex justify-end w-full gap-2">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    )
}
