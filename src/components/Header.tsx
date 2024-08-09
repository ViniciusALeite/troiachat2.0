import Button from "./Button";
import logo from '../assets/images/Group 20.png';

type Props = {
    className?: string;
}

export default function Header({ className }: Props) {
    return (
        <div className={`w-full flex flex-row justify-between items-center px-40 h-20 py-14 ${className}`}>
            <div className="flex flex-row items-center">
                <img src={logo} alt="Logo do Troiachat" />
                <nav className="ml-40">
                    <ul className="flex flex-row items-center gap-8">
                        <li className="text-lg text-white font-bold cursor-pointer">Início</li>
                        <li className="text-lg text-white font-bold cursor-pointer">Recursos</li>
                        <li className="text-lg text-white font-bold cursor-pointer">Plataforma</li>
                        <li className="text-lg text-white font-bold cursor-pointer">APIs</li>
                        <li className="text-lg text-white font-bold cursor-pointer">Planos</li>
                        <li className="text-lg text-white font-bold cursor-pointer">Contato</li>
                    </ul>
                </nav>
            </div>
            <div className="flex flex-row items-center gap-2">
                <Button className="btn-medium text-white font-bold text-base" title="Acessar" />
                <Button className="bg-white text-[var(--primary-color)] btn-medium font-bold w-[11.25rem] h-[2.5rem] text-base shadow-md" title="Fale conosco" />
            </div>
        </div>
    )
};
