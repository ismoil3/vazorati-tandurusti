'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import Container from './components/shared/container/container';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowRightAltOutlined, JoinLeft } from '@mui/icons-material';
import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3,
      breakpoints: {
        1024: {
          perPage: 2,
        },
        600: {
          perPage: 1,
        },
      },
      autoScroll: {
        speed: 1,
        pauseOnHover: true,
      },
    }).mount({ AutoScroll });

  }, []);
  const news = [
    {
      id: '1',
      img: 'https://mfa.tj/uploads/berlin/2021/01/50877264236-4359ab6da2-o.jpg',
      desc: 'Message of the President of the Republic of Tajikistan addressed to the Parliament',
      date: '1 ноябре 2024'
    },
    {
      id: '2',
      img: 'https://www.imoge.tj/media/k2/items/cache/661821a9442a8dbd824e89bd18c0fd2e_XL.jpg',
      desc: 'Message from The President Of The Republic Of Tajikistan, The Leader Of The Nation',
      date: '1 ноябре 2024'
    },
    {
      id: '3',
      img: 'https://lh6.googleusercontent.com/proxy/GHBAVpI-b0J2CwFOef8ZjeMA_JvU07vRbWjjH2Lt11HJby7VJ8SOqtFg5LeVP85FaA96Als4iET49Fx4KRyBgNEFAyTO6RMsYdJeu43IkYsW7JKCkcn9mJqAdx6ZUZvMCoj7OuMiCryPjD1jFg',
      desc: 'President of the Republic of Tajikistan, Honorable Emomali Rahmon, received the Acting Chairman...',
      date: '1 ноябре 2024'
    },
    {
      id: '4',
      img: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`,
      desc: 'President of the Republic of Tajikistan, Honorable Emomali Rahmon, received the Acting Chairman...',
      date: '1 ноябре 2024'
    },
    {
      id: '5',
      img: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`,
      desc: 'President of the Republic of Tajikistan, Honorable Emomali Rahmon, received the Acting Chairman...',
      date: '1 ноябре 2024'
    },
    {
      id: '6',
      img: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`,
      desc: 'President of the Republic of Tajikistan, Honorable Emomali Rahmon, received the Acting Chairman...',
      date: '1 ноябре 2024'
    },
    {
      id: '7',
      img: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`,
      desc: 'President of the Republic of Tajikistan, Honorable Emomali Rahmon, received the Acting Chairman...',
      date: '1 ноябре 2024'
    },
    {
      id: '8',
      img: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`,
      desc: 'President of the Republic of Tajikistan, Honorable Emomali Rahmon, received the Acting Chairman...',
      date: '1 ноябре 2024'
    },
    {
      id: '9',
      img: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`,
      desc: 'President of the Republic of Tajikistan, Honorable Emomali Rahmon, received the Acting Chairman...',
      date: '1 ноябре 2024'
    },
    {
      id: '10',
      img: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`,
      desc: 'President of the Republic of Tajikistan, Honorable Emomali Rahmon, received the Acting Chairman...',
      date: '1 ноябре 2024'
    }
  ];
  console.log(new Date());

  const events = [
    {
      "date": "Март 14, 2024",
      "title": "Хайрулло Иззатов: зиеда аз 90%-и инсультхо метавон пешгирӣ кард.",
      "link": "Муфасал",
      "image": "https://sugdnews.com/wp-content/uploads/2024/04/klinika.jpg"
    },
    {
      "date": "Феврал 9, 2024",
      "title": "9-умми феврал-Рӯзи байналмилалии дандонпизишкон",
      "link": "Муфасал",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Surgeons_at_Work.jpg/800px-Surgeons_at_Work.jpg"
    },
    {
      "date": "Октябр 3, 2022",
      "title": "Рустам Нуров: Дар Тоҷикистон усулҳои муосири ташхиси фабрики бемории сил чорай мебошанд",
      "link": "Муфасал",
      "image": "https://live.staticflickr.com/65535/54148208380_dd01d879f9_b.jpg"
    }
  ]

  const events2 = [
    {
      "date": "Ноябр 19, 2024",
      "title": "130 ҳазор нафар кофтуковчиён тамокукаширо тарк карданд",
      "link": "Муфасал",
      "img": "https://dosyasb.saglik.gov.tr/Resim/71042/0/alo-171-sigara-birakma-danisma-hattijpg.png"
    },
    {
      "date": "Март 14, 2024",
      "title": "Хайрулло Иззатов: зиеда аз 90%-и инсультхо метавон пешгирӣ кард.",
      "link": "Муфасал",
      "img": "https://dosyasb.saglik.gov.tr/Resim/71043/0/e-nabizjpg.png"
    },
    {
      "date": "Феврал 9, 2024",
      "title": "9-умми феврал-Рӯзи байналмилалии дандонпизишкон",
      "link": "Муфасал",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Surgeons_at_Work.jpg/800px-Surgeons_at_Work.jpg"
    }
  ]


  return (
    <div>
      
      <section className="relative kef bg-cover bg-center min-h-[800px] text-white" style={{ backgroundImage: "url('https://your-image-link.jpg')" }}>
  <div className="absolute inset-0 bg-black/50"></div>
  <Container>
    {/* Header Section */}
        {/* Left Side - President Card */}
        <div className="relative top-[20px] m-auto max-w-[500px] p-6 sm:p-8 rounded-[20px] bg-gradient-to-tl from-white/10 to-white/5 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 border border-white/30">
        <div className="rounded-lg overflow-hidden border-4 border-white">
          <img 
            src="https://maorif.tj/img/president.jpg" 
            alt="President" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute -top-4 -right-4 bg-[#FFD700] w-12 h-12 rounded-full flex items-center justify-center shadow-md">
          <span className="text-black text-lg font-bold">VIP</span>
        </div>
        <div className="mt-4 sm:mt-6 text-white flex flex-col items-center">
          <p className="text-center text-lg sm:text-2xl font-extrabold tracking-wide uppercase">
            ЭМОМАЛӢ РАҲМОН
          </p>
          <p className="text-center text-xs sm:text-base font-medium leading-relaxed sm:max-w-[360px] sm:mt-2">
            АСОСГУЗОРИ СУЛҲУ ВАҲДАТИ МИЛЛӢ - ПЕШВОИ МИЛЛАТ
          </p>
        </div>
      </div>

    {/* Interactive Cards Section */}
    <div className="relative m-auto z-10 mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
      {/* Individual Card */}
      {[
        { title: "Набзи электронӣ", icon: "💓" },
        { title: "Тандурустии фавқуллода", icon: "🚑" },
        { title: "САБИМ", icon: "❤️" },
        { title: "MHRS", icon: "📅" },
        { title: "Гирифтани маълумот", icon: "📖" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 bg-white/20 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105"
        >
          <span className="text-4xl mb-3">{item.icon}</span>
          <p className="text-sm sm:text-lg font-medium">{item.title}</p>
        </div>
      ))}
    </div>
  </Container>
</section>

  




      <br /><br />

      {/* News Section */}
      <Container className="py-10">
        <section>
          <h1 className="font-[700] text-[30px] mb-[40px] text-[#1F3C88]">Хабарҳо</h1>

          {/* First Swiper */}
          <div className='flex flex-col lg:flex-row gap-[30px] items-center'>
            {/* Swiper Section */}
            <div className="bg-white rounded-[8px] shadow-lg overflow-hidden w-full max-w-[600px]">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper h-[300px] sm:h-[300px] md:h-[400px] rounded-[8px]"
              >
                {news.map((el) => (
                  <SwiperSlide
                    key={el.id}
                    className="relative rounded-[8px] overflow-hidden "
                  >
                    <img
                      src={el.img}
                      className="h-[55%] object-cover w-full rounded-t-[8px] transition-all duration-500 ease-in-out transform hover:scale-105"
                      alt="News image"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end items-center text-black text-start  via-transparent to-transparent">
                      <div className="px-6 py-4 w-full">
                        <p className="font-bold text-lg mb-4">{el.desc}</p>
                        <div className='flex items-center justify-between'>
                          <p className='text-sm'>{el.date}</p>
                          <ArrowRightAltOutlined />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* News List Section */}
            <div className='flex flex-col gap-[20px] w-full max-w-[700px]'>
              {news.slice(0, 3).map((el, index) => (
                <div key={index} className="p-[6px] flex gap-[20px] items-center border-b-2">
                  <div className="notice_date default flex flex-col items-center">
                    <span className="date_01 text-xl">{el.date.split(' ')[0]}</span>
                    <span className="date_02 text-sm">{el.date.split(' ')[1]}</span>
                    <span className="date_03 text-xs">{el.date.split(' ')[2]}</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-bold text-lg">{el.desc}</p>
                    <p className="max-w-[350px] text-[14px] text-[#44] mt-[7px]">{el.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <br /><br />
        </section>


      </Container>



      <br /><br /><br />
      <section>
        <Container>
          <h1 className="font-[700] text-[30px] mb-[40px] text-[#1F3C88]">Мақолаҳо</h1>
          {/* <h1 className="font-[900] text-[40px] mb-[20px] text-[#1F3C88]"></h1> */}
          <hr />
        </Container>
        <br />


      



        <Container>
          <div className="py-10 px-4 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {events2.map((el) => (
                <motion.div
                  key={el.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden p-4 flex flex-col justify-between"
                  whileHover={{ scale: 1.05 }} // Adds hover animation
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Event Image */}
                  <img
                    src={el.img}
                    alt={el.title}
                    className="w-full h-48 object-cover rounded-md mb-4 transition-all duration-300 ease-in-out hover:scale-105 *:"
                  />

                  {/* Event Date and Title */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">{el.date}</p>
                    <p className="text-xl font-semibold text-gray-800 mt-2">{el.title}</p>
                  </div>

                  {/* Button */}
                  <Button
                    variant="contained"
                    color="[#1A3992]"
                    className="mt-auto"
                    fullWidth
                  >
                    {el.link}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>


        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper rounded-[8px]  shadow-lg"
        >
          {events2.map((el) => (
            <SwiperSlide
              key={el.id}
              className="relative max-h-[500px] bg-cover rounded-[8px] overflow-hidden bg-gradient-to-t from-black/70 via-black/40 to-transparent"
            >
              <div style={{
                backgroundImage: `url(${el.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }} className='w-full bg-cover'>
                <img
                  src={el.img}
                  className="h-full object-cover object-cover rounded-t-[8px] transition-transform duration-500 ease-in-out hover:scale-105"
                  alt="News"
                />

                {/* Text Content */}
                <div className="absolute top-[40%] left-[10%] max-w-[480px] text-start bg-gradient-to-br py-6 px-9 rounded-lg text-[white]">
                  <h3 className="font-bold text-xl md:text-2xl mb-2 leading-tight">
                    {el.title}
                  </h3>
                  <div className="flex items-center justify-between w-full text-sm md:text-base">
                    <span className="text-gray-300">{el.date}</span>
                    <ArrowRightAltOutlined className="text-white cursor-pointer hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>
      <br /><br /><br />
      <Container>
        <section>
          <h1 className="font-[900] text-[40px] mb-[20px] text-[#1F3C88]">Мусоҳибаҳо</h1>
          <hr />
          <br />
          <div className="py-10 px-4 sm:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((el) => (
                <motion.div
                  key={el.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden p-4 flex flex-col justify-between"
                  whileHover={{ scale: 1.05 }} // Adds hover animation
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Event Image */}
                  <img
                    src={el.image}
                    alt={el.title}
                    className="w-full h-48 object-cover rounded-md mb-4 transition-all duration-300 ease-in-out hover:scale-105"
                  />

                  {/* Event Date and Title */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">{el.date}</p>
                    <p className="text-xl font-semibold text-gray-800 mt-2">{el.title}</p>
                  </div>

                  {/* Button */}
                  <Button
                    variant="contained"
                    color="[#1A3992]"
                    className="mt-auto"
                    fullWidth
                  >
                    {el.link}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

        </section>


        <br /><br /><br />

        <div className='elementor-widget-wrap elementor-element-populated'>
          <section className="w-full bg-white py-8">
            <div className="container w-full">
              <h1 className="font-[700] text-[30px] mb-[40px] text-[#1F3C88]">Сомонаҳои мақомоти давлатӣ ва шарикони мо</h1>
            </div>
            <div className="border-t border-gray-300 mx-auto w-1/2"></div>

          </section>
        </div>

        {/* slider */}
        <div className="splide" role="group" aria-label="Splide Basic HTML Example">
          <div className="splide__track" style={{ paddingLeft: '0px', paddingRight: '0px' }} aria-live="off" aria-atomic="true">
            <ul className="splide__list gap-[30px]" id="splide05-list" role="presentation">
              {/* Slide 1 */}
              <li className="splide__slide flex items-center py-3 px-5 border border-[#365CDD] rounded-2xl bg-white max-w-[330px] gap-2" id="splide05-slide01" role="group" aria-roledescription="slide" aria-label="1 of 6">
                <img className="w-[56px] h-[56px]" src="https://maorif.tj/storage/images/01J3JDYZAGCB5TBZ57PXAT6BBY.svg" alt="Logo" />
                <a href="https://tpp.tj/" className="text-sm line-clamp-4 font-semibold uppercase" tabIndex="-1">
                  ПАЛАТАИ САВДО ВА САНОАТИ ҶУМҲУРИИ ТОҶИКИСТОН
                </a>
              </li>
              {/* Slide 2 */}
              <li className="splide__slide flex items-center py-3 px-5 border border-[#365CDD] rounded-2xl bg-white max-w-[330px] gap-2" id="splide05-slide02" role="group" aria-roledescription="slide" aria-label="2 of 6">
                <img className="w-[56px] h-[56px]" src="https://maorif.tj/storage/images/01J3JDRQN3HF27FHJVA0N96Z3E.png" alt="Logo" />
                <a href="https://mfa.tj/" className="text-sm line-clamp-4 font-semibold uppercase" tabIndex="-1">
                  Вазорати корҳои хориҷии Ҷумҳурии Тоҷикистон
                </a>
              </li>
              {/* Slide 3 */}
              <li className="splide__slide flex items-center py-3 px-5 border border-[#365CDD] rounded-2xl bg-white max-w-[330px] gap-2" id="splide05-slide03" role="group" aria-roledescription="slide" aria-label="3 of 6">
                <img className="w-[56px] h-[56px]" src="https://maorif.tj/storage/images/01J14MBQJ1CQN8A6SPVNRMR73T.png" alt="Logo" />
                <a href="https://khovar.tj/rus/" className="text-sm line-clamp-4 font-semibold uppercase" tabIndex="-1">
                  Агентии миллии иттилоотии Тоҷикистон {"Ховар"}
                </a>
              </li>
              {/* Slide 4 */}
              <li className="splide__slide flex items-center py-3 px-5 border border-[#365CDD] rounded-2xl bg-white max-w-[330px] gap-2" id="splide05-slide04" role="group" aria-roledescription="slide" aria-label="4 of 6">
                <img className="w-[56px] h-[56px]" src="https://maorif.tj/storage/images/01J14KNCG73BCQ7SGYTDM3EK7F.png" alt="Logo" />
                <a href="https://mmk.tj" className="text-sm line-clamp-4 font-semibold uppercase">
                  Маркази миллии қонунгузории назди Президенти Ҷумҳурии Тоҷикистон
                </a>
              </li>
              {/* Slide 5 */}
              <li className="splide__slide flex items-center py-3 px-5 border border-[#365CDD] rounded-2xl bg-white max-w-[330px] gap-2" id="splide05-slide05" role="group" aria-roledescription="slide" aria-label="5 of 6">
                <img className="w-[56px] h-[56px]" src="https://maorif.tj/storage/images/01J14KMG53MR83WVYFQXA2HJ0F.png" alt="Logo" />
                <a href="http://www.president.tj" className="text-sm line-clamp-4 font-semibold uppercase">
                  Президенти Ҷумҳурии Тоҷикистон
                </a>
              </li>
              {/* Slide 6 */}
              <li className="splide__slide flex items-center py-3 px-5 border border-[#365CDD] rounded-2xl bg-white max-w-[330px] gap-2" id="splide05-slide06" role="group" aria-roledescription="slide" aria-label="6 of 6">
                <img className="w-[56px] h-[56px]" src="https://maorif.tj/storage/images/01J14KKG7DM8DGY2S4P2G1DESR.png" alt="Logo" />
                <Link href="http://www.president.tj" className="text-sm line-clamp-4 font-semibold uppercase">
                  Мақомоти иҷроияи ҳокимияти давлатии шаҳри Душанбе
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* elon */}
            <section>
      <div className="container mt-10 sm:mt-14 md:mt-20 xl:mt-[100px] pb-10 md:pb-0">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase">
            Эълон
          </h2>
          <Link
            href="#"
            className="hidden md:flex text-xl font-medium uppercase text-[#1A3992]"
          >
            Бештар
          </Link>
        </div>

        <ul className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-[34px]">
          <li className="bg-white pt-[29px] pl-5 pr-[14px] pb-[18px] rounded-xl">
            <span className="text-white text-sm py-2 px-7 bg-[#1A3992] rounded-xl">
              21.11.2024
            </span>
            <h3 className="mt-5 text-xl line-clamp-1">
              Маркази барномаҳои байналмилалӣ барои таҳсили шаҳрвандони Тоҷикистон дар муассисаҳои таҳсилоти олӣ ва илмӣ дар давлатҳои хориҷӣ қабули ҳуҷҷатҳоро эълон намуд
            </h3>
            <span className="line-clamp-2 leading-5 mt-2 text-gray-500">
              Маркази барномаҳои байналмилалӣ барои таҳсили шаҳрвандони Тоҷикистон дар муассисаҳои таҳсилоти олӣ ва илмӣ дар давлатҳои хориҷӣ қабули ҳуҷҷатҳоро эълон намуд
            </span>
            <Link
              href="#"
              className="text-[#1A3992] mt-6 font-semibold block"
            >
              Бештар
            </Link>
          </li>

          <li className="bg-white pt-[29px] pl-5 pr-[14px] pb-[18px] rounded-xl">
            <span className="text-white text-sm py-2 px-7 bg-[#1A3992] rounded-xl">
              19.11.2024
            </span>
            <h3 className="mt-5 text-xl line-clamp-1">
              REQUEST FOR EXPRESSION OF INTEREST. INDIVIDUAL CONSULTANT
            </h3>
            <span className="line-clamp-2 leading-5 mt-2 text-gray-500">
              REQUEST FOR EXPRESSION OF INTEREST
            </span>
            <Link
              href="#"
              className="text-[#1A3992] mt-6 font-semibold block"
            >
              Бештар
            </Link>
          </li>

          <li className="bg-white pt-[29px] pl-5 pr-[14px] pb-[18px] rounded-xl">
            <span className="text-white text-sm py-2 px-7 bg-[#1A3992] rounded-xl">
              05.11.2024
            </span>
            <h3 className="mt-5 text-xl line-clamp-1">
              ЭЪЛОН!!! Ба диққати масъулон ва довталабони даври чоруми озмуни ҷумҳуриявии{ "Фурӯғи субҳи доноӣ китоб аст"}!
            </h3>
            <span className="line-clamp-2 leading-5 mt-2 text-gray-500">
              ЭЪЛОН!!!
            </span>
            <Link
              href="#"
              className="text-[#1A3992] mt-6 font-semibold block"
            >
              Бештар
            </Link>
          </li>
        </ul>

        <Link
          href="#"
          className="w-full py-4 border bg-[#1A3992] rounded-xl text-center font-semibold text-base text-white md:hidden"
        >
          Ҳамаи элонҳо
        </Link>
      </div>
    </section>
      </Container>
    </div>
  );
}





