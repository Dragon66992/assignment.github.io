import ReactDOM from 'react-dom/client'
import img1 from './img/01.jpg'
import img2 from './img/02.jpg'
import img3 from './img/03.jpg'
import img4 from './img/04.jpg'
import img5 from './img/05.jpg'
import img6 from './img/06.jpg'
import img7 from './img/07.jpg'
import img8 from './img/08.jpg'
import img9 from './img/09.jpg'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

function App(){

  return(
    <div>
      <Header /> 
      <AllGames /> 
      <Footer />         
    </div>
  )
}

function Header(){
  return(
    <header className = "header">
      <h1>Games Store</h1>
      <h2>សូមរីករាយជាមួយនឹងហ្គេមកុំព្យូទ័រ</h2>
      <p>This platform provides you with a wide selection of the best PC games to play, all at the best prices available.</p>
    </header>
  )
}

let gamesData = [
  {
    id: 1, 
    img: img1 ,
    name: "The Elder Scrolls® Online",
    details: "Explore a rich, living world with friends or embark upon a solo adventure. Enjoy complete control over how your character looks and plays, from the weapons you wield to the skills you learn the choices you make will shape your destiny.",
    price: 29.99,
  },
  {
    id: 2, 
    img: img2 ,
    name: "Black Myth: Wukong",
    details: "Black Myth: Wukong is an action RPG rooted in Chinese mythology. The story is based on Journey to the West, one of the Four Great Classical Novels of Chinese literature.",
    price: 59.99,
  },
  {
    id: 3, 
    img: img3 ,
    name: "Grand Theft Auto V",
    details: "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
    price: 19.99,
  },
  {
    id: 4, 
    img: img4 ,
    name: "Sons Of The Forest",
    details: "Sons Of The Forest contains intense violence, blood and gore, as well as horror themes and occasional nudity.",
    price: 9.99,
  },
  {
    id: 5, 
    img: img5 ,
    name: "Devil May Cry 5",
    details: "The ultimate Devil Hunter is back in style, in the game action fans have been waiting for.",
    price: 29.99,
  },
  {
    id: 6, 
    img: img6 ,
    name: "The Elder Scrolls V: Skyrim Special Edition",
    details: "Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features.",
    price: 39.99,
  },
  {
    id: 7, 
    img: img7 ,
    name: "Horizon Forbidden West™ Complete Edition",
    details: "Experience the epic Horizon Forbidden West™ in its entirety with bonus content and the Burning Shores expansion included.",
    price: 59.99,
  },
  {
    id: 8, 
    img: img8 ,
    name: "Among Us3",
    details: "An online and local party game of teamwork and betrayal for 4-15 players...in space!",
    price: 2.99,
  },
  {
    id: 9, 
    img: img9 ,
    name: "RimWorld",
    details: "A sci-fi colony sim driven by an intelligent AI storyteller. Generates stories by simulating psychology, ecology, gunplay, melee combat, climate, biomes, diplomacy, interpersonal relationships, art, medicine, trade, and more.",
    price: 34.99,
  },
]

function Games(props){
  const {data} = props;
  return(
    <section className = "game">
      <img src={data.img} alt="img" />
      <div>
        <h3>{data.name}</h3>
        <p>{data.details}</p>
        <p className = "price">${data.price}</p>
      </div>
    </section>
  )
}

function AllGames(){
  return(
    <main className = "all-games">
      {
        gamesData.map(function(item){
          return(
            <Games 
              key = {item.id}
              data = {item}
            />
          )
        })
      }
    </main>
  )
}

function Footer(){
  return(
    <footer className = "footer">

      <div>
        <h3>To buy the games please contact: </h3>
        <p>Email: games@steam.com</p>
        <p>Phone: 0123 5689 9289</p>
      </div>

      <div>
        <p>MasterIT Assignment</p>
        <p>Copyright &copy; : All the information copy from Stream</p>
      </div>
      
      <div>
        <h3>For more games play and the system requirements, please go to : </h3>
        <p>Go to steam website by click on the link below</p>
        <a href="https://store.steampowered.com/">Steam</a>
      </div>

    </footer>
  )
}