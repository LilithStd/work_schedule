'use client'
interface CreateClientFormInterface {
    statusEdit: boolean;
    data: string;
}

export default function CreateClientForm({ statusEdit, data }: CreateClientFormInterface) {
    return (
        <div>
            <h2>createClientForm</h2>
            <form>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </form>
        </div>

    )
}
