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
        <header className={`flex`}>
            <div className={`flex w-full rounded-xl bg-sky-600 ${indents.mainContainer.margin} justify-between `}>
                <Link href={APP_ROUTES_LABEL.MAIN.PATH} className={`"flex ${indents.subContainer.margin} ${indents.subContainer.padding} bg-amber-700 items-center justify-center rounded-xl "`}>{APP_ROUTES_LABEL.MAIN.LABEL[currentLanguageApp]}</Link>
                <div className="flex justify-end items-center  gap-2">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                </div>

            </div>

        </header>
    )
}
