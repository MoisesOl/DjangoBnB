import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icn_categoria_iconicos.webp"
                    alt="Categoría - Icónicos"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Icónicos</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icn_categoria_cabañas.webp"
                    alt="Categoría - Cabañas"
                    width={20}
                    height={20}
                />

                <span className="text-xs">Cabañas</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
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