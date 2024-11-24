'use client';
import React, { useState, useRef, useEffect } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MenuIcon from "@mui/icons-material/Menu";
import GlassesIcon from "@mui/icons-material/Visibility";
import Container from "../container/container";

const Header = () => {
    const [idx, setIdx] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    
      const openModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
        setModalContent(null);
      };
      const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    
    
      const toggleSound = () => {
        const audio = document.getElementById("audio");
        if (isPlaying) {
          audio.pause();
          setIsPlaying(false);
        } else {
          audio.play();
          setIsPlaying(true);
        }        
      };
    

    const categories = [
        { id: 2, name: "Вазорат" },
        { id: 3, name: "Санадҳои ҳуқуқӣ" },
        { id: 4, name: "Ҳифзи иҷтимоӣ" },
        { id: 5, name: "Эълонҳо ва озмунҳо" },
        { id: 7, name: "Лоиҳаҳо" },
        { id: 6, name: "Агентӣ ва хадамотҳо" },
    ];

    const subCategories = [
        { id: 1, categoryId: 1, name: "Option 1" },
        { id: 2, categoryId: 1, name: "Option 2" },
        { id: 3, categoryId: 1, name: "Option 3" },
        { id: 7, categoryId: 3, name: "Барномаҳои миллӣ" },
        { id: 8, categoryId: 3, name: "Қарорҳо" },
        { id: 9, categoryId: 3, name: "Қонунҳо" },
        { id: 10, categoryId: 3, name: "Стратегияҳо" },
        { id: 11, categoryId: 3, name: "Ҳуҷҷатҳои зарурӣ" },
        { id: 12, categoryId: 3, name: "Ҳаракати глобалии васеъкунии ғизо дар Тоҷикистон" },
        { id: 16, categoryId: 5, name: "Майдончаи савдо" },
        { id: 17, categoryId: 5, name: "Эълонҳо ва озмунҳо" },
        { id: 19, categoryId: 6, name: "Хадамоти назорати давлатии тандурустӣ ва ҳифзи иҷтимоии аҳолӣ" },
    ];

    const toggleDropdown = (id) => {
        if (idx === id) {
            setIsOpen(!isOpen);
        } else {
            setIdx(id);
            setIsOpen(true);
        }
    };

    useEffect(() => {
        if (!isOpen) {
            dropdownRef.current.style.height = '0px';
        }
    }, [isOpen]);

    return (
        <div>

            <Container>
                <div className=" flex justify-between items-center py-3 container z-10">
                    <ul className="flex">
                        {/* Герб Modal Trigger */}
                        <li>
                            <button onClick={() => openModal("Герб")} className="flex items-center gap-1 px-4 py-2">
                                <img src="https://maorif.tj/img/gerb.png" alt="Герб" />
                                <span>Герб</span>
                            </button>
                        </li>

                        {/* Флаг Modal Trigger */}
                        <li>
                            <button onClick={() => openModal("Флаг")} className="flex items-center gap-1 px-4 py-2">
                                <img src="https://maorif.tj/img/flag.png" alt="Флаг" />
                                <span>Флаг</span>
                            </button>
                        </li>

                        {/* Гимн Audio */}
                        <li className="flex items-center gap-1">
                            <button onClick={toggleSound} className="flex items-center gap-1">
                                <img src="https://maorif.tj/img/note.png" alt="Нота" />
                                <span>{isPlaying ? "Пауза" : "Гимн"}</span>
                            </button>
                            <audio id="audio" style={{ display: "none" }} src="https://maorif.tj/audio/national-anthem.mp3"></audio>
                        </li>
                    </ul>

                    {/* Contact Information */}
                    <div className="flex gap-4 items-center">
                        {/* Phone Number */}
                        <a
                            className="text-[#2D45A9] text-base gap-1 items-center hidden lg:flex"
                            href="tel:+9922277686"
                        >
                            <PhoneIcon fontSize="small" />
                            <span>+992-227-76-86</span>
                        </a>

                        {/* Social Media Links */}
                        <ul className="gap-2 hidden md:flex">
                            <li>
                                <a
                                    href="https://t.me/vazoratimaorif"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <TelegramIcon className="text-[#0088cc]" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com/@user-ly1eo9fy6r"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <YouTubeIcon className="text-[#FF0000]" />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon className="text-[#E4405F]" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/share/CKgg2ynYxZJyjzNc/?mibextid=A7sQZp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FacebookIcon className="text-[#3b5998]" />
                                </a>
                            </li>
                        </ul>

                        {/* Language Selector */}
                        <div className="relative w-fit block z-50">
                            <button
                                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                                className="relative flex items-center border-[#0068E21F] justify-between border text-[#6B7280]
          h-9 w-9 text-left bg-white rounded-full cursor-default border-neutral-200/70
          focus:outline-none text-sm"
                            >
                                <span className="truncate mx-auto">Ру</span>
                            </button>
                            {languageMenuOpen && (
                                <ul
                                    className="absolute w-12 py-1 mt-1 overflow-auto text-sm bg-white rounded-md shadow-md ring-1
              ring-black ring-opacity-5 focus:outline-none"
                                >
                                    <li>
                                        <a
                                            href="https://maorif.tj/locale-switch/tg"
                                            className="hover:bg-neutral-100 relative flex items-center h-full py-2 pl-3.5 text-gray-700 cursor-pointer select-none"
                                        >
                                            Тоҷ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://maorif.tj/locale-switch/en"
                                            className="hover:bg-neutral-100 relative flex items-center h-full py-2 pl-3.5 text-gray-700 cursor-pointer select-none"
                                        >
                                            En
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </div>



                        {/* Menu Button */}
                        <button
                            className="lg:hidden"
                            onClick={() => console.log("Open mobile menu")}
                        >
                            <MenuIcon fontSize="large" style={{ color: "#4c62c5" }} />
                        </button>
                    </div>
                    {/* Modal */}
                    {isModalOpen && (
                        <div
                            className="fixed top-0 left-0 z-[99] flex items-center justify-center w-screen h-screen bg-black bg-opacity-50"
                            onClick={closeModal}
                        >
                            <div
                                className="relative  w-full py-6 bg-white px-7 sm:max-w-4xl sm:rounded-lg overflow-y-auto max-h-[80vh]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-center justify-between pb-6">
                                    <h3 className="text-xl font-semibold">
                                        {modalContent === "Герб" ? "Государственный Герб" : "Государственный Флаг"}
                                    </h3>
                                    <button onClick={closeModal} className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 mt-5 mr-5 text-gray-600 rounded-full hover:text-gray-800 hover:bg-gray-50">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="space-y-5">
                                    <img
                                        className="w-72 mx-auto"
                                        src={
                                            modalContent === "Герб"
                                                ? "https://maorif.tj/img/gerbtjk.png"
                                                : "https://maorif.tj/img/flagtjk.png"
                                        }
                                        alt={modalContent}
                                    />
                                    <p>
                                        {modalContent === "Герб"
                                            ? "Государственный Герб 1. Государственный Герб Республики Таджикистан является символом государственного суверенитета Республики Таджикистан. 2. Государственный Герб Республики Таджикистан представляет собой изображение стилизованной короны и полукруга из семи звезд над ней в лучах солнца, восходящего из-за гор, покрытых снегом и обрамленного венцом, составленным справа из колосьев пшеницы, слева из веток хлопчатника с раскрытыми коробочками. Сверху венец перевит трехполосной лентой, в нижнем секторе помещена раскрытая книга на подставке. В цветном изображении Государственного Герба Республики Таджикистан корона, солнце, горы, колосья, книга и подставка - золотые; стебли и листья хлопчатника зеленые, полосы на лентах красная, белая и зеленая; обложка книги красная. а) на заседаниях официальной резиденции Президента Республики Таджикистан, Маджлиси Оли Республики Таджикистан, Правительства Республики Таджикистан, министерств и государственных комитетов Республики Таджикистан; на зданиях Маджлисов народных депутатов Горно-Бадахшанской автономной области, областей, г.Душанбе, городов, районов, органов исполнительной власти на местах (хукуматов), органов самоуправления в поселке и селе (джамоатов), судов, органов прокуратуры Республики Таджикистан, на зданиях дипломатических и консульских представительств, торговых учреждений Республики Таджикистан, находящихся за границей; б) в залах заседаний Президента Республики Таджикистан, Маджлиси Оли Республики Таджикистан, Президиума Маджлиси Оли Республики Таджикистан, Правительства Республики Таджикистан, Маджлисов народных депутатов Горно-Бадахшанской автономной области, областей, г.Душанбе, городов, районов, органов исполнительной власти на местах (хукуматов), собраний органов самоуправления в поселке и селе (джамоатов), а также в служебных кабинетах Президента Республики Таджикистан, Председателя Маджлиси Оли Республики Таджикистан и Премьер министра Республики Таджикистан, представителей Горно-Бадахшанской автономной области, областей, г.Душанбе, городов, районов и в залах судебных заседаний судов Республики Таджикистан, в помещениях органов записи актов гражданского состояния и помещениях торжественной регистрации рождения и брака; в) на печатях и бланках документов Президента Республики Таджикистан, Маджлиси Оли Республики Таджикистан, Президиума Маджлиси Оли Республики Таджикистан, Правительства Республики Таджикистан, министерств и государственных комитетов Республики Таджикистан, Маджлисов народных депутатов Горно-Бадахшанской автономной области, областей, г.Душанбе, городов, районов, органов исполнительной власти на местах (хукуматов), органов самоуправления в поселке и селе (джамоатов), судов и органов прокуратуры Республики Таджикистан, государственных нотариальных контор, органов записи актов гражданского состояния Республики Таджикистан, а также республиканских предприятий, учреждений и организаций, которым законами Республики Таджикистан дано право помещения изображения герба на печатях и бланках документов; г) на официальных изданиях Маджлиси Оли Республики Таджикистан, Президиума Маджлиси Оли Республики Таджикистан и Правительства Республики Таджикистан; д) на паспорте гражданина Республики Таджикистан, а также на дипломатических и других иностранных паспортах, которые выдаются гражданам Таджикистана; е) на пограничных столбах, устанавливаемых на Государственной границе Республики Таджикистан. Законом Республики Таджикистан могут предусматриваться другие случаи обязательного воспроизведения изображения Государственного Герба Республики Таджикистан. Право пользования изображением Государственного Герба Республики Таджикистан предприятиями, учреждениями и организациями, на названным в настоящем Положении, может быть дано только Правительством Республики Таджикистан. 3. Воспроизводимое изображение Государственного Герба Республики Таджикистан, независимо от его размеров, всегда должно в точности соответствовать эталонам цветного, черно-белого и объемного изображения герба, прилагаемым к настоящему Положению. 4. Порядок изготовления изображения Государственного Герба Республики Таджикистан, массового тиражирования изображения герба, использования, сохранения и уничтожения печати с изображением Государственного Герба устанавливается Правительством Республики Таджикистан. 5. Лица, виновные в надругательстве над Государственном Гербом Республики Таджикистан, несут ответственность в соответствии с законом Республики Таджикистан."
                                            : "Государственный флаг 1. Государственный флаг Республики Таджикистан является символом государственной независимости Республики Таджикистан. 2. Государственный флаг Республики Таджикистан представляет собой прямоугольную ткань с тремя горизонтально расположенными цветными полосами на поверхности: верхняя полоса красного цвета, ширина которой равна нижней зеленой полосе; средняя белая полоса равна половине ширины одной из цветных полос. На поверхности белой полосы, с деревянного места в середине флага, зархал символизировал танкующую корону, а над ней изображены семь звезд в форме полукруга. Соотношение ширины и общей длины флага составляет 1: 2. Корона и звезды флага расположены в форме прямоугольника с вертикальной стороной 0,8 и горизонтальной стороной 1,0 ширины белой полосы. Пятиконечные звезды появляются в диапазоне 0,15 фото и располагаются в полукруге радиуса 0,5 ширины белой полосы. Корона высотой 0,55 ширины белой полосы, к основанию наклоняется дуга радиуса 1,2 ширины белой полосы. Четыре дугообразных элемента, образующих верхнюю часть короны, в центре с разрезом высотой 0,55 дюйма шириной белой полосы, на основании изгибается дуга радиуса 1,2 ширины белой полосы. Четыре изогнутых элемента, которые составляют верхнюю часть короны, соединяются в центре с частью круга диаметром 0, 2 белой полосы. 3. Государственный флаг Республики Таджикистан поднимается в следующих местах: - над зданиями официальной резиденции Президента Республики Таджикистан, Маджлиси Оли Республики Таджикистан, Правительства Республики Таджикистан, судов Республики Таджикистан, органов исполнительной власти на местах (хукуматов), органов самоуправления поселков и сел (джамоатов) - постоянный; - на территории, где проводятся сессии Маджлиси Оли Республики Таджикистан или сессии маджлисов народных депутатов Горно-Бадахшанской автономной области, маджлисов народных депутатов областей, городов, районов- в течение всего срока проведения сессий, Маджлиси намояндагон (Джамоат)-в течение всего срока заседания; - на зданиях министерств, государственных комитетов и ведомств, других государственных органов Республики Таджикистан, предприятий, учреждений и организаций, общественных объединений и организаций, на жилых зданиях - в праздничные и памятные дни, определенные Законом Республики Таджикистан; - сидят на зданиях и транспортных средствах дипломатических и консульских представительств, а также на зданиях коммерческих учреждений, находящихся за границей Республики Таджикистан, на транспортных средствах, в которых в качестве официальных лиц находятся Президент Республики Таджикистан, председатель Маджлиси Оли Республики Таджикистан, премьер-министр Республики Таджикистан или другие лица, - в порядке, установленном Правительством Республики Таджикистан.; - в помещениях для голосования - в дни выборов и референдума; - в залах заседаний: - в помещениях для голосования - в дни выборов и референдума; - в залах судебных заседаний судов Республики Таджикистан; - в воинских частях Республики Таджикистан-в соответствии с военными уставами; - в пограничных пунктах (пунктах) и пунктах пропуска (таможенной) государственной границы Республики Таджикистан; - по указанию Президента Республики Таджикистан, Президиума Маджлиси Оли Республики Таджикистан или Правительства Республики Таджикистан Государственный Флаг Республики Таджикистан также может быть поднят при проведении церемоний и других торжественных мероприятий, проводимых государственными органами. 4. Государственный флаг Республики Таджикистан размещается в залах заседаний Президента Республики Таджикистан, Маджлиси Оли Республики Таджикистан, Президиума Маджлиси Оли Республики Таджикистан, Правительства Республики Таджикистан, местных маджлисов народных депутатов Республики Таджикистан, органов исполнительной власти на местах (хукуматах), а также в рабочих домах (кабинетах) Президента Республики Таджикистан, председателя Маджлиси Оли Республики Таджикистан, премьер-министра Республики Таджикистан, председателей Горно-Бадахшанской автономной области, областей, города Душанбе, городов, районов и домов, где народные депутаты Республики Таджикистан постоянно принимают избирателей. 5. Во время траура по решению Президента Республики Таджикистан, Президиума Маджлиси Оли Республики Таджикистан или Правительства Республики Таджикистан Государственный Флаг Республики Таджикистан может быть поднят в траурной форме. В этом случае к балке (фульной оси) флага прикрепляется черная полосатая ткань, концы которой должны свисать до нижней части флага. В случае поднятия флага палкой во время траура флаг сгибается на 1/3 длины палки. 6. Изображение Государственного флага Республики Таджикистан размещается на воздушных судах, зарегистрированных в Республике Таджикистан. 7. Государственный флаг Республики Таджикистан может постоянно использоваться в местах отдыха граждан, парках, проспектах, переулках, над жилыми домами и другими местами, а также в декоративных целях в качестве государственного и национального символа, при этом не может быть неуважения к государственному флагу Республики Таджикистан. 8. Государственный флаг Республики Таджикистан и его изображение, независимо от их размеров, должны постоянно точно соответствовать оригиналу цвета и оригиналу его чертежного изображения, прилагаемого к настоящему Положению. 9. Лица, виновные в оскорблении государственного флага Республики Таджикистан, несут ответственность в соответствии с Законом Республики Таджикистан. 10. Порядок подготовки государственного флага Республики Таджикистан утверждается Правительством Республики Таджикистан."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>

            <nav className="bg-gradient-to-r  hidden md:block from-blue-800 to-blue-600 shadow-lg">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        
                        {/* Categories Menu */}
                        <ul className="flex space-x-8">
                            {categories.map(({ id, name }) => (
                                <li key={id} className="relative group">
                                    {/* Category Menu Item */}
                                    <button
                                        onClick={() => toggleDropdown(id)} // Toggle dropdown for the clicked category
                                        className={`text-white px-3 py-2 text-sm font-medium ${idx === id ? "underline font-bold" : "hover:bg-blue-700"
                                            } transition-all duration-200 ease-in-out transform hover:scale-105`}
                                        aria-expanded={idx === id}
                                        aria-controls={`subcategories-${id}`}
                                    >
                                        {name}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        {/* Subcategories Dropdown */}
                        <div
                            ref={dropdownRef}
                            id={`subcategories-${idx}`}
                            className={`absolute left-0 w-full top-[128px] bg-white text-blue-800 shadow-lg z-20  overflow-hidden transition-all duration-500 ease-in-out transform ${idx ? "max-h-screen" : "max-h-0"
                                }`}
                            style={{ height: isOpen ? "auto" : "0" }}
                        >
                            <div className="grid grid-cols-4 gap-4 max-w-screen-xl mx-auto py-4 px-6">
                                {subCategories
                                    .filter((subCategory) => subCategory.categoryId === idx)
                                    .map((subCategory) => (
                                        <a
                                            key={subCategory.id}
                                            href="#"
                                            className="hover:underline text-sm transition-all duration-200 ease-in-out transform hover:bg-blue-100 rounded-md px-2 py-1"
                                        >
                                            {subCategory.name}
                                        </a>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
