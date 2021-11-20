import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Arrow from "../../components/icons/Arrow";
import Button from "../../components/Button";
import Search from "../../components/icons/Search";
import Pending from "../../components/icons/Pending";
import MiArrow from "../../components/icons/MiArrow";
import Success from "../../components/icons/Success";
import Notification from "../../components/icons/Notification";
import MyCalendar from "../../components/MyCalendar/MyCalendar";
import Input from "../../components/Input";
import SplitBox from "../../components/SplitBox/SplitBox";
import Add from "../../components/icons/Add";
import Badge from "../../components/Badge";

function ValidationsEnAttentes({ status }) {
  console.log(status);
  return (
    <>
      <div className='flex items-center mb-3 justify-between space-x-2'>
        <div className='flex items-center space-x-2 '>
          <div className='flex space-x-2 items-center p-3'>
            <img
              className='w-12 rounded-full'
              src='http://daisyui.com/tailwind-css-component-profile-1@94w.png'
              alt='Profile Image'
            />
            <h2 className='text-sm 2xl:text-lg font-semibold'>Eric Bertand</h2>
          </div>
        </div>
        {status === "pending" && (
          <div className='flex space-x-2'>
            <button className='px-4 py-3 border-2 border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-red-100 rounded-md'>
              Refuser
            </button>
            <button className='px-4 py-3 border-2 bg-green-500 border-green-500 text-green-50 font-medium hover:bg-green-400 hover:border-green-400 hover:text-green-100 rounded-md'>
              Valider
            </button>
          </div>
        )}
      </div>
      <div className='w-full h-full px-8 pt-6 border border-gray-200'>
        <table className='table w-full'>
          <thead>
            <tr>
              <td className=' p-1 capitalize text-sm'>Date de debut</td>
              <td className='p-1 capitalize text-sm'>Date de fin</td>
              <td className='p-1 capitalize text-sm'>Nombre de jours</td>
              <td className='p-1 capitalize text-sm'>Solde</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-1'>01/04/2021</td>
              <td className='p-1'>01/04/2021</td>
              <td className='p-1'>4</td>
              <td className='p-1 text-custom-d'>24 jours</td>
            </tr>
          </tbody>
        </table>
        <div class='tabs w-full my-10 border-b-2 -pb-6'>
          <a class='tab tab-bordered tab-active -mb-0.5 text-lg !border-custom-d'>
            Calendrier
          </a>
          <a class='tab  text-lg'>Justificatif</a>
          <a class='tab  text-lg'>Commentaires</a>
        </div>
        {/* Table  */}
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead className='!bg-custom-l3 z-50'>
              <tr className=''>
                <th className='!bg-transparent'>Début des congés</th>
                <th className='!bg-transparent'>Fin des congés</th>
                <th className='!bg-transparent '>Durée</th>
              </tr>
            </thead>
            <tbody className='divide-y-2 divide-gray-300'>
              <tr>
                <td>24/09/2021</td>
                <td>24/09/2021</td>
                <td>4 jours</td>
              </tr>
            </tbody>
          </table>
        </div>
        <MyCalendar />
      </div>
    </>
  );
}

export default ValidationsEnAttentes;
