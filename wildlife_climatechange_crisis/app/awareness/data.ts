import conventionCenter from "@/public/conventionCenter.png"
import sfu from "@/public/sfu.png"
import surrey from "@/public/surrey.png"
import coquitlam from "@/public/coquitlam.png"
import vancouver from "@/public/vancouver.png"
import { StaticImageData } from "next/image";

type event = {
    type: ("Protest" | "Conference" | "Workshop" | "Fundraiser");
    title: string;
    description: string;
    date: string;
    location: string;
    picture: StaticImageData;
}
export const upcomingEvents:event[] = [
    {
        //The event is a protest against building coal power plant a city in BC
        type: "Protest",
        title: "Coal Power Plant Protest",
        description: "Join us in protesting the construction of a new coal power plant in Coquitlam to protect the local wildlife and reduce carbon emissions.",
        date: "Feb 18, 2025",
        location: "Coquitlam, BC",
        picture: coquitlam
    },
    {
        type: "Conference",
        title: "Greta Thunberg Talk",
        description: "Listen to Greta Thunberg speak about climate change and the importance of protecting wildlife.",
        date: "Mar 2, 2025",
        location: "Vancouver, BC",
        picture: vancouver
    },
    {
        type: "Workshop",
        title: "Climate Change Workshop",
        description: "Learn about the effects of climate change on wildlife and how you can help protect endangered species.",
        date: "Mar 15, 2025",
        location: "Simon Fraser University",
        picture: sfu
    },
    {
        type: "Fundraiser",
        title: "Wildlife Conservation Fundraiser",
        description: "Support wildlife conservation efforts by attending our fundraiser event.",
        date: "Apr 5, 2025",
        location: "Kelowna, BC",
        picture:conventionCenter, 
    },
    {
        type: "Fundraiser",
        title: "Surrey Run for Wildlife",
        description: "Join us for a charity run to raise funds for wildlife conservation.",
        date: "Apr 20, 2025",
        location: "Surrey, BC",
        picture: surrey
    }
];