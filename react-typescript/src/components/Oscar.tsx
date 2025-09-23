type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return <div style={{
        border: "1px solid gray",
        width: "50%",
        padding: 30,
        margin: "0 auto"
    }}>{props.children}</div>
}