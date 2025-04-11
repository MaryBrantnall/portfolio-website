
import { useState } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { Link } from "react-router-dom";

const navigation = [
  { name: 'Home', href: 'Home', current: true },
  { name: 'Resume', href: 'Resume', current: false },
  { name: 'Projects', href: 'Projects', current: false },
  { name: 'Contact', href: 'Contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ') 
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="text-eggshell bg-brunswick_green">
      {({ open }) => (
        <>
          <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-eggshell hover:bg-eggshell hover:text-brunswick_green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={`/${item.href}`}
                        className={classNames(
                          item.current ? 'bg-ash_gray-300 text-brunswick_green' : 'text-eggshell hover:bg-ash_gray-300 hover:text-brunswick_green',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img></img>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={`/${item.href}`}
                  className={classNames(
                    item.current ? 'bg-ash_gray-300 text-brunswick_green' : 'text-eggshell hover:bg-ash_gray-300 hover:text-brunswick_green',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel> 
        </>
      )}
    </Disclosure>
  )
}


export default Navbar