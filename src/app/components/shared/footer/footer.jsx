import React from "react";
import Container from "../container/container";

const Footer = () => {
  return (
    <footer className="bg-[#3A51A0] mt-[30px] py-6">
      <Container>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-2 sm:justify-between pb-2">
          <div className="flex items-center">
            <img
              src="https://maorif.tj/img/big-gerb.png"
              alt="Gerb"
              className="w-[45px] h-[40px] sm:w-[65px] sm:h-[60px]"
            />
            <p className="font-semibold text-white text-xs sm:text-lg max-w-[360px] uppercase">
              Вазорати маориф ва илми Ҷумҳурии Тоҷикистон
            </p>
          </div>

          <div className="flex flex-col gap-[6px] text-white text-xs sm:text-base">
            <p>ш.Душанбе, к. Нисормуҳаммад 13а</p>
            <a href="mailto:mort@moh.tj">mort@moh.tj</a>
            <a href="tel:+9922277686">+992-227-76-86</a>
          </div>
        </div>

        <div className="flex justify-between sm:gap-5 sm:items-center sm:text-base pt-4 pb-5 sm:pb-8 md:pb-[38px] border-t border-white/30">
          <p className="text-white text-xs sm:text-base">
            © Вазорати маориф ва илми Ҷумҳурии Тоҷикистон
          </p>

         
        </div>

      </div>
      </Container>
    </footer>
  );
};

export default Footer;
