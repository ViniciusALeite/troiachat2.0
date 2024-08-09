import { useState } from "react";
import Answers from "./Answers";
import Icon from "../Icon";

export default function FrequentlyAskQuestions () {
    const [openAsks, setOpenAsks] = useState(false);

    const asks = [
        {
            id: 1,
            question: "Quantos usuários podem acessar a Troia Chat ao mesmo tempo?",
            answer: `
                Nossa plataforma permite múltiplos usuários simultâneos, garantindo que toda a sua equipe possa trabalhar de forma integrada e eficiente.
    
                Não há limite específico de usuários, mas recomendamos consultar nossos planos para mais detalhes sobre as capacidades.
            `
        }
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center mx-auto">
            <div onClick={() => setOpenAsks(!openAsks)} className="flex flex-col space-y-2 max-w-3xl w-full">
                {asks.map((question: any, index: number) => (
                    <div key={index} className="flex justify-between items-center rounded-md bg-[var(--questions-background)] p-4 w-full cursor-pointer">
                        {question.question}
                        <Icon icon="Md MdOutlineKeyboardArrowDown" className="w-5 h-5 text-[var(--box-conversation-text)]" />
                    </div>
                ))}

            </div>

            {openAsks && (<Answers answers={asks} />)}
        </div>
    )
};