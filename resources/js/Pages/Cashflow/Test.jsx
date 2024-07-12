export default function Test() {
  return (
    <div className="flex flex-wrap">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block w-full sm:px-6 lg:px-8">
          <div className="table-wrp block max-h-96">
            <table className="w-full">
              <thead className="bg-white border-b sticky top-0">
                <tr>
                  <th
                    scope="col"
                    className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Select
                  </th>
                  <th
                    scope="col"
                    className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Address
                  </th>
                </tr>
              </thead>

              <tbody className="h-96 overflow-y-auto">
                {[...Array(18)].map((a, i) => {
                  return (
                    <tr
                      key={i}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <input type="checkbox" name="address" value="1" />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        BATHURST{' '}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Address Here Address Here Address Here Address Here Address Here
                        Address Here{' '}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
