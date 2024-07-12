import { LuWallet } from 'react-icons/lu'
import { FaCircleCheck } from 'react-icons/fa6'
import { BsDatabase } from 'react-icons/bs'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { GoGear } from 'react-icons/go'
import { FcCurrencyExchange } from 'react-icons/fc'
import { FcMoneyTransfer } from 'react-icons/fc'
import { FcReadingEbook } from 'react-icons/fc'
import { FcTodoList } from 'react-icons/fc'
import { FcSupport } from 'react-icons/fc'
import { FcSurvey } from 'react-icons/fc'
import { IoIosLogOut } from 'react-icons/io'
import { FaRegUser } from 'react-icons/fa'
import CashflowDataTable from './CashflowDataTable'
import Dropdown from './Dropdown'
import { getTableHeight } from '@/utils/helper'

export default function Index() {
  const dropsvalue = [
    {
      id: 'TRANSAKSI',
      label: 'TRANSAKSI',
    },
    {
      id: 'MASTER',
      label: 'MASTER',
    },
    {
      id: 'LAPORAN',
      label: 'LAPORAN',
    },
    {
      id: 'PENGATURAN',
      label: 'PENGATURAN',
    },
  ]

  return (
    <main className="p-2 sm:p-4 lg:p-6 h-screen bg-cover bg-center bg-[url('/assets/images/background.jpg')] ">
      <div className="h-full overflow-hidden rounded-2xl shadow bg-gradient-to-t from-[#d5d9e1] via-[#d5d9e1] via-30% to-[#f9fbfa]">
        <header className="flex items-center justify-between px-4">
          <div className="md:hidden pt-3 pb-2">
            <Dropdown options={dropsvalue} />
          </div>

          <div className="hidden md:flex-start gap-8 pt-3 pb-2">
            <HeaderButton
              isActive={true}
              icon={<LuWallet size={18} />}
              label="TRANSAKSI"
            />
            <HeaderButton
              isActive={false}
              icon={<BsDatabase size={18} />}
              label="MASTER"
            />
            <HeaderButton
              isActive={false}
              icon={<HiOutlineDocumentReport size={18} />}
              label="LAPORAN"
            />
            <HeaderButton
              isActive={false}
              icon={<GoGear size={18} />}
              label="PENGATURAN"
            />
          </div>
          <div className="flex items-center justify-start gap-2">
            <FaCircleCheck color="green" />
            <p className="font-bold">Activated</p>
            <p>{window.innerHeight}</p>
            <p>{window.innerWidth}</p>
            <p>{getTableHeight()}</p>
          </div>
        </header>
        <hr className=" border-[#b3b8b9]" />
        <div className="md:flex-between md:flex-row-reverse space-y-4 md:space-y-0 p-4">
          <div className="md:text-end">
            <p className="text-2xl font-bold">Minimarket Serba Ada</p>
            <div className="flex-start md:flex-end gap-2">
              <p className="font-semibold">Operator : Master</p>
              <div className="flex-center gap-3">
                <ButtonW>
                  <FaRegUser />
                </ButtonW>
                <ButtonW>
                  <IoIosLogOut />
                </ButtonW>
              </div>
            </div>
          </div>
          <div className="flex-start gap-2 sm:gap-4">
            <ButtonMenu isActive={true}>
              <FcCurrencyExchange className="text-[1rem] sm:text-[1.5rem]" />
              <p className="hidden xl:block">Pembelian</p>
            </ButtonMenu>
            <ButtonMenu isActive={false}>
              <FcMoneyTransfer className="text-[1rem] sm:text-[1.5rem]" />
              <p className="hidden xl:block">Penjualan</p>
            </ButtonMenu>
            <ButtonMenu isActive={false}>
              <FcReadingEbook className="text-[1rem] sm:text-[1.5rem]" />
              <p className="hidden xl:block">Hutang</p>
            </ButtonMenu>
            <ButtonMenu isActive={false}>
              <FcTodoList className="text-[1rem] sm:text-[1.5rem]" />
              <p className="hidden xl:block">Piutang</p>
            </ButtonMenu>
            <ButtonMenu isActive={false}>
              <FcSupport className="text-[1rem] sm:text-[1.5rem]" />
              <p className="hidden xl:block">Biaya</p>
            </ButtonMenu>
            <ButtonMenu isActive={false}>
              <FcSurvey className="text-[1rem] sm:text-[1.5rem]" />
              <p className="hidden xl:block">Cashflow</p>
            </ButtonMenu>
          </div>
        </div>

        <div>
          <CashflowDataTable />
          {/* <Test /> */}
        </div>
      </div>
    </main>
  )
}

const HeaderButton = ({ isActive, icon, label }) => {
  return (
    <button
      type="button"
      className={`flex items-center border-none justify-start gap-2  hover:text-blue-600 ${
        isActive ? 'text-blue-500' : 'text-gray-700'
      }`}
    >
      {icon}
      <p className="font-semibold text-sm">{label}</p>
    </button>
  )
}

const ButtonMenu = ({ isActive, children }) => {
  return (
    <button
      type="button"
      className={`win7-btn flex-center sm:gap-1 xl:min-w-[150px] sm:min-h-[50px] ${
        isActive && 'active'
      }`}
    >
      {children}
    </button>
  )
}

const ButtonW = ({ children }) => {
  return (
    <button
      type="button"
      className="win7-btn flex items-center justify-center gap-1 text-sm"
    >
      {children}
    </button>
  )
}
