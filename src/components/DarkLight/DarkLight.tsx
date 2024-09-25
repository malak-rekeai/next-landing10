"use client";
import React, { useContext } from 'react'
import Style from './dl.module.css'
import { ThemeContext } from '../../../context/ThemeContext'

export const DarkLight = () => {
    const {toggleTheme , theme} = useContext(ThemeContext)
  return (
    <div className={Style.container} onClick={toggleTheme}>
        <div className={Style.icon}>🔅</div>
        <div className={Style.icon}>🌙</div>
        <div className={Style.ball} style={theme == 'light'? {left : "2px"} : {right : "2px"}} />

    </div>
  )
}
