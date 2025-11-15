import { useFloating, offset, flip, shift, autoUpdate } from "@floating-ui/react";
import CrossCLoseIcons from "../../public/icons/cross.svg";
import { useEffect } from "react";

interface ModalWindowProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    anchorRef?: React.RefObject<HTMLElement | null>; // 👈 кнопка-триггер
}

export default function ModalWindow({ isOpen, onClose, children, anchorRef }: ModalWindowProps) {
    // Чтобы popup был привязан к anchorRef:
    const { refs, floatingStyles, update } = useFloating({
        placement: "bottom-start",
        middleware: [
            offset(8),   // расстояние между кнопкой и попапом
            flip(),      // если нет места снизу — покажет сверху
            shift({ padding: 8 }) // не даст вылезти за границы экрана
        ],
    });

    // Когда попап открыт — следим за scroll/resize
    useEffect(() => {
        if (!isOpen || !anchorRef?.current) return;

        refs.setReference(anchorRef.current);

        return autoUpdate(anchorRef.current, refs.floating.current!, update);
    }, [isOpen, anchorRef, refs, update]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[999] bg-black/20"
            onClick={onClose}
        >
            <div
                ref={refs.setFloating}
                style={floatingStyles}
                className="bg-white rounded-2xl p-6 shadow-lg max-w-sm w-full flex flex-col text-black"
                onClick={(e) => e.stopPropagation()}
            >
                <CrossCLoseIcons
                    className="flex ml-auto hover:bg-amber-900 cursor-pointer"
                    onClick={onClose}
                />

                {children}
            </div>
        </div>
    );
}

