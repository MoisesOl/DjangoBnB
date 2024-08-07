'use client';

import Modal from "./Modal";

import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal()

    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="Correo electrónico" type="email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <input placeholder="Contraseña" type="password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    Mensaje de error
                </div>

                <CustomButton
                    label="Iniciar Sesión"
                    onClick={() => console.log('Test')}
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Iniciar sesión"
            content={content}
        />
    )
}

export default LoginModal;