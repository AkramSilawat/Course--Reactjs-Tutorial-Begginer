type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type Zero = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RendomNumberProps = PositiveNumber | NegativeNumber | Zero



export const RendomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero,
}: RendomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'nagative'} {' '}
            {isZero && 'zero'}
        </div>
    )
}