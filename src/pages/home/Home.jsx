
import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import AnimatedAvatar from '../../components/AnimatedAvatar/AnimatedAvatar';


const Home = () => {
  return (
    <div>
    <div classname="hover:border-zomp-100">
     <AnimatedAvatar />
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
            My name is Mary, and I am an artist and developer hybrid always looking to make new things!
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
                  Programming Languages/Frameworks:
                  <ul>
                    <li className="items">HTML,CSS & Javascript</li>
                    <li className="items">TypeScript</li>
                    <li className="items">SQL</li>
                    <li className="items">NoSQL</li>
                    <li className="items">Python</li>
                    <li className="items">React</li>
                  </ul>
                </li>
                <br/>
                <li>
                  Technical Skills:
                  <li className="items">Backend Development</li>
                  <li className="items">Frontend Development</li>
                  <li className="items">Database implementation</li>
                  <li className="items">AI Model development/training</li>
                  <li className="items">Object-Oriented Programming</li>
                  <li className="items">Linear Algebra & Computational Mathematics</li>
                  <li className="items">Digital Design</li>
                  <li></li>
                </li>
                <br/>
                <li>
                  Soft Skills:
                </li>
              </ul>
            </span>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
    </div></div>
  )
}

export default Home