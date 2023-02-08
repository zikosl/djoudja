import React from 'react';

import phto2 from '../assests/phto2.png'
import phto3 from '../assests/phto3.png'
import CardComponenet from './CardComponenet'



const NewAnnonces = () => {
  const cards = [{ photo: phto2, price: "123 DZ" },
  { photo: phto2, price: "123 DZ" },
  { photo: phto3, price: "123 DZ" },
  { photo: phto3, price: "123 DZ" }]
  return (
    <div mx-8>
      {/* title */}
      <div className=' mt-10'>
        <p className='text-[28px]  pt-10 font-bold'>Nouvelles Annonces en Algérie</p>
        <p className='text-blue-600 text-[15px]'>Voir toutes las Annonces</p>
      </div>
      {/* listings */}
      <div className="flex  flex-nowrap pt-4 space-x-6  overflow-x-scroll w-full pb-4 mb-20">
        {cards.map((card) => (<CardComponenet photo={card.photo} price={card.price} />
        ))}
      </div>

    </div>
  );
};

export default NewAnnonces;