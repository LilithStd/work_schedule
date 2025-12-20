'use client'
import { APP_ROUTES } from '@/consts/globalConsts'
import { indents } from '@/consts/globalStyles'
import { THEME_COLORS } from '@/consts/template'
import { useGlobalStore } from '@/store/globalStore'
import Link from "next/link";

export default function StartPage() {
    //stores
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)
    //

    // const handleRouter = (router: string) => {

    //  }

    return (
        <main className={`flex flex-col   min-h-screen`}>

            <div className={`flex flex-col rounded-xl ${THEME_COLORS[currentThemeApp].container.sub}  
        ${indents.mainContainer.margin} ${indents.mainContainer.padding}`}>
                <div className={`flex flex-col justify-center items-center`}>
                    <h2>Start Page</h2>
                    <p>Choose Path</p>

                </div>
                <div className={`flex justify-center items-center`}>
                    <button

                        className={`w-2xs rounded-xl min-h-10  ${indents.container.margin} ${indents.container.padding} text-center ${THEME_COLORS[currentThemeApp].button}`}>
                        <Link href={APP_ROUTES.SCHEDULE}>Schedule</Link>

                    </button>
                    <button
                        className={`w-2xs rounded-xl min-h-10  ${indents.container.margin} ${indents.container.padding} text-center ${THEME_COLORS[currentThemeApp].button}`}>
                        <Link href={APP_ROUTES.CLIENTS}>Clients</Link>

                    </button>
                </div>
            </div>

        </main>
    )
}
