import { useState } from "react"

type ListProps = {
    items: string[]| number[]
    onClick: (value: string | number) => void
}
export const List = ({ items, onClick }: ListProps) => {
    const [user, setUser] = useState({name: 'akram', city: 'pali'})
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}