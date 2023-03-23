import React from 'react'
import { Outlet,Link } from 'react-router-dom'


const Student = () => {
  return (
    <>
 <div class="p-4  mt-4  ">
        <div class="flex flex-col md:flex-row items-center justify-between mb-4 mt-8">
            <div class="relative mb-4 md:mb-0 md:mr-4">
                <input type="text" class="bg-gray-200 rounded-full px-4 py-2 pr-8 " placeholder="Search..." />
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M17 11h-4V7c0-.55-.45-1-1-1s-1 .45-1 1v4H7c-.55 0-1 .45-1 1s.45 1 1 1h4v4c0 .55.45 1 1 1s1-.45 1-1v-4h4c.55 0 1-.45 1-1s-.45-1-1-1z" />
                        </svg>
                </button>
            </div>
            <div class="relative mb-4 md:mb-0 md:ml-4 flex-1">
                <button
                    class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full w-full md:w-auto">
                    Filter
                </button>

            </div>

            {/* <!-- Modal toggle --> */}
            <button class="block text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                <Link to='/Addstu'>Add Student</Link>
                
            </button>

            

        </div>





        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" class="px-6 py-3">
                            ID*
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            LastName
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Age
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" class="px-6 py-3">
                            D.O.B
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Branch
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            01
                        </th>
                        <td class="px-6 py-4">
                            Rajneesh
                        </td>
                        <td class="px-6 py-4">
                            Rana
                        </td>
                        <td class="px-6 py-4">
                            22
                        </td>
                        <td class="px-6 py-4">
                            Male
                        </td>
                        <td class="px-6 py-4">
                           13/01/200
                        </td>
                        <td class="px-6 py-4">
                           ranarajneesh075@gmail.com
                        </td>
                        <td class="px-6 py-4">
                            8395954944
                        </td>
                        <td class="px-6 py-4">
                           Btech
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium  text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            01
                        </th>
                        <td class="px-6 py-4">
                            Rajneesh
                        </td>
                        <td class="px-6 py-4">
                            Rana
                        </td>
                        <td class="px-6 py-4">
                            22
                        </td>
                        <td class="px-6 py-4">
                            Male
                        </td>
                        <td class="px-6 py-4">
                            13-01-2000
                        </td>
                        <td class="px-6 py-4">
                           ranarajneesh075@gmail.com
                        </td>
                        <td class="px-6 py-4">
                            8395954944
                        </td>
                        <td class="px-6 py-4">
                           Btech
                        </td>
                        
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium  text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            01
                        </th>
                        <td class="px-6 py-4">
                            Rajneesh
                        </td>
                        <td class="px-6 py-4">
                            Rana
                        </td>
                        <td class="px-6 py-4">
                            22
                        </td>
                        <td class="px-6 py-4">
                            Male
                        </td>
                        <td class="px-6 py-4">
                            13-01-2000
                        </td>
                        <td class="px-6 py-4">
                           ranarajneesh075@gmail.com
                        </td>
                        <td class="px-6 py-4">
                            8395954944
                        </td>
                        <td class="px-6 py-4">
                           Btech
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium  text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

<Outlet />
    </>
  )
}

export default Student