'use client'
import { LANGUAGE, LANGUAGE_APP } from '@/consts/template'
import { useGlobalStore } from '@/store/globalStore'
import React from 'react'

export default function LanguageSwitcher() {
    const setCurrentLanguage = useGlobalStore((state) => state.setCurrentLanguageApp)
    return (
        <div>
            {LANGUAGE_APP.map((item) => <p key={item}>{item}</p>)}
        </div>
    )
}
