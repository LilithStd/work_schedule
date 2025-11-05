interface ButtonProps {
    callBack?: () => void;
    styles?: string;
    children?: React.ReactNode;
}

export default function Button({ styles, children, callBack }: ButtonProps) {
    return (
        <button
            onClick={callBack}
            className={`rounded-xl flex items-center justify-center ${styles}`}>
            {children}
        </button>
    )
}
