import React from 'react'
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
    return (
        <>
        <div class="p-4">
        <h1 class="text-3xl font-bold text-center mt-4 text-purple-800  ">Fees Structure</h1>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Branch
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Fees-April
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Fees-November
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Course Duration
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            CSE
                        </th>
                        <td class="px-6 py-4">
                            70,000
                        </td>
                        <td class="px-6 py-4">
                            60,000
                        </td>
                        <td class="px-6 py-4">
                            4 Year
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium  text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            BCA
                        </th>
                        <td class="px-6 py-4">
                            30000
                        </td>
                        <td class="px-6 py-4">
                            45000
                        </td>
                        <td class="px-6 py-4">
                            3 Year
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            MBA
                        </th>
                        <td class="px-6 py-4">
                            55000
                        </td>
                        <td class="px-6 py-4">
                            45000
                        </td>
                        <td class="px-6 py-4">
                            2 Year
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h1 class="text-3xl font-bold text-center mt-4 text-purple-800"> Hostel Fees </h1>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead
                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 warm-gray-400 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Rooms
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Fees-April
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Fees-November
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Hostel Needed
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            3rd -AC
                        </th>
                        <td class="px-6 py-4">
                            20,000
                        </td>
                        <td class="px-6 py-4">
                            64,000
                        </td>
                        <td class="px-6 py-4">
                            4 Year
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            3 - Non - AC
                        </th>
                        <td class="px-6 py-4">
                            20000
                        </td>
                        <td class="px-6 py-4">
                            52000
                        </td>
                        <td class="px-6 py-4">
                            4 Year
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            4 - Shareing
                        </th>
                        <td class="px-6 py-4">
                            20000
                        </td>
                        <td class="px-6 py-4">
                            45000
                        </td>
                        <td class="px-6 py-4">
                            2 Year
                        </td>
                        <td class="px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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

export default Dashboard