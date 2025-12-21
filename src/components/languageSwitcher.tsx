'use client'
import { LANGUAGE_APP, THEME_COLORS } from '@/consts/template'
import { useGlobalStore } from '@/store/globalStore'

export default function LanguageSwitcher() {
    const setCurrentLanguage = useGlobalStore((state) => state.setCurrentLanguageApp)
    const currentLanguageApp = useGlobalStore((state) => state.currentLanguageApp)
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)

    return (
        <div className={`${THEME_COLORS[currentThemeApp].container.list} w-fit flex gap-2 justify-center m-1 p-2 rounded-xl self-end`}>
            {LANGUAGE_APP.map((item) =>
                <button
                    key={item}
                    onClick={() => setCurrentLanguage(item)}
                    className={`${currentLanguageApp === item ? THEME_COLORS[currentThemeApp].element.active : ''} p-1 rounded-xl`}>{item}
                </button>)}
        </div>
    )
}
