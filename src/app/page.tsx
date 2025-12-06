import LanguageSwitcher from '@/components/languageSwitcher'
import ThemeSwitcher from '@/components/themeSwitcher'
import React from 'react'

export default function StartPage() {
    return (
        <div className={`flex flex-col  min-h-screen m-4 p-4`}>
            <div className={`flex justify-between bg-sky-600  rounded-xl m-2 p-2 w-full`}>
                <div className="flex justify-end">
                    <ThemeSwitcher />
                    <LanguageSwitcher />
                </div>
            </div>
            <div className={`flex flex-col justify-center items-center flex-1`}>
                <h2>Start Page</h2>
                <p>Choose Path</p>
            </div>

        </div>
    )
}
