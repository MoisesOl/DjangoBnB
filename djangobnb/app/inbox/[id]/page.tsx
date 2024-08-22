import { getUserId } from "@/app/components/lib/actions";
import React, { useState, useEffect } from "react";
import apiService from "@/app/services/apiService";
import ConversationDetail from "@/app/components/inbox/ConversationDetail";
import { UserType } from "../page";
import { getAccessToken } from "@/app/components/lib/actions";

export type MessageType = {
    id: string;
    name: string;
    body: string;
    conversationId: string;
    sent_to: UserType;
    created_by: UserType;
}

const ConversationPage = async ({ params }: { params: {id: string}}) => {
    const userId = await getUserId();
    const token = await getAccessToken();

    if(!userId || !token) {
        return (
            <main className="max-w-[1500px] mx-auto px-6 py-12">
                <p>Necesitas iniciar sesión para ver esta página...</p>
            </main>
        )
    } 
    
    const conversation = await apiService.get(`/api/chat/${params.id}`)

    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <ConversationDetail
                token={token}
                conversation={conversation.conversation}
                messages={conversation.messages}
                userId={userId}
            />
        </main>
    )
}

export default ConversationPage;