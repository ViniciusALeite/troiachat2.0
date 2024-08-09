import logo from '../assets/images/Group 20.png';

export default function Footer() {
    return (
        <footer className="flex flex-row h-[20rem] w-full">
            <div className="bg-[var(--footer-background)] w-[40rem] p-14 flex flex-col items-center justify-center text-center space-y-4">
                <img src={logo} alt="" />
                <div className='flex flex-col space-y-4'>
                    <p className='text-sm text-[var(--box-conversation-text)]'>TroiaChat é a solução para gestão de atendimentos da sua empresa.</p>
                    <div className='flex flex-col space-y-1'>
                        <p className='text-sm text-[var(--box-conversation-text)]'>0800 500 9929</p>
                        <p className='text-sm text-[var(--box-conversation-text)]'>(47) 99123-6370</p>
                        <p className='text-sm text-[var(--box-conversation-text)]'>suporte@troiachat.com</p>
                    </div>
                </div>
            </div>
            <div className="section-background-with-pattern w-full p-20">
                <div className='grid grid-cols-3 w-full mx-auto'>
                    <div className='flex flex-col items-center justify-center text-center space-y-4'>
                        <h2 className='text-lg text-white font-bold'>Navegação</h2>
                        <ul className='flex flex-col space-y-1'>
                            <li className='text-white text-sm'>Início</li>
                            <li className='text-white text-sm'>Recursos</li>
                            <li className='text-white text-sm'>Plataforma</li>
                            <li className='text-white text-sm'>APIs</li>
                            <li className='text-white text-sm'>Planos</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center space-y-4'>
                        <h2 className='text-lg text-white font-bold'>Saiba mais</h2>
                        <ul className='flex flex-col space-y-1'>
                            <li className='text-white text-sm'>Gestão de Atendimentos</li>
                            <li className='text-white text-sm'>Gestão Comercial</li>
                            <li className='text-white text-sm'>Gestão de Eventos</li>
                            <li className='text-white text-sm'>Gestão de Chamados</li>
                            <li className='text-white text-sm'>Fluxo de Automaçãos</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center space-y-4'>
                        <h2 className='text-lg text-white font-bold'>Suporte</h2>
                        <ul className='flex flex-col space-y-1'>
                            <li className='text-white text-sm'>Fale conosco</li>
                            <li className='text-white text-sm'>Política de privacidade</li>
                            <li className='text-white text-sm'>Termos de uso</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};
