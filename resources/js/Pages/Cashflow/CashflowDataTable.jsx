import { FiPlusCircle } from 'react-icons/fi'
import Dropdown from './Dropdown'
import { RiArrowDownSFill, RiDeleteBin6Line, RiFileExcel2Line } from 'react-icons/ri'
import { RiArrowUpSFill } from 'react-icons/ri'
import { MdEditNote } from 'react-icons/md'
import { TbTruckReturn } from 'react-icons/tb'
import { IoMdRefresh } from 'react-icons/io'
import { TiPrinter } from 'react-icons/ti'
import { FcSearch } from 'react-icons/fc'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { getTableHeight } from '@/utils/helper'

export default function CashflowDataTable() {
  const dropsvalue = [
    {
      id: 0,
      label: 'Semua',
    },
    {
      id: 1,
      label: 'Audi',
    },
    {
      id: 2,
      label: 'BMW',
    },
    {
      id: 3,
      label: 'Citroen',
    },
    {
      id: 4,
      label: 'Ford',
    },
  ]

  return (
    <div className="px-4">
      <hr className="mt-2 border border-gray-300" />

      <div className="py-4">
        {/* <div className="lg:flex lg:flex-between py-4 md:grid md:grid-cols-12 md:gap-2"> */}

        <div className="mb-2 md:flex-between">
          <div className="flex-between md:block w-full">
            <p className="text-3xl font-bold">Cashflow</p>
            <p className="md:text-xs pl-2">8 item</p>
          </div>

          <div className="text-sm flex-start md:flex-end md:text-end gap-4 w-full overflow-x-auto">
            <div>
              <p className="whitespace-nowrap">Pemasukan Kas</p>
              <p className="whitespace-nowrap">Rp. 167.000,00</p>
            </div>
            <div>
              <p className="whitespace-nowrap">Pengeluaran Kas</p>
              <p className="whitespace-nowrap">Rp. 10.000,00</p>
            </div>
            <div>
              <p className="whitespace-nowrap">Selisih (saldo)</p>
              <p className="whitespace-nowrap">Rp. 157.000,00</p>
            </div>
          </div>
        </div>

        <div className="sm:flex-between sm:gap-4 w-full">
          <div className="w-full space-y-2 mb-2 sm:mb-0">
            <div className="flex-start gap-4">
              <p className="w-28">Mulai Tanggal</p>
              <input
                type="text"
                className="text-sm p-0 px-2 rounded-md border-none outline-none leading-none col-span-4 w-28"
                value="01-07-2020"
                onChange={(e) => console.log(e.target.value)}
                style={{
                  boxShadow:
                    'rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px',
                }}
              />
              <button
                type="button"
                className="win7-btn flex items-center justify-center gap-1 text-sm col-span-1"
              >
                <RiArrowDownSFill />
              </button>
            </div>
            <div className="flex-start gap-4">
              <p className="w-28">S/D Tanggal</p>
              <input
                type="text"
                className="text-sm p-0 px-2 rounded-md border-none outline-none leading-none col-span-4 w-28"
                value="30-07-2020"
                onChange={(e) => console.log(e.target.value)}
                style={{
                  boxShadow:
                    'rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px',
                }}
              />
              <button
                type="button"
                className="win7-btn flex items-center justify-center gap-1 text-sm col-span-1"
              >
                <RiArrowDownSFill />
              </button>
            </div>
          </div>

          <div className="flex-start sm:block sm:space-y-2 w-full gap-4">
            <div className="sm:grid sm:grid-cols-2 sm:gap-4">
              <p className="text-end">Operator</p>
              <Dropdown options={dropsvalue} />
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-4">
              <p className="text-end">Jenis</p>
              <Dropdown options={dropsvalue} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-start gap-3 mb-4 pb-2 overflow-x-auto">
        <ButtonW>
          <FiPlusCircle />
          <p className="hidden md:block">Tambah</p>
        </ButtonW>
        <ButtonW>
          <MdEditNote />
          <p className="hidden md:block">Detail</p>
        </ButtonW>
        <ButtonW>
          <RiDeleteBin6Line />
          <p className="hidden md:block">Hapus</p>
        </ButtonW>
        <ButtonW>
          <TbTruckReturn />
          <p className="hidden md:block">Retur</p>
        </ButtonW>
        <ButtonW>
          <IoMdRefresh />
          <p className="hidden md:block">Refresh</p>
        </ButtonW>
        <ButtonW>
          <TiPrinter />
          <p className="hidden md:block">Cetak</p>
        </ButtonW>
        <ButtonW>
          <RiFileExcel2Line />
          <p className="hidden md:block">Export</p>
        </ButtonW>
      </div>

      <div
        className="overflow-auto h-auto"
        style={{
          height: `${getTableHeight()}px`,
          // maxHeight: `${tableHeight}px`,
        }}
      >
        <div
          className="flex flex-wrap rounded-md"
          style={{
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
          }}
        >
          <table className="w-full text-sm overflow-auto">
            <thead className="sticky top-[-5px]">
              <tr className="overflow-hidden">
                <TheadTh label="No." />
                <TheadTh label="Faktur" />
                <TheadTh label="Tanggal" />
                <TheadTh label="Jenis" />
                <TheadTh label="Kategori" />
                <TheadTh label="Pemasukan" />
                <TheadTh label="Pengeluaran" />
                <TheadTh label="Keterangan" />
                <TheadTh label="Operator" />
              </tr>
            </thead>
            <tbody>
              {[...Array(1)].map((a, i) => {
                return <TBodyRow key={i} no={i + 1} />
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="sm:flex-between space-y-2 sm:space-y-0 mt-4">
        {/* SEARCH */}
        <div className="flex-center sm:flex-start w-full lg:w-6/12 gap-2">
          <FcSearch size={20} className="hidden sm:block" />
          <input
            type="text"
            className="text-base p-0x px-2 rounded-md border-none outline-none leading-none w-10/12"
            placeholder="Search..."
            style={{
              boxShadow:
                'rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px',
            }}
          />
        </div>

        {/* PAGINATION */}
        <div className="flex-center sm:flex-end gap-1">
          <ButtonW className="h-9">
            <FaChevronLeft />
          </ButtonW>
          <ButtonW className="h-9" isActive={true}>
            1
          </ButtonW>
          <ButtonW className="h-9">2</ButtonW>
          <p>...</p>
          <ButtonW className="h-9">102</ButtonW>
          <ButtonW className="h-9">103</ButtonW>
          <ButtonW className="h-9">
            <FaChevronRight />
          </ButtonW>
        </div>
      </div>
    </div>
  )
}

const TheadTh = ({ label }) => {
  return (
    <th className="text-left px-1 w7shadow overflow-hidden hover:cursor-pointer">
      {label}
    </th>
  )
}

const TBodyRow = ({ no }) => {
  return (
    <tr className="odd:bg-white even:bg-[#f2f2f2] hover:bg-[#273c75] hover:text-white">
      <td className="px-4">{no}</td>
      <td className="px-4 whitespace-nowrap">PJL 150720-113557</td>
      <td className="px-4 whitespace-nowrap">15-07-2020</td>
      <td className="px-4">Pemasukan</td>
      <td className="px-4">Penjualan</td>
      <td className="px-4">16,000</td>
      <td className="px-4"></td>
      <td className="px-4 whitespace-nowrap">Penjualan: PJL 150720-113557</td>
      <td className="px-4">Master</td>
    </tr>
  )
}

const ButtonW = ({ children, className, isActive }, props) => {
  return (
    <button
      type="button"
      className={`win7-btn flex items-center justify-center gap-1 text-sm ${
        isActive && 'active'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
