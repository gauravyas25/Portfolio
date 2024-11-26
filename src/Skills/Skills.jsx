import React from 'react'
import "./Skills.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';


import HTML from "../assets/ImgSkills/html5-original.svg";
import CSS from "../assets/ImgSkills/CSS3.webp";
import Java from "../assets/ImgSkills/java-original.svg";
import JS from "../assets/ImgSkills/javascript-original.svg";
import GitHub from "../assets/ImgSkills/github-original.svg";
import Mongo from "../assets/ImgSkills/mongodb-original.svg";
import MySQL from "../assets/ImgSkills/mysql-original.svg";
import Node from "../assets/ImgSkills/nodejs-original.svg";
import VSC from "../assets/ImgSkills/vscode-original.svg";
import ReactJS from "../assets/ImgSkills/react-original.svg";
import SQLite from "../assets/ImgSkills/sqlite-original.svg";
import Express from "../assets/ImgSkills/express-original (1).svg";
import ML from "../assets/ImgSkills/numpy-original.svg";
import DataPP from "../assets/ImgSkills/numpy-original.svg";
import PythonLib from "../assets/ImgSkills/python-original.svg";
import Bootstrapimg from "../assets/ImgSkills/Bootstrapimg.webp";
import MUI from "../assets/ImgSkills/MUI.jpg";

function Skills() {
  return (
    <div className='skillContainer'>
        <h1>Skills</h1>

        <Swiper
            effect = { "coverflow" }
            grabCursor = { true } 
            centeredSlides = { true }
            slidesPerView={"auto"}
            loop = {true}
            coverflowEffect={{
                rotate : 0,
                stretch: 0,
                depth: 100,
                modifier: 5
            }}
            pagination = {{el:".swiper-pagination", clickable : true}}
            navigation = {{
                nextEl : ".swiper-button-next",
                prevEl : ".swiper-button-prev",
                clickable : true,
            }}
            modules={[ EffectCoverflow, Pagination, Navigation ]}
            className='swiper_container'
        >
            

            <SwiperSlide>
                <img src={HTML} alt="" />
                <h1>HTML</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={CSS} alt="" />
                <h1>CSS</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Bootstrapimg} alt="" />
                <h1>BootStrap</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={JS} alt="" />
                <h1>JavaScript</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={ReactJS} alt="" />
                <h1>React JS</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={MUI} alt="" />
                <h1>Material UI</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Node} alt="" />
                <h1>Node.JS</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Express} alt="" />
                <h1>Express.JS</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={MySQL} alt="" />
                <h1>MySQL</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Mongo} alt="" />
                <h1>NoSQL (MongoDB)</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={SQLite} alt="" />
                <h1>SQlite</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={VSC} alt="" />
                <h1>VS Code & other IDE</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={GitHub} alt="" />
                <h1>Git & GitHub</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Java} alt="" />
                <h1>Java & OOP</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={ML} alt="" />
                <h1>Machine Learning</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={DataPP} alt="" />
                <h1>Data Handling & Preprocessing</h1>
            </SwiperSlide>
            <SwiperSlide>
                <img src={PythonLib} alt="" />
                <h1>Python Libraries</h1>
            </SwiperSlide>
            

            <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
            </div>        
        </Swiper>
    </div>
  )
}

export default Skills