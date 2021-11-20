import React from "react";
import Arrow from "../../components/icons/Arrow";

function AnnuaireCollaborateur() {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
        <thead className='w-full !bg-custom-l3 z-50'>
          <tr className=' w-full'>
            <th className='!bg-transparent'>
              <div className='flex'>
                <span>Collaborateurs</span>
                <span className='pl-2 space-y-0.5'>
                  <Arrow className='rotate-180 text-gray-700 !stroke-current' />
                  <Arrow className='text-gray-700 !stroke-current' />
                </span>
              </div>
            </th>
            <th className='!bg-transparent w-max '>
              <div className='flex'>
                <span> Poste</span>
                <span className='inline pl-2 space-y-0.5'>
                  <Arrow className=' rotate-180 text-gray-700 !stroke-current' />
                  <Arrow className='text-gray-700 !stroke-current' />
                </span>
              </div>
            </th>
            <th className='!bg-transparent w-max'>
              <div className='flex'>
                <span>Equipe</span>
                <span className='pl-2 space-y-0.5'>
                  <Arrow className='rotate-180 text-gray-700 !stroke-current' />
                  <Arrow className='text-gray-700 !stroke-current' />
                </span>
              </div>
            </th>
            <th className='!bg-transparent w-max'>
              <div className='flex'>
                <span>Email</span>
                <span className='pl-2 space-y-0.5'>
                  <Arrow className='rotate-180 text-gray-700 !stroke-current' />
                  <Arrow className='text-gray-700 !stroke-current' />
                </span>
              </div>
            </th>
            <th className='!bg-transparent w-max'>
              <div className='flex'>
                <span>Manager</span>
                <span className='pl-2 space-y-0.5'>
                  <Arrow className='rotate-180 text-gray-700 !stroke-current' />
                  <Arrow className='text-gray-700 !stroke-current' />
                </span>
              </div>
            </th>
            <th className='!bg-transparent w-max'>Telephone</th>
          </tr>
        </thead>
        <tbody className='divide-y-2 divide-gray-300'>
          <tr>
            <td>Wade Warren</td>
            <td>Medical Assistant</td>
            <td>Tech</td>
            <td>Brice Allougba</td>
            <td>Bessiecooper@gmail.com</td>
            <td>(405) 555-0128</td>
          </tr>
          {[1, 2, 3, 4, 5, 6].map(() => (
            <tr>
              <td>
                <span className='flex items-center space-x-2'>
                  <img
                    src='http://daisyui.com/tailwind-css-component-profile-1@94w.png'
                    alt=''
                    className='w-10 rounded-full'
                  />
                  <h2>Bessie Cooper</h2>
                </span>
              </td>
              <td>Medical Assistant</td>
              <td>Tech</td>
              <td>Brice Allougba</td>
              <td>Bessiecooper@gmail.com</td>
              <td>(405) 555-0128</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnnuaireCollaborateur;
