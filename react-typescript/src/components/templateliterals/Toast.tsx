/**
Position props can be one of
"left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
"center-bottam" | "righr-center" | "right-top" | "right-bottom"
*/

type HorizontalPosition = "left" | "center" | "rioght"
type VerticalPosition = "top" | "center" | "bottom"

type ToastProps = {
    position: 
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`,'center-center'>
    | 'center'
}

export const Toast = ({ position }: ToastProps) => {
    return <div>Toast Notification Position - {position}</div>
}