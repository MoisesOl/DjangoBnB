'use client';

import Modal from "./Modal";
import useSearchModal, { SearchQuery } from "@/app/hooks/useSearchModal";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import { useState } from "react";
import { Range } from "react-date-range";
import CustomButton from "../forms/CustomButton";
import DatePicker from "../forms/Calendar";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}


const SearchModal = () => {
    let content = (<></>);
    const searchModal = useSearchModal();
    const [dateRange, setDateRange] = useState<Range>(initialDateRange)
    const [country, setCountry] = useState<SelectCountryValue>();
    const [numGuests, setNumGuests] = useState<string>('1');
    const [numBedrooms, setNumBedrooms] = useState<string>('0');
    const [numBathrooms, setNumBathrooms] = useState<string>('0');

    //
    //
    const closeAndSearch = () => {
        const newSearchQuery: SearchQuery = {
            country: country?.label,
            checkIn: dateRange.startDate,
            checkOut: dateRange.endDate,
            guests: parseInt(numGuests),
            bedrooms: parseInt(numBedrooms),
            bathrooms: parseInt(numBathrooms),
            category: ''
        }

        searchModal.setQuery(newSearchQuery);
        searchModal.close();
    }

    //
    // Set date range

    const _setDateRange = (selection: Range) => {
        if (searchModal.step === 'checkin') {
            searchModal.open('checkout')
        } else if (searchModal.step === 'checkout') {

        }

        setDateRange(selection);
    }

    //
    // Contents

    const contentLocation = (
        <>
            <h2 className="mb-6 text-2xl">Búsqueda por región</h2>
        
            <SelectCountry 
                value={country}
                onChange={(value) => setCountry(value as SelectCountryValue)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton 
                    label="Fecha de llegada ->"
                    onClick={() => searchModal.open('checkin')}
                />
            </div>
        </>

    )

    const contentCheckin = (
        <>
            <h2 className="mb-6 text-2xl">Fecha de llegada</h2>

            <DatePicker 
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton 
                    label="<- Ubicación"
                    onClick={() => searchModal.open('location')}
                />
                <CustomButton 
                    label="Fecha de salida ->"
                    onClick={() => searchModal.open('checkout')}
                />
            </div>
        </>
    )

    const contentCheckout = (
        <>
            <h2 className="mb-6 text-2xl">Fecha de salida</h2>

            <DatePicker 
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton 
                    label="<- Fecha de llegada"
                    onClick={() => searchModal.open('checkin')}
                />
                <CustomButton 
                    label="Detalles ->"
                    onClick={() => searchModal.open('details')}
                />
            </div>
        </>
    )

    const contentDetails = (
        <>
            <h2 className="mb-6 text-2xl">Detalles</h2>

            <div className="space-y-4">
                <div className="space-y-4">
                    <label>Numero de invitados:</label>
                    <input 
                        type="number" 
                        min="1" 
                        value={numGuests}
                        placeholder="Número de invitados..."
                        onChange={(e) => setNumGuests(e.target.value)}
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    />
                </div>
                <div className="space-y-4">
                    <label>Numero de habitaciones:</label>
                    <input 
                        type="number" 
                        min="1" 
                        value={numBedrooms}
                        placeholder="Número de habitaciones..."
                        onChange={(e) => setNumBedrooms(e.target.value)}
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    />
                </div>
                <div className="space-y-4">
                    <label>Numero de baños:</label>
                    <input 
                        type="number" 
                        min="1" 
                        value={numBathrooms}
                        placeholder="Número de baños..."
                        onChange={(e) => setNumBathrooms(e.target.value)}
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    />
                </div>
            </div>

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton 
                    label="<- Fecha de salida"
                    onClick={() => searchModal.open('checkout')}
                />
                <CustomButton 
                    label="Buscar"
                    onClick={closeAndSearch}
                />
            </div>
        </>
    )

    if (searchModal.step == 'location') {
        content = contentLocation;
    } else if (searchModal.step == 'checkin') {
        content = contentCheckin;
    } else if (searchModal.step == 'checkout') {
        content = contentCheckout;
    } else if (searchModal.step == 'details') {
        content = contentDetails;
    }
    

    return (
        <Modal
            label="Buscar"
            content={content}
            isOpen={searchModal.isOpen}
            close={searchModal.close}
        />
    )
}

export default SearchModal;