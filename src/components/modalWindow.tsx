interface ModalWindowProps {
    textContent: string
}

export default function ModalWindow({ textContent }: ModalWindowProps) {
    return (
        <div>
            <p>{textContent}</p>
        </div>
    )
}
