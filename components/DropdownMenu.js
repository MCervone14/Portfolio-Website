import { Menu, Transition } from "@headlessui/react";
import { Menu as MenuIcon } from "lucide-react";
import { Fragment } from "react";
import Link from "next/link";

function DropdownMenu({ links }) {
  return (
    <Menu>
      <Menu.Button
        aria-label="menu options"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <MenuIcon className="w-12 h-12" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md
          bg-secondary text-slate-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
        >
          {links.map((link) => (
            <Menu.Item key={link.href} as={Fragment}>
              {({ close }) => (
                <div className={`hover:bg-accent hover:text-secondary p-2`}>
                  <Link href={link.href} onClick={close}>
                    {link.label}
                  </Link>
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropdownMenu;
