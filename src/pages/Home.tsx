import Button from "../components/Button";
import Header from "../components/Header";
import Icon from "../components/Icon";
import smartphone from '../assets/images/smartphone.png';
import notification_baloon from '../assets/images/NotificaçõesIA.png';
import management from '../assets/images/Gestão.png';
import service from '../assets/images/Atendimento.png';
import integrations from '../assets/images/integracoes.png';
import marketing from '../assets/images/Marketing.png';
import iconService from '../assets/images/keyfeatures_1.png';
import iconSalesFunnel from '../assets/images/keyfeatures_2.png';
import iconCalendar from '../assets/images/keyfeatures_3.png';
import iconTicketManagement from '../assets/images/keyfeatures_4.png';
import automation from '../assets/images/keyfeatures_5.png';
import chat_lightMode from '../assets/images/chat_lightMode.png';
import smartphone_2 from '../assets/images/smartphone_2.png';
import smartphone_3 from '../assets/images/smartphone_3.png';
import ecommerce from '../assets/images/ecommerce.png';
import Plans from "../components/Plans";
import Testimonial from "../components/Testimonial";
import client from '../assets/images/client.png';
import FrequentlyAskQuestions from "../components/AskQuestions/FrequentlyAskQuentions";
import Footer from "../components/Footer";

