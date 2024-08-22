'use client';

import { useRouter } from "next/navigation";

import { resetAuthCookies } from "./lib/actions";

import MenuLink from "./navbar/MenuLink";

const LogoutButton: React.FC = () => {
    const router = useRouter();

    const submitLogout = async () => {
        console.log('Submitting');
        resetAuthCookies();
    
        router.refresh(); 
        router.push('/');
    }

    return (
        <MenuLink
            label="Cerrar Sesión"
            onClick={submitLogout}

        />
    )
}

export default LogoutButton;