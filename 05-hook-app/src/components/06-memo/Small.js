import React,{memo}from 'react'

export const Small = memo( ({value}) => {

    console.log("se renderizo el componente :'C ")
    return (
        <small>
            {value}
        </small>
    )
})
