import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa6'
// import {
//   ArchiveBoxXMarkIcon,
//   ChevronDownIcon,
//   PencilIcon,
//   Square2StackIcon,
//   TrashIcon,
// } from '@heroicons/react/16/solid'

export default function DropdownHeadless() {
  return (
    <div className="fisxed top-2s4 w-52 text-right">
      <Menu __demoMode>
        <MenuButton className="flex-start items-center border-none justify-start gap-2 text-blue-500 hover:text-blue-600">
          <p className="font-semibold text-sm">MENU</p>

          <FaChevronDown className="size-4 text-blue-500 hover:text-blue-600" />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 rounded-xl border border-white p-1 text-sm/6 bg-teal-300 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10">
              <p className="font-semibold">TRANSAKSI</p>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10">
              <p className="font-semibold">MASTER</p>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10">
              <p className="font-semibold">LAPORAN</p>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-black/10">
              <p className="font-semibold">PENGATURAN</p>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
