import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Arrow from "../../components/icons/Arrow";
import Button from "../../components/Button";
import Search from "../../components/icons/Search";
import Pending from "../../components/icons/Pending";
import MiArrow from "../../components/icons/MiArrow";
import Success from "../../components/icons/Success";
import Notification from "../../components/icons/Notification";
import SplitBox from "../../components/SplitBox/SplitBox";
import Add from "../../components/icons/Add";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

function Absences() {
  return (
    <main className='bg-custom-light h-screen text-gray-700 font-main  relative'>
      <div className='flex items-start justify-between'>
        <SideBar />
        <div className='mx-8 w-full h-full min-h-screen max-h-screen overflow-auto scrollbar-hide'>
          <div className='lg:mb-10 mb-20 w-full mt-2 flex justify-end items-center'>
            <div className='m-6 indicator'>
              <div className='w-1.5 h-1.5 p-0 bg-blue-600 border-blue-600 indicator-item badge badge-secondary'></div>
              <Notification className=' fill-current text-gray-400' />
            </div>
            <img
              className='w-12 rounded-xl'
              src='http://daisyui.com/tailwind-css-component-profile-1@94w.png'
            />
            <div className='ml-2'>
              <h2 className='text-base text-custom-d'>Cokou Jean-Eude</h2>
              <small className='font-secondary text-gray-500 text-sm'>
                Developpeur Web
              </small>
            </div>
          </div>
          <div className='flex justify-between mb-2'>
            <h2 className='text-2xl font-bold text-gray-900'>
              Mes congés et Absences
            </h2>
            <div>
              <div className='flex items-center gap-x-2'>
                <h2 className='text-2xl text-custom-d font-semibold'>25,24</h2>
                <span className='text-lg font-light text-gray-500'>solde</span>
                <Arrow className='w-4 h-4 stroke-current text-custom-d mr-4' />
                <Link to='/absences/demande-absence'>
                  <Button icon={Add} label='Demande d’absence' />
                </Link>
              </div>
            </div>
          </div>
          {/* Content  */}
          <div className='w-full h-full bg-white grid grid-cols-7 '>
            {/* Right Side  */}
            <div className='col-span-2'>
              {/* Search Bar  */}
              <Input
                className='px-4'
                icon={Search}
                iconPosition='left'
                placeholder='Rechercher un bulletins ...'
              />

              <div>
                <SplitBox
                  title='En attente'
                  status='pending'
                  componentTitle='Absences'
                />
                <SplitBox
                  title='Validé'
                  status='validated'
                  componentTitle='Absences'
                />
                <SplitBox
                  title='Refusé'
                  status='refused'
                  componentTitle='Absences'
                />
              </div>
            </div>

            {/* Left Side  */}
            <div className='col-span-5 w-full'></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Absences;
