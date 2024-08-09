import Image from "next/image"
import Link from "next/link";
import apiService from "../services/apiService";

const MyReservations = async () => {
    const reservations = await apiService.get('/api/auth/myReservations/')

    
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">
                Mis reservas
            </h1>

            <div color="space-y-4">
                {reservations.map((reservation: any) => {
                    return (
                        <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                            <div className="col-span-1">
                                <div className="relative overflow-hidden aspect-square rounded-xl">
                                    <Image 
                                        fill
                                        src={reservation.property.image_url}
                                        className="hover:scale-110 object-cover transition h-full w-full"
                                        alt={reservation.property.title}
                                    />
                                </div>
                            </div>

                            <div className="col-span-1 md:col-span-3">
                                <div className="space-y-2">
                                    <h2 className="mb-4 text-xl">{reservation.property.title}</h2>

                                    <p><strong>Check in:</strong> {reservation.start_date}</p>
                                    <p><strong>Check out:</strong> {reservation.end_date}</p>

                                    <p><strong>Número de noches:</strong> {reservation.number_of_nights}</p>
                                    <p><strong>Precio total: </strong> {reservation.total_price}</p>
                                </div>

                                <Link
                                    href={`/properties/${reservation.property.id}`}
                                    className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl"
                                >
                                    Ir a la propiedad
                            
                                
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default MyReservations;