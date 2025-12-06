'use client'
import TableCell from "@/components/tableCell";
import { THEME_COLORS } from "@/consts/template";
import { useGlobalStore } from "@/store/globalStore";


export default function Main() {
  const currentThemeApp = useGlobalStore((state) => state.currentThemeApp);
  return (
    <main className={`flex flex-col min-h-screen ${THEME_COLORS[currentThemeApp].background} ${THEME_COLORS[currentThemeApp].textColor}`} >
      <TableCell />
    </main>
  )
}
