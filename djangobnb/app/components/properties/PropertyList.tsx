'use client';

import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";
import apiService from "@/app/services/apiService";

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
    is_favorite: boolean;
}

interface PropertyListProps {
    landlord_id?: string | null
}

const PropertyList: React.FC<PropertyListProps> = ({ landlord_id }) => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const markFavorite = (id: string, is_favorite: boolean) => {
        const tmpProperties = properties.map((property: PropertyType) => {
            if (property.id == id) {
                property.is_favorite = is_favorite
            
                if (is_favorite) {
                    console.log('Añadido a favoritos')
                } else {
                    console.log('Quitado de favoritos')
                }
            }

            return property;

        })

        setProperties(tmpProperties);
    };

    const getProperties = async () => {
        let url = '/api/properties/';

        if (landlord_id) {
            url += `?landlord_id=${landlord_id}`;
        }

        const tmpProperties = await apiService.get(url);

        setProperties(tmpProperties.data.map((property: PropertyType)=> {
            if (tmpProperties.favorites.includes(property.id)) {
                property.is_favorite = true;
            } else {
                property.is_favorite = false;
            }

            return property;
        }));
    };

    useEffect(() => {
        getProperties();
    }, [landlord_id]);  // Dependencia de landlord_id para actualizar los datos

    return (
        <>
            {properties.map((property) => (
                <PropertyListItem
                    key={property.id}
                    property={property}
                    markFavorite={(is_favorite: any) => markFavorite(property.id, is_favorite)}
                />
            ))}
        </>
    );
}

export default PropertyList;