interface IFeatured { 
    category:string, 
    name:string, 
    details:string,
    id: number
    gitlink?:URL,
    livelink?:URL
} 

export const Featured: Array<IFeatured> = [
    {
        category : "Blockgames Collaboration", 
        name : "Metafiles", 
        details : "A dapp built to upload and share files publicly or privately on the platform. The dapp uses ipfs for file storage and addressing and the blockchain for keeping record of updates &/ uploads - as a way to make the data immutable.",
        id:1,
        gitlink : new URL("https://github.com/Phyf3/Decentralized-Library"),
        livelink : new URL("https://metafiles.netlify.app")
    },
    {
        category: "FrontendMentor Challenge", 
        name: "room.", 
        details: "A really simple homepage for an hypothetical furniture company",
        id:2,
        gitlink : new URL("https://github.com/Phyf3/room"),
        livelink : new URL("http://room-iota.vercel.app/")
    },
    {
        category:"Personal Project", 
        name:"spread", 
        details:"A dapp i`m building for mass disbursing of tokens on testnets(for now). It currently only supports ERC20 tokens but i`m working on adding support for other token standards like ERC1155 and maybe ERC721. Working on making it compatible with other testnets too",
        id:3,
        gitlink : new URL("https://github.com/Phyf3/spread"),
        livelink : new URL('https://spread-sigma.vercel.app/')
    }
]

interface IArchiveProjects { 
    category?:string, 
    name:string, 
    details?:string,
    id: number
    gitlink?:URL,
    livelink?: URL
} 
export const ArchiveProjects : Array<IArchiveProjects> = [
    {
        name : "data-structures-and-algorithms",
        details: "my notes on data structures and algorithms from freecodecamp and other sources",
        id : 1,
        gitlink : new URL("https://github.com/Phyf3/data-structures-and-algorithms"),
    },
    {
        name : "speedrunEth-quests",
        details: "repo containing my completed speedruneth quests",
        id : 2,
        gitlink : new URL("https://github.com/Phyf3/SpeedrunEth-Quests"),
    },
    {
        name : "voting dapp",
        details : "codebase for a voting dapp i contributed to during a blockchain cohort,i mainly worked with solidity",
        id: 3,
        gitlink : new URL("https://github.com/maura-dev/Voting-Dapp.git"),
    },
    {
        name : "rest-countries",
        details: "web app to get information about countries, data fetched from rest apis, built with react",
        id : 4,
        gitlink : new URL("https://github.com/Phyf3/REST-Countries-web-app"),
        livelink : new URL("https://rest-countries-web-appp.vercel.app/")
    },
    {
        name : "tip-calculator",
        details: "a vanilla js project to calculate tips for a service in percentages and per person",
        id : 5,
        gitlink : new URL("https://github.com/Phyf3/tip-calculator-web-app-with-vanilla-js"),
        livelink : new URL("https://tip-calculator-phyf3.vercel.app/")
    },
    {
        name : "rock-paper-scissors game",
        details: "",
        id : 6,
        gitlink : new URL("https://github.com/Phyf3/rock-paper-scissors-game-using-vanilla-js"),
        livelink : new URL("https://rock-paper-scissors-game-using-vanilla-js.vercel.app/")
    },
    {
        name : "todo app",
        details: "learning project built to learn how to work with nodejs, express and mongodb ",
        id : 7,
        gitlink : new URL("https://github.com/Phyf3/todo-app-mernstack"),
        livelink : new URL("https://mernstack-taskapp.netlify.app/")
    },
    {
        name : "indiebrew-landing-page",
        details: "",
        id : 8,
        gitlink : new URL("https://github.com/Phyf3/IndieBrew-Landing-Page"),
        livelink : new URL("http://indie-brew-landing-page-gray.vercel.app/")
    }

]
