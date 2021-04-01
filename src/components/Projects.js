import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import todo from "../images/todo.jpg";

/* import tvController from '../images/tv-controller.png'; */
import wedding from '../images/wedding.jpg';
import music from '../images/music.jpg';
import bonrow from '../images/bonrow.jpg';
import frigider from "../images/frigider.jpg";




function Projects() {




    const [projectProperties, setProjectProperties] = useState([
        {
            title: 'Music player',
            descriptionEng: 'I have participated many online courses where I have acquired basics of React.js. That was my one of favourite learning project which I complemented with my own ideas.',
            descriptionHun: 'Több online kurzuson vettem részt, ahol elsajátítottam a react.js alapjait. Ez volt az egyik kedvenc tanuló projektem, amelyet saját ötleteimmel is kiegészítettem.',
            img: `${music}`,
            link: 'https://kovacsendre96.github.io/music-player/',
            githubLink: 'https://github.com/kovacsendre96/music-player',
            colorH1A: '#B6D1FF',
            colorText: "#5F786F",
            key:'01',
        },
        {
            title: 'Wedding page',
            descriptionEng: 'That was the first time when I tested my knowledge and I tried to copy a demo page that has already been designed.',
            descriptionHun: 'Ennek az oldalnak a megalkotása volt az első alkalom, amikor egy már előre megtervezett design-t próbáltam lemásolni.',
            img: `${wedding}`,
            link: 'https://kovacsendre96.github.io/my-components/wedding.html',
            githubLink: 'https://github.com/kovacsendre96/my-components',
            background: '#2A2A2A',
            colorH1A: "#C4A048",
            colorText: "#191919",
            key:'02',        },
        {
            title: 'Bonrow',
            descriptionHun: 'Az egyik barátom megkért arra, hogy a zenekari bandájukról csináljak egy bemutatkozó oldalt. Ezt már React Js-ben csináltam meg, hogy gyakoroljam az eddig megszerzett tudásom. A kihívást a desgin megtervezése adta leginkább, amiben teljes szabadkezet kaptam.',
            descriptionEng: 'One of my friends asked me to make a webpage about their band. I created it with React.js to develope my knowledge. The page of design challenged me that I got free hand.',
            img: `${bonrow}`,
            link: 'https://kovacsendre96.github.io/bonrow/',
            githubLink: 'https://github.com/kovacsendre96/bonrow',
            colorH1A: '#06060C',
            colorText: "#06060C",
            key:'03',
        },
        {
            title: 'Todo app',
            descriptionHun: 'Sok fórumon és videóban találkoztam a To-do app-el, amit egy jó gyakorlási alapnak gondolok én is. A program megírása közben sok tapasztalatot szereztem. Később az app tovább fejlesztésén gondolkodva született meg a Frigider alkalmazás ötlete',
            descriptionEng: 'In many tutorials I met Todo apps. I think that is a good practice. When I created this app I got many expreience and I deepended my knowledge. Later, when I was thinking about further development, the idea of Frigider appplication was born.',
            img: `${todo}`,
            link: 'https://kovacsendre96.github.io/react-todo/',
            githubLink: 'https://github.com/kovacsendre96/react-todo',
            colorH1A: '#FFAA1B',
            colorText: "#909090",
            key:'04',
        },
        /* {
            title: 'Clock',
            descriptionHun: 'Sok különböző megvalósítással találkoztam, de tesztelni akartam magamat és végül teljesen önállóan készítettem el ezt az órát.',
            descriptionEng: 'I came across many different implementations, but I wanted to test myself and I made this clock completely on my own.',
            img: `${clock}`,
            link: 'https://kovacsendre96.github.io/clock/',
            githubLink: 'https://github.com/kovacsendre96/clock',
            background: '#2A2A2A',
            colorH1A: "#C4A048",
            colorText: "#DADADA"
        }, */
        {
            title: 'Fridge Manager',
            descriptionHun: 'Ez az app képviseli leginkább a jelenlegi tudásomat. A projectet jelenleg is fejlesztés alatt áll és még sok ötletem várja megvalósítását.'
                + 'Rövid bemutató:'
                + 'Az alkalmazás segítségével a felhasználó képes számon tartani és rendszerezni a hűtője tartalmát. Az űrlap kitöltéséhez szükség van többek között a berakás dátumára és szavatossági időre. Az adatok segítségével tudja az app az adott terméket kategóriába sorolni és kiszámolni, annak szavatosságát. Ezen kívül még a mennyiség megadása is szükséges, hogy a későbbiekben módosítható legyen.',
            descriptionEng: 'This app represents most of my current knowledge. The project is still under development and I have many more ideas waiting to be implemented.'
                + 'Short Introduction: The application allows the user to keep track of and organize the contents of their fridge. The form requires the quantities of food and the date of put in and guarantee. The app can categorize the products and calculate its warranty.',
            img: `${frigider}`,
            link: 'https://kovacsendre96.github.io/Frigider/',
            githubLink: 'https://github.com/kovacsendre96/Frigider',
            colorH1A: '#40887C',
            colorText: "#D5D5D7",
            key:'05',        }
    ]);



    return (






        <Carousel className="carousel" fade>

            {projectProperties.map(projectItem => (
                <Carousel.Item interval={2000} >

                    <div className="pojects-container">
                        <div className="pojects-left-side">
                            <div className="pojects-left-side__guide">
                                <div className="pojects-left-side__guide__left">
                                    <div className="line-long"></div>
                                    <h3>TV Guide</h3>
                                    <div className="line-long"></div>
                                    <div className="line-short"></div>
                                    <div className="line-short"></div>
                                    <div className="line-short"></div>
                                    <div className="line-long"></div>
                                    <div className="line-short"></div>
                                    <div className="line-short"></div>
                                    <div className="line-short"></div>
                                    <div className="line-long"></div>
                                    <div className="line-short"></div>
                                    <div className="line-short"></div>
                                    <div className="line-short"></div>
                                   

                                </div>
                                <div className="pojects-left-side__guide__middle">
                                    <h1 style={{ color: projectItem.colorH1A }} className="pojects-left-side__header">{projectItem.title}</h1>
                                    <div className="line-long"></div>
                                    <p style={{ color: projectItem.colorText }} className="pojects-left-side__text">{projectItem.descriptionEng}</p>
                                    <div className="line-long"></div>
                                    <a style={{ color: projectItem.colorH1A }} href={projectItem.link} target="_blanc" className="pojects-left-side__link">Click here to watch demo</a>
                                    <a style={{ color: projectItem.colorH1A }} href={projectItem.githubLink} target="_blanc" className="pojects-left-side__link">Click here to watch GitHub link</a>
                                </div>
                                <div className="pojects-left-side__guide__right"></div>

                            </div>
                          
                        </div>
                        <div className="pojects-right-side">
                            <div className="pojects-right-side__tv">
                                <img className="pojects-right-side__img" src={projectItem.img} alt="project-pciture"/>
                            </div>
                        </div>
                    </div>

                </Carousel.Item>

            ))}




        </Carousel>



    );
}

export default Projects;