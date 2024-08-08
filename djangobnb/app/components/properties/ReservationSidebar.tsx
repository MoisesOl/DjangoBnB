export type Property = {
    id: string;
    price_per_night: number;
}

interface ReservationSidebarProps {
    property: Property
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
    property
}) => {

    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">${property.price_per_night} por noche</h2>

            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="block font-bold text-xs">HUÉSPEDES</label>
                
                <select className="w-full -ml-1 text-xm bg-white pl-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">
                Reserva
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>$100.000 x 4 noches</p>

                <p>$400.000</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Tarifa de limpieza</p>

                <p>$20.000</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Tarifa por servicio de DjangoBnB</p>

                <p>$79.632</p>
            </div>

            <hr />

            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total sin incluir impuestos</p>

                <p>$499.632</p>
            </div>
        </aside>
    )
}

export default ReservationSidebar;