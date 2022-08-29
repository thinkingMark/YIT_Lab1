import { Injectable } from "@angular/core";
import { Post } from "../models/post.model";

@Injectable()
export class PostService {
    constructor() {

    }

    posts: Post[] = [
        {
            shortDescription: "24 квітня 2021 року група дослідників-розробників з Міннесотського університету в складі Канцзе Лу (Kangjie Lu), Цюші У (Qiushi Wu) і Адітья Пакко (Aditya Pakki) опублікувала відкритий лист з вибаченнями на адресу співтовариства Linux з приводу своєї некоректної наукової діяльності, що призвела до блокування коммітов від вузу. Вчені висловлюють жаль, що діяли таємно, без дозволу та інформування спільноти.",
            image: "https://i.imgur.com/QCkdEfR.jpg",
            date: "9 September",
            author: {
                image: "https://i.imgur.com/YsPuFYq.png",
                name: "Markiian Rakochyi"
            }
        },
        {
            shortDescription: "Дослідження Брістольського університету, опубліковане в Nature Communications, показує, що самці дельфінів здатні сформувати концепцію командної роботи.",
            image: "https://i.imgur.com/7jdI1sV.jpg",
            date: "25 January",
            author: {
                image: "https://i.imgur.com/Rq31okB.jpg",
                name: "Stepan Bandera"
            }
        },
        {
            shortDescription: "Джон Трейнор, Ендрю Альт і їх команда в Дослідницькому центрі Едварда Ф. Доміно при Мічиганському університеті спробували знайти альтернативу традиційним опіоїдних препаратів, таким як фентаніл, морфін і героїн, використовуючи власну здатність тіла блокувати біль.",
            image: "https://i.imgur.com/vERHIQ7.jpg",
            date: "16 May",
            author: {
                image: "https://i.imgur.com/clE9M1t.gif",
                name: "Johny Boy"
            }
        },
        {
            shortDescription: "Вчені з Інституту нейробіології ім. Макса Планка, вивчаючи на прикладі мишей то, як в мозку відбуваються процеси категоризації об'єктів, продемонстрували, що навіть миші здатні розбивати об'єкти на категорії і оперувати абстрактними концепціями. У дослідженні були знайдені нейрони, що відповідають за кодування категорій. Робота опублікована в журналі Nature.",
            image: "https://i.imgur.com/I4X4Nco.jpg",
            date: "12 April",
            author: {
                image: "https://i.imgur.com/ZONK2Mi.png",
                name: "Sexy Mouse"
            }
        }
    ];

    getPosts() {
        return this.posts;
    }

    getRandomPost(){
        return this.posts[2];
    }
}