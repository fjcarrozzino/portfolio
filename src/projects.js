import { AmazingEventsScreenshots } from "./Assets/AmazingEventsScreenshots";
import { MyTineraryScreenshots } from "./Assets/MyTineraryScreenshots";
import { TecnocelScreenshots } from "./Assets/TecnocelScreenshots";
import { TortasLinaScreenshots } from "./Assets/TortasLinaScreenshots";

const AmazingEventsDesc = "A website with the best events of the last and upcoming year"
const AmazingeventsKeywords = ['Javascript', 'HTML', 'CSS']
const MyTineraryDesc = "A website to browse your perfect destination! This website also has a React Native App."
const MyTineraryKeywords = ['Javascript', 'React', 'Redux', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose']
const TecnocelDesc = "A website to buy the best technology in notebooks and phones! This website also has a React Native App."
const TecnocelKeywords = ['Javascript', 'React', 'Redux', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose']
const TortasLinaDesc = "A website to buy your perfect cake!"
const TortasLinaKeywords = ['Javascript', 'HTML', 'CSS']

export const projects = [
    {
        title: "MyTinerary",
        description: MyTineraryDesc,
        flip: false,
        demo: "https://mytinerary-carrozzino.herokuapp.com/",
        git: "https://github.com/fjcarrozzino/MyTineraryFinal",
        images: MyTineraryScreenshots,
        keywords: MyTineraryKeywords
    },
    {
        title: "Lina Cakes",
        description: TortasLinaDesc,
        flip: true,
        demo: "https://fjcarrozzino.github.io/ProyectoFinalJS/",
        git: "https://github.com/fjcarrozzino/ProyectoFinalJS",
        images: TortasLinaScreenshots,
        keywords: TortasLinaKeywords
    },
    {
        title: "Tecnocel",
        description: TecnocelDesc,
        flip: false,
        demo: "https://tecnocelweb.herokuapp.com/",
        git: "https://github.com/fjcarrozzino/TecnocelFinal",
        images: TecnocelScreenshots,
        keywords: TecnocelKeywords
    },
    {
        title: "AmazingEvents",
        description: AmazingEventsDesc,
        flip: true,
        demo: "https://fjcarrozzino.github.io/AmazingEventsJS/",
        git: "https://github.com/fjcarrozzino/AmazingEventsJS",
        images: AmazingEventsScreenshots,
        keywords: AmazingeventsKeywords
    }
]