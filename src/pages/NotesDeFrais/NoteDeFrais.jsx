import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import Arrow from "../../components/icons/Arrow";
import Button from "../../components/Button";
import Search from "../../components/icons/Search";
import Pending from "../../components/icons/Pending";
import MiArrow from "../../components/icons/MiArrow";
import Success from "../../components/icons/Success";
import Notification from "../../components/icons/Notification";

function NoteDeFrais() {
  return (
    <main className="bg-custom-light min-h-screen  text-gray-700 font-main  relative">
      <div className="flex items-start justify-between">
        <SideBar />
        <div className="mx-8 w-full min-h-screen ">
          <div className="lg:mb-10 mb-20 w-full mt-2 flex justify-end items-center">
            <div className="m-6 indicator">
              <div className="w-1.5 h-1.5 p-0 bg-blue-600 border-blue-600 indicator-item badge badge-secondary"></div>
              <Notification className=" fill-current text-gray-400" />
            </div>
            <img
              className="w-12 rounded-xl"
              src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
            />
            <div className="ml-2">
              <h2 className="text-base text-custom-d">Cokou Jean-Eude</h2>
              <small className="font-secondary text-gray-500 text-sm">
                Developpeur Web
              </small>
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <h2 className="text-2xl font-bold text-gray-900">
              Mes notes de frais
            </h2>
            <div>
              <div className="flex items-center gap-x-2">
                {/* <h2 className="text-2xl text-custom-d font-semibold">25,24</h2>
                <span className="text-lg font-light text-gray-500">solde</span>
                <Arrow /> */}
                <Button text="Nouvelle une note" />
              </div>
            </div>
          </div>
          {/* Content  */}
          <div className="w-full h-full bg-white grid grid-cols-7 ">
            {/* Right Side  */}
            <div className="col-span-2">
              {/* Search Bar  */}
              <div className="flex items-center lg:mx-4 mx-8 mb-5 rounded-md bg-gray-100 border-custom-l3 border-2">
                <Search className="w-6 ml-2" />
                <input
                  type="text"
                  className="w-full bg-transparent outline-none rounded-md pl-2 py-3"
                  placeholder="Rechercher un bulletins ..."
                />
              </div>
              <div>
                <div>
                  <span className="flex items-center bg-custom-l3 pl-4 py-1 space-x-2">
                    <MiArrow />
                    <h2 className="w-full  text-lg text-gray-900 font-medium">
                      En attente
                    </h2>
                  </span>
                  <div className="divide-y-2 divide-gray-200">
                    <div className="px-3 py-4">
                      <span className="flex justify-between pb-1.5">
                        <h2 className="uppercase text-lg ">Transport</h2>
                        <small className="text-lg">20.000</small>
                      </span>
                      <span className="flex justify-between pb-1.5">
                        <h2 className="text-lg font-medium">Essence</h2>
                      </span>
                      <span className="flex items-center justify-between pb-1.5">
                        <h2 className="text-lg ">01 Avril 2021</h2>
                        <Pending />
                      </span>
                    </div>
                    <div className="px-3 py-4">
                      <span className="flex justify-between pb-1.5">
                        <h2 className="uppercase text-lg ">Autre</h2>
                        <small className="text-lg">20.000</small>
                      </span>
                      <span className="flex justify-between pb-1.5">
                        <h2 className="text-lg font-medium">Petit déjeuner</h2>
                      </span>
                      <span className="flex items-center justify-between pb-1.5">
                        <h2 className="text-lg ">01 Avril 2021</h2>
                        <Pending />
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="flex items-center bg-custom-l3 pl-4 py-1 space-x-2">
                    <MiArrow />
                    <h2 className="w-full  text-lg text-gray-900 font-medium">
                      Validé
                    </h2>
                  </span>
                  <div className="divide-y-2 divide-gray-200">
                    <div className="px-3 py-4">
                      <span className="flex justify-between pb-1.5">
                        <h2 className="uppercase text-lg ">Transport</h2>
                        <small className="text-lg">20.000</small>
                      </span>
                      <span className="flex justify-between pb-1.5">
                        <h2 className="text-lg font-medium">Essence</h2>
                      </span>
                      <span className="flex items-center justify-between pb-1.5">
                        <h2 className="text-lg ">01 Avril 2021</h2>
                        <Success />
                      </span>
                    </div>
                    <div className="px-3 py-4">
                      <span className="flex justify-between pb-1.5">
                        <h2 className="uppercase text-lg ">Autre</h2>
                        <small className="text-lg">20.000</small>
                      </span>
                      <span className="flex justify-between pb-1.5">
                        <h2 className="text-lg font-medium">Petit déjeuner</h2>
                      </span>
                      <span className="flex items-center justify-between pb-1.5">
                        <h2 className="text-lg ">01 Avril 2021</h2>
                        <Success />
                      </span>
                    </div>
                    <div className="px-3 py-4">
                      <span className="flex justify-between pb-1.5">
                        <h2 className="uppercase text-lg ">Autre</h2>
                        <small className="text-lg">20.000</small>
                      </span>
                      <span className="flex justify-between pb-1.5">
                        <h2 className="text-lg font-medium">Petit déjeuner</h2>
                      </span>
                      <span className="flex items-center justify-between pb-1.5">
                        <h2 className="text-lg ">01 Avril 2021</h2>
                        <Success />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Left Side  */}
            <div className="col-span-5 w-full border-gray-200 border"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NoteDeFrais;
