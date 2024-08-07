import Image from "next/image"

const MyReservations = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">
                Mis reservaciones
            </h1>

            <div color="space-y-4">
                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image 
                                fill
                                src='/iconico_1.webp'
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="Iconico"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <div className="space-y-2">
                            <h2 className="mb-4 text-xl">Nombre propiedad</h2>

                            <p><strong>Check in:</strong> 12/12/2024</p>
                            <p><strong>Check out:</strong> 14/12/2024</p>

                            <p><strong>Número de noches:</strong> 2</p>
                            <p><strong>Precio total: </strong> $493.693</p>
                        </div>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Ir a propiedad</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MyReservations;