
import { useState } from 'react';
import {Avatar} from '@mui/material'
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const Home = () => {
  return (
    <div>
    <div classname="hover:border-zomp-100">
     <Avatar
  alt="Remy Sharp"
  src="src/assets/PP.jpg"
  sx={{ 
    width: 500, 
    height: 500, 
    margin: "auto", 
    marginTop: 10,
    border: 5, 
    borderColor: "#1B4432",
    '&:hover': {
      borderColor: "#FFF64F"
    }
    }}
/></div>
      <div className="h-screen w-full pt-32 px-4">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        <Disclosure as="div" className="p-6" defaultOpen={true}>
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
              Who am I?
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            My name is Mary, and I am an artist and developer hybrid always looking to create new things!
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="p-6">
          <DisclosureButton className="group flex w-full items-center justify-between">
            <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
              Some cool skills I have
            </span>
            <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
          </DisclosureButton>
          <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
            <span>
              <ul>
                <li>
                  Hello
                </li>
                <li>
                  Hello
                </li>
              </ul>
            </span>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
    </div>
  )
}

export default Home