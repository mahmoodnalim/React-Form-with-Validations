import React from 'react'
import { BsGithub, BsPersonVcard } from 'react-icons/bs'

export const Navigation = () => {
  return (
    <div className="border-b bg-slate-100">
      <nav className="container flex justify-between items-center">
        <div className="font-semibold">React Forms</div>
        <div className="flex items-center gap-4 text-lg">
        <a href="https://mahmoodnalim.github.io/" target="_blank">
            <BsPersonVcard />
          </a>
          <a href="https://github.com/mahmoodnalim" target="_blank">
            <BsGithub />
          </a>
        </div>
      </nav>
    </div>
  )
}
