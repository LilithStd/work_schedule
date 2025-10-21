import CrossCLoseIcons from "../../public/icons/cross.svg"

interface ModalWindowProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export default function ModalWindow({ isOpen, onClose, children }: ModalWindowProps) {
    if (!isOpen) return null;

    return (
        <div
            className="absolute"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl top-0 p-6 shadow-lg max-w-sm w-full flex
                flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <CrossCLoseIcons className="flex ml-auto hover:bg-amber-900" onClick={onClose} />
                {children}

            </div>
        </div>
    );
}
