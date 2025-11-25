import React from 'react'

interface ClientProps {
    name?: string;
}

export default function Client({ name }: ClientProps) {
    return (
        <div>
            <p className=''>
                {name ? name : 'client'}
            </p>
        </div>
    )
}
