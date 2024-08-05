import React from "react";
import Styles from './navbar.module.css'



export default function Li({children, color}:{children:React.ReactNode, color?:string} ) {
  return (
    <div className={`${Styles.mainContainer} py-2 overflow-hidden ${!color ?'text-[#194186]' : 'text-secondary' } `}>
      {<li className="font-popins font-[500]">
        {children}
      </li>}
      </div>
  )
}
