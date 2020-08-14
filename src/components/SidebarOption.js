import React from 'react'

const SidebarOption = ({Icon,title}) => {
    return (
        <div className="sidebarOption">
        {Icon&&<Icon className="sidebarOption_Icon"/>}
        {Icon?(<h4>{title}</h4>):(<p>{title}</p>
        )}
        </div>
    )
}

export default SidebarOption
