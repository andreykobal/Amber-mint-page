import React, { useState } from "react"
import settings from "../../../config/settings.json"
import { signIn, wallet } from "../../near"
import LoginButton from "../pieces/LoginButton"
import useLocales from "../../hooks/useLocales"
import Image from "../image"
import { Ul, Li } from "../pieces/List"
function signOut() {
  wallet.signOut()
  window.location.replace(window.location.origin + window.location.pathname)
}

export default function Navbar() {
  const { locale } = useLocales()
  const currentUser = wallet.getAccountId()
  if (!locale) return null

  return (
    <nav className="navbar py-8 px-10 text-white absolute z-10">
      <div className="lg:hidden flex-none">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#" className="text-black text-xs gap-[0.4rem]">
                <span>{locale.whitepaper}</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs gap-[0.4rem]">
                <span>{locale.tokenomics}</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-black text-xs gap-[0.4rem]">
                {!currentUser ? (
                  <LoginButton>{locale.connectWallet}</LoginButton>
                ) : (
                  <Image
                    src={settings.userIcon}
                    alt="user"
                    className="w-[16px] h-[16px]"
                  />
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 ml-[1rem] sm:ml-[3rem] lg:ml-[12rem]">
        <a className="w-[153px]" href="#">
          <Image src={settings.logo} alt="logo" />
        </a>
      </div>
      <div className="hidden lg:block flex-none">
        <Ul className="flex p-0">
          <Li>
            <a href="#">
              <span>{locale.whitepaper}</span>
            </a>
          </Li>
          <Li>
            <a href="#">
              <span>{locale.tokenomics}</span>
            </a>
          </Li>
          <Li>
            {!currentUser ? (
              <LoginButton>{locale.connectWallet}</LoginButton>
            ) : (
              <Image
                src={settings.userIcon}
                alt="user"
                className="w-[16px] h-[16px]"
              />
            )}
          </Li>
        </Ul>
      </div>
    </nav>
  )
}
