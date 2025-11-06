'use client'
import { LANGUAGE_APP } from '@/consts/template'
import { useGlobalStore } from '@/store/globalStore'

export default function LanguageSwitcher() {
    const setCurrentLanguage = useGlobalStore((state) => state.setCurrentLanguageApp)
    const currentLanguageApp = useGlobalStore((state) => state.currentLanguageApp)

    return (
        <div className="bg-sky-500 w-fit flex gap-2 justify-center m-1 p-2 rounded-xl self-end">
            {LANGUAGE_APP.map((item) =>
                <button
                    key={item}
                    onClick={() => setCurrentLanguage(item)}
                    className={`${currentLanguageApp === item ? 'bg-sky-900' : ''} p-1 rounded-xl`}>{item}
                </button>)}
        </div>
    )
}
