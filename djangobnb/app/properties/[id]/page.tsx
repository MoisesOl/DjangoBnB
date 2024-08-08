import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

import apiService from "@/app/services/apiService";

const PropertiesDetailPage = async (
    {params}: { params: {id: string } }
) => {
    const property = await apiService.get(`/api/properties/${params.id}`)
    
    
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src={property.image_url}
                    className="object-cover w-full h-full"
                    alt="Icónica"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">{property.title}</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        {property.guests} Huéspedes - {property.bedrooms} Habitaciones - {property.bathrooms} Baños
                    </span>
                    
                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image 
                            src={property.landlord.avatar_url}
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt={property.landlord.name}
                        />
                        
                        <p><strong>Anfitrión: {property.landlord.name}</strong></p>
                    </div>
                    
                    <hr />

                    <p className="mt-6 text-lg">{property.description}</p>
                </div>

                <ReservationSidebar 
                    property={property}
                /> 
            </div>
        </main>
    )
}

export default PropertiesDetailPage;