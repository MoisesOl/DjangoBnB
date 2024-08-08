import Image from "next/image";

interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory 
}) => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div 
                onClick={() => setCategory('Iconicos')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'Iconicos' ? 'border-gray-800 opacity-100' : 'border-white opacity-60'} hover:border-gray-200`}
            >
                <Image 
                    src="/icn_categoria_iconicos.webp"
                    alt="Categoría - Icónicos"
                    width={20}
                    height={20}
                />
                <span className="text-xs">Icónicos</span>
            </div>

            <div 
                onClick={() => setCategory('Cabañas')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'Cabañas' ? 'border-gray-800 opacity-100' : 'border-white opacity-60'} hover:border-gray-200`}
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
                onClick={() => setCategory('Frente a la playa')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory === 'Frente a la playa' ? 'border-gray-800 opacity-100' : 'border-white opacity-60'} hover:border-gray-200`}
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