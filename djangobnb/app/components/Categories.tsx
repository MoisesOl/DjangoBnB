'use client';

import { useState } from 'react';
import Image from "next/image";
import useSearchModal, { SearchQuery } from '../hooks/useSearchModal';


const Categories = () => {
    const searchModal = useSearchModal();
    const [category, setCategory] = useState('');

    const _setCategory = (_category: string) => {
        setCategory(_category);

        const query: SearchQuery = {
            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            guests: searchModal.query.guests,
            bedrooms: searchModal.query.bedrooms,
            bathrooms: searchModal.query.bathrooms,
            category: _category,
        }

        searchModal.setQuery(query);
    }
    
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div
                onClick={() => _setCategory('')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image 
                    src="/icn_categoria_iconicos.webp"
                    alt="Categoría - Icónicos"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Todas</span>
            </div>

            <div
                onClick={() => _setCategory('iconico')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == 'iconico' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image 
                    src="/icn_categoria_iconicos.webp"
                    alt="Categoría - Icónicos"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Icónico</span>
            </div>

            <div
                onClick={() => _setCategory('cabañas')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == 'cabañas' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image 
                    src="/icn_categoria_cabañas.webp"
                    alt="Categoría - Cabañas"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Cabañas</span>
            </div>

            <div
                onClick={() => _setCategory('playa')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 border-white ${category == 'playa' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image 
                    src="/icn_categoria_frente_a_la_playa.webp"
                    alt="Categoría - Frente a la playa"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Frente a la playa</span>
            </div>
        </div>
    )
}

export default Categories;