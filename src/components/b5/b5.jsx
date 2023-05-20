import React from 'react'
import Header from '../header/header'
import { Outlet } from 'react-router-dom'

export default function B5() {
    return (
        <>
            <Header />
            <Outlet />
            <h2 className='text-center'><a className='text-black-50 text-decoration-none' href="https://react1-nodirbek0105.netlify.app">Creator NNN</a></h2>
        </>
    )
}
