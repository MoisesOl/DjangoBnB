import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";

const PropertiesDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src='/iconico1.webp'
                    className="object-cover w-full h-full"
                    alt="Icónica"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Nombre Propiedad</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        4 Huéspedes - 2 habitaciones - 3 camas - 2 baños
                    </span>
                    
                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image 
                            src="/profile_pic_1.webp"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="Nombre de usuario"
                        />
                        
                        <p><strong>Anfitrión: John Doe</strong></p>
                    </div>
                    
                    <hr />

                    <p className="mt-6 text-lg">Askldjlksj laksjdklajsdlkasjd alsdkjaslkdsj am.,xzcm lksjd asldkjaskld oiwuj rio dsajdkl saldkoiewur wekrj asdlkjsd klajdjkl</p>
                </div>

                <ReservationSidebar /> 
            </div>
        </main>
    )
}

export default PropertiesDetailPage;