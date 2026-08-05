import React from "react";
import Marquee from 'react-fast-marquee'

export default function Carousel() {
    return (

        <section className="nossos-clientes py-24 flex h-screen justify-center items-center" aria-labelledby="nossos-clientes-titulo" style={{ 'background': 'linear-gradient( 180deg, #FCFCFC 0%, #F6F8FA 100% );' }}>
            <div className="nossos-clientes__container">
                <h2 id="nossos-clientes-titulo" className="nossos-clientes__titulo justify-center text-gray-800 mb-12 items-center text-center text-3xl font-bold mb-8">
                    Nossos clientes
                </h2>
                <section className="flex h-screen justify-center items-center w-[300]" style={{ 'background': 'linear-gradient( 180deg, #FCFCFC 0%, #F6F8FA 100% );' }}>
                    <div className="h-100 max-h-lvh w-full  rouded-2xl py-16 overflow-hidden grid">
                        <Marquee gradient pauseOnClick="true" className="rounded-2xl  py-3 overflow-hidden grid  ">
                            <div className=" flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/logoqualifoco.svg" className="grayscale" style={{ height: '100px', padding: '0 50px' }} alt="qualifoco" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/fgv_logo.svg" className="w-40 grayscale" style={{ height: '100px', padding: '0 50px' }} alt="FGV" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/FNDS_preto.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="FNDS" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/worldgym.svg" className="w-40" style={{ height: '150px', padding: '0 50px' }} alt="World Gym" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/Logo-piracicabana-df.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="Viação Piracicabana" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/agepol_logo.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="AGEPOL" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/assefaz_logo.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="Assefaz" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/Lake_side_logo.svg" className="w-40 grayscale" style={{ height: '100px', padding: '0 50px' }} alt="Condomínio Lake Side" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/RedeDor_logo.svg" className="w-40 grayscale" style={{ height: '100px', padding: '0 50px' }} alt="Rede D'or" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/logo_AgroBrasilia.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="Agro Brasília" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/cmw_logo.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="Capital Moto Week" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/logo_senac.svg" className="w-40 invert" style={{ height: '100px', padding: '0 50px' }} alt="Senac" />
                            </div>

                        </Marquee>

                    </div>

                </section>
                <section className="flex h-screen justify-center items-center w-[300]" style={{ 'background': 'linear-gradient( 180deg, #FCFCFC 0%, #F6F8FA 100% );' }}>
                    <div className="h-100 max-h-lvh w-full  rouded-2xl py-16 overflow-hidden grid">
                        <Marquee gradient pauseOnClick="true" direction="right"  className="rounded-2xl  py-3 overflow-hidden grid  ">
                            
                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/logo_senac.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="Senac" />
                            </div>
                            
                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/logoqualifoco.svg" className="" style={{ height: '100px', padding: '0 50px' }} alt="qualifoco" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/fgv_logo.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="FGV" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/FNDS_preto.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="FNDS" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/worldgym.svg" className="w-40" style={{ height: '150px', padding: '0 50px' }} alt="World Gym" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/Logo-piracicabana-df.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="Viação Piracicabana" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/agepol_logo.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="AGEPOL" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/assefaz_logo.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="Assefaz" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/Lake_side_logo.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="Condomínio Lake Side" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/RedeDor_logo.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="Rede D'or" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/logo_AgroBrasilia.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="Agro Brasília" />
                            </div>

                            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
                                <img src="/img/clientes/cmw_logo.svg" className="w-40 " style={{ height: '100px', padding: '0 50px' }} alt="Capital Moto Week" />
                            </div>

                        </Marquee>

                    </div>

                </section>
            </div>
        </section>
    )

}
