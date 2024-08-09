import Button from "./Button";
import Icon from "./Icon";

export default function Plans() {
    const plans = [
        {
            id: 1,
            title: 'Light',
            description: 'Ideal para pequenas empresas que buscam automatizar atendimento básico.',
            price: 999.99,
            recommended: false,
            features: [
                'Criação de fluxo de automações',
                'Disparo de mensagens ilimitados',
                'Super chat com atalhos',
                'Suporte para implantação'
            ]  
        },
        {
            id: 2,
            title: 'Pro',
            description: 'Ideal para empresas que buscam automatizar atendimento avançado.',
            price: 1999.99,
            recommended: true,
            features: [
                'Criação de fluxo de automações',
                'Disparo de mensagens ilimitados',
                'Super chat com atalhos',
                'Suporte para implantação'
            ]  
        },
        {
            id: 3,
            title: 'Enterprise',
            description: 'Ideal para empresas que buscam automatizar atendimento avançado.',
            price: 2999.99,
            recommended: false,
            features: [
                'Criação de fluxo de automações',
                'Disparo de mensagens ilimitados',
                'Super chat com atalhos',
                'Suporte para implantação'
            ]  
        }
    ]

    if(plans) {
        return (
            <div className="grid grid-cols-3 gap-4">
                {plans.map((plan: any, index: number) => (
                    <div key={index} className={`rounded-md flex flex-col py-10 px-4 border-[1px] ${plan.recommended ? 'border-[var(--primary-color)]' : 'border-[var(--default-border)]'} space-y-8 shadow-sm`}>
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-2xl text-[var(--secondary-color)] font-bold">{plan.title}</h2>
                            <p className="text-sm text-[var(--secondary-color)]">{plan.description}</p>
                        </div>
                        <div>
                            <p className="text-sm text-[var(--features-text)]"><span className="text-4xl text-[var(--secondary-color)] font-bold">R$ {plan.price}</span> /mês</p>
                        </div>
                        <div className="flex flex-col space-y-2 items-center justify-center">
                            <Button title="Assinar agora" className={`${plan.recommended ? 'blue-gradient-background text-white' : 'gray-gradient-background'} w-[15.313rem] h-[2.5rem] btn-medium text-base hover:shadow-md`} />
                            <a href="#">
                                <div className="flex flex-row items-center gap-2 text-sm text-[var(--secondary-color)] hover:text-[var(--primary-color)]">
                                    <p>Fale com um especialista</p>
                                    <Icon icon="Bs BsArrowRight" className="w-4 h-4" />
                                </div>
                            </a>
                        </div>
                        <div className={`py-4 px-2 flex flex-col space-y-2 border-t-[1px] border-b-[1px] border-[var(--default-border)]`}>
                            <div className="flex flex-row items-center gap-2">
                                <Icon icon="Hi2 HiOutlineUser" className="w-5 h-5 text-[var(--primary-color)]" />
                                <p className="text-sm text-[var(--secondary-color)]">01 Número de WhatsApp</p>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <Icon icon="Fa6 FaWhatsapp" className="w-5 h-5 text-[var(--primary-color)]" />
                                <p className="text-sm text-[var(--secondary-color)]">Até 05 atendentes conectados</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2 px-2">
                            {plan.features.map((feature: any, index: number) => (
                                <div key={index} className="flex flex-row items-center gap-3">
                                    <Icon icon="Io IoIosCheckmarkCircleOutline" className="w-5 h-5 text-[var(--primary-color)]" />
                                    <p className="text-sm text-[var(--secondary-color)] font-semibold">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
};
