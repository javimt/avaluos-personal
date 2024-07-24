import React from "react";
import Styles from './navbar.module.css'



export default function Li({children}:{children:React.ReactNode} ) {
  return (
    <div className={`${Styles.mainContainer} py-2 overflow-hidden text-[#194186] `}>{children}</div>
  )
}
