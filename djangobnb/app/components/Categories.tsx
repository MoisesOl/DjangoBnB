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
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
                    category === '' 
                        ? 'border-black opacity-100'
                        : 'border-white opacity-60 hover:border-gray-200 hover:opacity-100'
                }`}
            >
                <Image 
                    src="/icn_categoria_todos.png"
                    alt="Categoría - Todos"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Todas</span>
            </div>

            <div
                onClick={() => _setCategory('iconico')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
                    category === 'iconico' 
                        ? 'border-black opacity-100'
                        : 'border-white opacity-60 hover:border-gray-200 hover:opacity-100'
                }`}
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
                onClick={() => _setCategory('cabaña')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
                    category === 'cabaña' 
                        ? 'border-black opacity-100'
                        : 'border-white opacity-60 hover:border-gray-200 hover:opacity-100'
                }`}
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
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
                    category === 'playa' 
                        ? 'border-black opacity-100'
                        : 'border-white opacity-60 hover:border-gray-200 hover:opacity-100'
                }`}
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
    );
}

export default Categories;
