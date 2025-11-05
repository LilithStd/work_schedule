interface ButtonProps {
    callBack?: () => void;
    styles?: string;
    elementKey: string;
    children?: React.ReactNode;
}

export default function Button({ styles, elementKey, children, callBack }: ButtonProps) {
    return (
        <button
            onClick={callBack}
            key={elementKey}
            className={`rounded-xl flex items-center justify-center ${styles}`}>
            {children}
        </button>
    )
}