export default function Home() {
  const keyFeatures = [
    {
      id: 1,
      title: "Gestão de Atendimentos Integrada ao WhatsApp e Telegram",
      description: "Gerencie mensagens, automatize respostas e melhore a eficiência do seu suporte.",
      icon: iconService
    },
    {
      id: 2,
      title: "Gestão Comercial com Funil de Vendas",
      description: "Utilize funis de vendas para acompanhar cada etapa do processo e aumentar a conversão.",
      icon: iconSalesFunnel
    },
    {
      id: 3,
      title: "Gestão de Eventos com Agenda Integrada ao Google",
      description: "Gerencie mensagens, automatize respostas e melhore a eficiência do seu suporte.",
      icon: iconCalendar
    },
    {
      id: 4,
      title: "Gestão de Chamados Simplificada",
      description: "Acompanhe o status, atribua tarefas e resolva problemas rapidamente com nossa plataforma intuitiva.",
      icon: iconTicketManagement
    },
    {
      id: 5,
      title: "Automação de Fluxos de Trabalho",
      description: "Desde a recepção de mensagens até a resolução de problemas, cada etapa é otimizada para garantir agilidade e eficiência.",
      icon: automation
    }
  ]

  return (
    <>
      <div className="header-background-block relative">
        <div className="w-full h-screen header-background">
          <div className="absolute header-pattern w-full h-full"></div>
          <Header className="z-50" />

          <section className="max-w-3xl w-full items-center justify-center text-center space-y-10 mx-auto mt-52">
            <div className="flex flex-col space-y-6">
              <h2 className="text-5xl text-white font-bold">A Solução Completa para o Atendimento <span className="text-[var(--primary-color)]">multicanal</span></h2>
              <p className="text-base text-white font-normal">Simplifique sua operação com Troia Chat. Gerencie leads de WhatsApp, Instagram e Messenger em um único lugar, otimizando o tempo de resposta e melhorando a experiência do seu cliente.</p>
            </div>
            
            <div className="flex flex-row items-center gap-8 justify-center">
              <Button title="Fale com um Especialista" className="w-[15.313rem] h-[2.5rem] btn-medium text-base text-white blue-gradient-background" />
              <div className="flex flex-row items-center gap-4 w-[15.313rem] h-[2.5rem]">
                <div className="flex items-center justify-center bg-white w-[1.875rem] h-[1.875rem] rounded-full">
                  <Icon icon="Io IoMdPlay" className="w-3 h-3 text-[var(--primary-color)]" />
                </div>
                <button className="text-white text-base">Veja como funciona</button>
              </div>
            </div>
          </section>
          
        </div>
      </div>

      <main className="flex flex-col mt-20">

        <section className="h-full bg-white flex flex-col max-w-[72.625rem] mx-auto justify-between w-full">
          <div className="flex flex-row justify-between items-center">
            <img src={smartphone}  alt="Tela de um smartphone mostrando alguns exemplos de mensagens." />
            <div className="max-w-xl w-full space-y-8">
              <h2 className="text-4xl text-[var(--secondary-color)] font-bold"><span className="text-[var(--primary-color)]">Troia Chat:</span> Transforme o Seu Atendimento ao Cliente</h2>
              <p className="text-base text-[var(--tertiary-color)] font-semibold">
                Nossa tecnologia permite que cada cliente receba a atenção que merece, proporcionando uma gestão otimizada e respostas mais rápidas.
                <br />
                <br />
                Escolha a Troia Chat e sinta a diferença de um atendimento feito com excelência técnica.
              </p>
              <button className="w-[15.313rem] h-[2.5rem] rounded-md blue-gradient-background text-white">Fale com um Especialista</button>
            </div>
          </div>
          <div className="w-full items-center justify-center mx-auto my-32">
            <div className="max-w-xl w-full mx-auto text-center flex items-center justify-center">
              <h2 className="text-[var(--secondary-color)] text-4xl text-center font-semibold"><span className="text-[var(--primary-color)]">Toda a sua equipe</span> usando apenas uma plataforma!</h2>
            </div>
            <div className="flex flex-row mt-8 gap-6 items-center justify-center">

              <div className="flex flex-col gap-4">
                <div>
                  <img src={notification_baloon} alt="Um balão de conversa com ícone de IA, que fala sobre a integração com IA." />
                </div>
                <div>
                  <img src={management} alt="Um balão que mostra dois exemplos de departamentos criados por uma empresa, e que serão utilizados para o direcionamento do seu atendimento." />
                </div>
              </div>

              {/* Box 2 */}
              <div className="object-cover object-center">
                <img className="object-cover object-center" src={service} alt="Um balão que lista quatro conversas de um app de atendimento multicanal." />
              </div>

              {/* Box 3 */}
              <div className="flex flex-col gap-4">
                <div>
                  <img src={integrations} alt="Ícones do Instagram, Whatsapp e Telegram." />
                </div>
                <div>
                  <img src={marketing} alt="Balão com cinco widgets que mostram indicadores de gestão de marketing." />
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <section className="section-background-with-pattern w-full h-full py-32">
          <div className="flex flex-col justify-center mx-auto w-full text-center">
            <h2 className="text-white font-bold text-4xl">Conheça os <span className="text-[var(--primary-color)]">Principais Recursos</span></h2>
            <div className="flex flex-row items-center gap-4 mt-10 mx-auto">
              {keyFeatures.map((feature: any, index: number) => (
                <div key={index} className="w-[22rem] h-72 rounded-md flex flex-col p-4 bg-white justify-between">
                  <div className="flex flex-col space-y-4">
                    <div className="object-cover object-center">
                      <img src={feature.icon} className="object-cover object-center" />
                    </div>
                    <div className="flex flex-col space-y-4 text-left">
                      <h3 className="text-[var(--features-text-title)] text-xl font-bold">{feature.title}</h3>
                      <p className="text-[var(--features-text)] text-sm font-normal">{feature.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-end items-end">
                    <Button title="Saiba Mais" className="w-[10.625rem] h-[2.5rem] btn-medium text-base font-semibold shadow-sm text-[var(--secondary-color)] gray-gradient-background hover:shadow-lg" />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row items-center justify-center mx-auto gap-2 mt-10">
              <Button icon="Md MdOutlineKeyboardArrowLeft" iconSize="w-7 h-7" className="w-10 h-10 rounded-md flex items-center justify-center text-white shadow-md blue-gradient-background" />
              <Button icon="Md MdOutlineKeyboardArrowRight" iconSize="w-7 h-7" className="w-10 h-10 rounded-md flex items-center justify-center text-white shadow-md blue-gradient-background" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mx-auto mt-20 mb-10">
            <h2 className="text-4xl text-white font-bold">Sistema 100% <span className="text-[var(--primary-color)] text-center">Intuitivo</span></h2>
            <p className="text-white font-normal text-base text-center mt-6 max-w-2xl">Navegue facilmente entre as funções e melhore a experiência dos seus clientes com um sistema projetado para maximizar a produtividade do seu time.</p>
            <div className="flex items-center justify-center mx-auto w-[60rem] shadow-lg rounded-md mt-10">
              <img className="shadow-lg rounded-md" src={chat_lightMode} alt="Imagens dos sistema." />
            </div>
            <div className="flex flex-row items-center justify-center mx-auto gap-2 mt-10">
              <Button icon="Md MdOutlineKeyboardArrowLeft" iconSize="w-7 h-7" className="w-10 h-10 rounded-md flex items-center justify-center text-white shadow-md blue-gradient-background" />
              <Button icon="Md MdOutlineKeyboardArrowRight" iconSize="w-7 h-7" className="w-10 h-10 rounded-md flex items-center justify-center text-white shadow-md blue-gradient-background" />
            </div>
          </div>
        </section>

        <section className="h-full bg-white flex flex-col max-w-[72.625rem] mx-auto justify-between w-full py-32">
          <div className="flex flex-row items-center justify-between">
            <div className="max-w-lg w-full flex flex-col space-y-4">
              <h2 className="text-4xl text-[var(--secondary-color)] font-bold">Reduza o tempo de atendimento e melhore a <span className="text-[var(--primary-color)]">experiência do cliente</span></h2>
              <p className="text-base text-[var(--features-text)]">Reduza o tempo de atendimento e otimize os processos do seu time, a Troia Chat ajuda a sua empresa a alcançar suas metas com mais agilidade e tranquilidade.</p>
              <ul className="flex flex-col space-y-2">
                <li>
                  <div className="flex flex-row items-center gap-2.5 text-sm text-[var(--features-text)] font-semibold">
                    <div>
                      <Icon icon="Io IoIosCheckmarkCircleOutline" className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                    Múltiplos atendentes
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center gap-2.5 text-sm text-[var(--features-text)] font-semibold">
                    <div>
                      <Icon icon="Io IoIosCheckmarkCircleOutline" className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                    Fluxo de atendimento equilibrado
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center gap-2.5 text-sm text-[var(--features-text)] font-semibold">
                    <div>
                      <Icon icon="Io IoIosCheckmarkCircleOutline" className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                    Mensagens rápidas
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center gap-2.5 text-sm text-[var(--features-text)] font-semibold">
                    <div>
                      <Icon icon="Io IoIosCheckmarkCircleOutline" className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                    Inteligência Artificial
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img src={smartphone_2} alt="Tela de um smartphone mostrando alguns exemplos de mensagens." />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div>
              <img src={smartphone_3} alt="Tela de um smartphone mostrando alguns exemplos de mensagens." />
            </div>
            <div className="max-w-lg w-full flex flex-col space-y-4">
              <h2 className="text-4xl text-[var(--secondary-color)] font-bold">Alcance mais clientes, gere engajamento e <span className="text-[var(--primary-color)]">aumente a conversão</span></h2>
              <p className="text-base text-[var(--features-text)]">Nossas funcionalidades te permitem otimizar suas ações de marketing para vender mais vezes para o mesmo cliente e aumentar a conversão de novos clientes.</p>
              <ul className="flex flex-col space-y-2">
                <li>
                  <div className="flex flex-row items-center gap-2.5 text-sm text-[var(--features-text)] font-semibold">
                    <div>
                      <Icon icon="Io IoIosCheckmarkCircleOutline" className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                    Mantenha sua base de clientes aquecida
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center gap-2.5 text-sm text-[var(--features-text)] font-semibold">
                    <div>
                      <Icon icon="Io IoIosCheckmarkCircleOutline" className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                    Crie campanhas personalizadas incentivando a recompra
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center gap-2.5 text-sm text-[var(--features-text)] font-semibold">
                    <div>
                      <Icon icon="Io IoIosCheckmarkCircleOutline" className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                    Envie condições especiais para fidelizar clientes
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-center gap-2.5 text-sm text-[var(--features-text)] font-semibold">
                    <div>
                      <Icon icon="Io IoIosCheckmarkCircleOutline" className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                    Seja lembrado por seus clientes
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-background-with-pattern w-full h-full py-32">
          <div className="flex flex-col items-center justify-center text-center mx-auto">
            <h2 className="text-4xl text-white font-bold">Soluções pensadas para a <span className="text-[var(--primary-color)]">sua empresa!</span></h2>
            <p className="text-base text-white mt-4">Transformamos o seu atendimento  através de diversas funcionalidades, <br></br>seja qual for o sue negócio.</p>
            <div className="max-w-5xl w-full mt-10">
              <div className="grid grid-cols-4 gap-4 w-full">
                <div className="p-2.5 flex items-center justify-center shadow-sm rounded-md text-base text-white font-semibold bg-[var(--tabs-background)]">
                  Contabilidade
                </div>
                <div className="p-2.5 flex items-center justify-center shadow-sm rounded-md text-base text-white font-semibold bg-[var(--tabs-background)]">
                  E-Commerce
                </div>
                <div className="p-2.5 flex items-center justify-center shadow-sm rounded-md text-base text-white font-semibold bg-[var(--tabs-background)]">
                  Saúde
                </div>
                <div className="p-2.5 flex items-center justify-center shadow-sm rounded-md text-base text-white font-semibold bg-[var(--tabs-background)]">
                  Educação
                </div>
              </div>
            </div>
            <div className="header-background-block w-[80rem] h-[38rem] p-14 rounded-md mt-6 flex items-center justify-center">
              <div>
                <img src={ecommerce} alt="" />
              </div>
            </div>
            <div className="-mt-7">
              <Button title="Assine agora" className="w-[15.313rem] h-[3rem] btn-medium text-base text-white blue-gradient-background hover:shadow-lg" />
            </div>
          </div>
          <div className="mt-14 max-w-7xl w-full mx-auto">
            <div className="grid grid-cols-3">
              <div className="flex flex-col space-y-4 text-center items-center">
                <div className="flex flex-row items-end gap-1.5">
                  <Icon icon="Fa FaPlus" className="mb-1 w-5 h-5 text-[var(--primary-color)]" />
                  <h2 className="text-white text-4xl font-bold">de 200</h2>
                </div>
                <p className="text-base text-white font-normal">Empreendedores que ganharam tempo para focar na estratégia do negócio.</p>
              </div>
              <div className="flex flex-col space-y-4 text-center items-center">
                <div className="flex flex-row items-end gap-1.5">
                  <Icon icon="Fa FaPlus" className="mb-1 w-5 h-5 text-[var(--primary-color)]" />
                  <h2 className="text-white text-4xl font-bold">de 800</h2>
                </div>
                <p className="text-base text-white font-normal">Funis de conversão já foram criados pelos nossos clientes.</p>
              </div>
              <div className="flex flex-col space-y-4 text-center items-center">
                <div className="flex flex-row items-end gap-1.5">
                  <Icon icon="Fa FaPlus" className="mb-1 w-5 h-5 text-[var(--primary-color)]" />
                  <h2 className="text-white text-4xl font-bold">de 85%</h2>
                </div>
                <p className="text-base text-white font-normal">Dos fluxos de atendimento foram otimizados e tiveram maiores conversões.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="h-full bg-white flex flex-col max-w-[72.625rem] mx-auto justify-between w-full py-32 space-y-6">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col items-center text-center max-w-xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold text-[var(--secondary-color)]">Temos o <span className="text-[var(--primary-color)]">plano ideal</span> para otimizar os processos da <span className="text-[var(--primary-color)]">sua empresa</span></h2>
              <p className="text-base text-[var(--secondary-color)]">Selecione o plano que mais combina com você e comece a acelerar seu processo de atendimento!</p>
            </div>
            <Plans />
          </div>

          <div className="py-14 flex flex-col items-center justify-center mx-auto text-center">
            <div className="flex flex-col space-y-20">
              <h2 className="text-[var(--secondary-color)] text-4xl font-bold">O que dizem os <br></br><span className="text-[var(--primary-color)]">Nossos Clientes</span></h2>
              <div>
                <Testimonial />
              </div>
            </div>
            <div className="flex flex-row gap-1 mt-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--slim-pagination)]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--slim-pagination)]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--slim-pagination)]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--slim-pagination)]"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--slim-pagination)]"></span>
            </div>
            <div className="flex items-center justify-center mt-8">
              <Button title="Conheça nossos planos" className="w-[15.313rem] h-[3rem] btn-medium text-base text-white blue-gradient-background hover:shadow-lg" />
            </div>
          </div>

          <div className="py-14 flex flex-row justify-between items-center mx-auto gap-8">
            <div className="flex items-center justify-center object-cover object-center w-[37.5rem] h-[20rem] rounded-md">
              <img className="w-[37.5rem] h-[20rem] object-cover object-center rounded-md" src={client} alt="Foto de um grupo de pessoas conversando e dois homens apertando as mãos." />
            </div>
            <div className="flex flex-col space-y-4 max-w-xl">
              <h2 className="text-4xl text-[var(--secondary-color)] font-bold"><span className="text-[var(--primary-color)]">O Futuro</span> do <br></br>Atendimento ao cliente</h2>
              <p className="text-base text-[var(--box-conversation-text)]">
                Está pronto para levar a comunicação da sua empresa ao próximo nível?
                <br />
                <br />
                Simplifique processos, aumente a produtividade e veja a diferença que um atendimento de qualidade pode fazer.
              </p>
              <Button title="Comece agora" className="w-[15.313rem] h-[3rem] btn-medium text-base text-white blue-gradient-background hover:shadow-lg" />
            </div>
          </div>

          <div className="py-14 flex flex-col justify-between items-center mx-auto gap-8 w-full">
            <h2 className="text-4xl text-[var(--secondary-color)] font-bold"><span className="text-[var(--primary-color)]">Dúvidas</span> frequentes</h2>
            <FrequentlyAskQuestions />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}