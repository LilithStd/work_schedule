'use client';
import { THEME_COLORS } from '@/consts/template';
import { useGlobalStore } from '@/store/globalStore';

export function Providers({ children }: { children: React.ReactNode }) {
    const currentThemeApp = useGlobalStore((state) => state.currentThemeApp)

    return (
        <main className={`${THEME_COLORS[currentThemeApp].background} ${THEME_COLORS[currentThemeApp].textColor}`}>
            {children}
        </main>
    );
}