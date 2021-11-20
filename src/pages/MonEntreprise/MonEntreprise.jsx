import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Arrow from "../../components/icons/Arrow";
import Notification from "../../components/icons/Notification";
import SearchBarWithSelectBox from "../../components/SearchBarWithSelectBox";
import AnnuaireCollaborateur from "./AnnuaireCollaborateur";

function MonEntreprise() {
  const [activeOrganigramme, setActiveOrganigramme] = React.useState(true);
  const [
    activeAnnuaireCollaborateurs,
    setActiveAnnuaireCollaborateurs,
  ] = React.useState(false);

  const handleClick = (e) => {
    if (!activeOrganigramme && e.target.classList.contains("false")) {
      setActiveOrganigramme((prev) => !prev);
      setActiveAnnuaireCollaborateurs((prev) => !prev);
    }
    if (!activeAnnuaireCollaborateurs && e.target.classList.contains("false")) {
      setActiveAnnuaireCollaborateurs((prev) => !prev);
      setActiveOrganigramme((prev) => !prev);
    }
  };
  return (
    <main className='bg-custom-light h-screen tabl text-gray-700 font-main  relative'>
      <div className='flex items-start justify-between'>
        <SideBar />
        <div className='mx-8 w-full h-full min-h-screen max-h-screen overflow-auto scrollbar-hide'>
          <div className='lg:mb-10 xl:mb-20 w-full mt-2 flex justify-end items-center'>
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
            <h2 className='text-2xl font-bold text-gray-900'>Mon Entreprise</h2>
          </div>
          {/* Content  */}
          <div className='w-full h-full px-6 2xl:px-16 py-6 2xl:py-12 bg-white grid grid-cols-7 gap-x-32 shadow-base-200 '>
            <div className=' col-span-7 tabs w-full my-10 border-b-2 -pb-6'>
              <a
                onClick={handleClick}
                className={`tab -mb-0.5 text-base 2xl:text-lg ${
                  activeOrganigramme &&
                  "tab-bordered tab-active !border-custom-d"
                } `}>
                Organigramme
              </a>
              <a
                onClick={handleClick}
                className={`tab -mb-0.5 text-base 2xl:text-lg ${
                  activeAnnuaireCollaborateurs &&
                  "tab-bordered tab-active !border-custom-d"
                } `}>
                Annuaire Collaborateurs
              </a>
            </div>

            {activeAnnuaireCollaborateurs && (
              <div className='col-span-7 w-full flex justify-between items-end mb-4'>
                <SearchBarWithSelectBox placeholder='Tout le monde' />
                <h2>11 employes, 7 equipes et 1 departement</h2>
              </div>
            )}
            <div className='col-span-7'>
              {activeOrganigramme && "Organigramme"}
              {activeAnnuaireCollaborateurs && <AnnuaireCollaborateur />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MonEntreprise;
