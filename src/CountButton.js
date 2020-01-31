import React from 'react'

export const CountButton = (props) => {
    const { title, up } = props
    return (
        <>
            <button onClick={up}>{title}</button>
        </>
    )
}

export const CountButton2 = (props) => {
    return (
        <>
            <button onClick={props.up}>{props.title}</button>
        </>
    )
}

export default CountButton