import Logo from '../../assets/logo.svg'
import IconLocation from '../../assets/iconLocation.svg'
import './nav.css'
import { useState } from 'react';

export default function Nav() {

    function sectionActive(evt) {
        var i, tablinks;
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        evt.currentTarget.className += " active";
    }

    function showMenuPhone(e) {
        let icon = e.currentTarget.id

        if (icon === 'iconOpen') {
            e.currentTarget.className += " hidden"
            document.getElementById('iconClose').classList.remove('hidden')
            document.getElementById('menuPhone').classList.remove('hidden')
            document.getElementById('backgroundMenuPhone').classList.remove('hidden')
        } else {
            e.currentTarget.className += " hidden"
            document.getElementById('iconOpen').classList.remove('hidden')
            document.getElementById('menuPhone').classList.add('hidden')
            document.getElementById('backgroundMenuPhone').classList.add('hidden')
        }
    }

    return (
        <>
            <div className="flex items-center h-24 px-6">
                <div className="flex-none border-1 h-full flex justify-center items-center">
                    <img src={Logo} alt='logo' className='w-12 mr-6' />
                </div>
                <div className='flex h-full grow max-md:hidden'>
                    <div className="tab h-full flex font-bold">
                        <button className='tablinks hover:text-primaryFirst' onClick={(e) => sectionActive(e)}>MENU</button>
                        <button className='tablinks ml-6 hover:text-primaryFirst active' onClick={(e) => sectionActive(e,)}>REWARDS</button>
                        <button className='tablinks ml-6 hover:text-primaryFirst' onClick={(e) => sectionActive(e)}>GIFT CARDS</button>
                    </div>
                    <div className='flex text-sm ml-auto'>
                        <div className="flex h-full items-center pr-2 mr-10 font-bold hover:text-primaryFirst cursor-pointer"><img src={IconLocation} alt='logo' className='h-5 w-5 mr-2' />Find a store</div>
                        <div className="flex h-full items-center">
                            <button className='border border-secondaryText font-semibold rounded-full px-4 py-2 mr-4 font-mono hover:bg-secondarySecond'>Sign in</button>
                            <button className='border border-secondaryText font-semibold rounded-full px-4 py-2 font-mono bg-secondaryText text-white hover:bg-hoverButtonDark'>Join now</button>
                        </div>
                    </div>
                </div>
                <div className='absolute right-0 w-11 mx-6 hidden max-md:block'>
                    <button id='iconOpen' className='w-11 h-11' onClick={(e) => showMenuPhone(e)}>
                        <svg id='iconOpen' aria-hidden="true" className="valign-middle absoluteCenter" viewBox="0 0 24 24"
                            style={{ width: '44px', height: '24px' }}>
                            <path className="sb-hamburgerButton-middleLine-CLOSED sb-hamburgerButton-animation"
                                d="M21 12.9H3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h18c.5 0 .9.4.9.9s-.4.9-.9.9z" />
                            <path
                                className="sb-hamburgerButton-topLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines"
                                d="M21 6.9H3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h18c.5 0 .9.4.9.9s-.4.9-.9.9z" />
                            <path
                                className="sb-hamburgerButton-bottomLine-CLOSED sb-hamburgerButton-animation sb-hamburgerButton-animation-outer-lines"
                                d="M21 18.9H3c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h18c.5 0 .9.4.9.9s-.4.9-.9.9z" />
                            <circle className="sb-icon-hover" cx="50%" cy="50%" fill="transparent" r="75%" />
                        </svg>
                    </button>
                    <button id='iconClose' className='w-11 h-11 hidden' onClick={(e) => showMenuPhone(e)}>
                        <svg viewBox="0 0 24 24" style={{ width: '44px', height: '24px' }}>
                            <path d="M4.227 4.227a.774.774 0 0 1 1.095 0L12 10.905l6.678-6.678a.774.774 0 1 1 1.095 1.095L13.095 12l6.678 6.678a.774.774 0 1 1-1.095 1.095L12 13.095l-6.678 6.678a.774.774 0 1 1-1.095-1.095L10.905 12 4.227 5.322a.774.774 0 0 1 0-1.095Z" fill="#030D45" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id='backgroundMenuPhone' className='fixed h-screen w-screen bg-backgroungOpacity top-20 z-10 md:hidden hidden' />
            <div id='menuPhone' className='fixed h-screen w-screen bg-white top-20 z-10 w-4/5 right-0 md:hidden hidden pt-8'>
                <div>
                    <ul>
                        <li>
                            <button className='px-8 py-4 flex justify-between w-full text-lg font-semibold'>
                                <span>Menu</span>
                                <svg width="24px" height="24px" viewBox="0 0 24 24">
                                    <path d="M9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303C9.17678 18.2374 9.17678 17.7626 9.46967 17.4697L14.9393 12L9.46967 6.53033C9.17678 6.23744 9.17678 5.76256 9.46967 5.46967Z" fill="#030D45" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button className='px-8 py-4 text-left w-full text-lg font-semibold'>
                                <span>Rewards</span>
                            </button>
                        </li>
                        <li>
                            <button className='px-8 py-4 text-left w-full text-lg font-semibold'>
                                <span>Gift Cards</span>
                            </button>
                        </li>
                    </ul>
                    <hr className='h-0 mx-8 mt-4 mb-8 border-t-2 border-backgroungOpacity'></hr>
                    <div className='text-sm mx-6'>
                        <div className="flex h-full items-center">
                            <button className='border border-secondaryText font-semibold rounded-full px-4 py-2 mr-4 font-mono hover:bg-secondarySecond'>Sign in</button>
                            <button className='border border-secondaryText font-semibold rounded-full px-4 py-2 font-mono bg-secondaryText text-white hover:bg-hoverButtonDark'>Join now</button>
                        </div>
                        <div className="flex h-full items-center pr-2 mt-4 font-bold hover:text-primaryFirst cursor-pointer"><img src={IconLocation} alt='logo' className='h-5 w-5 mr-2' />Find a store</div>
                    </div>
                </div>
            </div>
        </>
    )
}