import photo from '../assets/images/testimonial_photo_model.png';
import photo_2 from '../assets/images/testimonial_photo_model_2.png';
import photo_3 from '../assets/images/testimonial_photo_model_3.png';

export default function Testimonial() {
    const testimonial = [
        {
            id: 1,
            photo: photo,
            text: "Troia Chat simplificou completamente nosso atendimento ao cliente. Agora, conseguimos gerenciar todas as interações de WhatsApp em um único painel, o que realmente otimizou nosso tempo de resposta. A equipe também adorou a interface. É uma mudança que fez toda a diferença para nós!"
        },
        {
            id: 2,
            photo: photo_2,
            text: "Troia Chat simplificou completamente nosso atendimento ao cliente. Agora, conseguimos gerenciar todas as interações de WhatsApp em um único painel, o que realmente otimizou nosso tempo de resposta. A equipe também adorou a interface. É uma mudança que fez toda a diferença para nós!"
        },
        {
            id: 3,
            photo: photo_3,
            text: "Troia Chat simplificou completamente nosso atendimento ao cliente. Agora, conseguimos gerenciar todas as interações de WhatsApp em um único painel, o que realmente otimizou nosso tempo de resposta. A equipe também adorou a interface. É uma mudança que fez toda a diferença para nós!"
        }
    ]

    return (
        <div className='grid grid-cols-3 gap-8'>
            {testimonial.map((item: any, index: number) => (
                <div key={index} className='flex flex-col items-center p-8 bg-[var(--testimonial-background)] rounded-md border-[1px] border-[var(--default-border)]'>
                    <div className='w-24 h-24 border-[1px] border-[var(--default-border)] rounded-full flex items-center justify-center object-cover object-center -mt-20'>
                        <img className="w-24 h-24 rounded-full object-cover object-center" src={item.photo} alt="" />
                    </div>
                    <div>
                        <p className='text-sm text-[var(--box-conversation-text)] font-semibold text-center'>
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
};
