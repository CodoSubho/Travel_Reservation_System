import Mountain1 from "../assets/10.jpg";
import Mountain2 from "../assets/3.jpg";
import Mountain3 from "../assets/6.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destintion">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Paris,France"
        text="Bonjour Mon Ami! Paris needs no formal introduction - synonymous with culture, architecture, food and fashion. That je ne sais quoi of the French capital makes it the dream destination for many. So would you want to leave Paris 'Before Sunset' or would you take our word and spend a 'Midnight in Paris'?! The mesmerizing wrought-iron spire of the Eiffel Tower piercing the skyline, the Arc de Triomphe guarding the most glamorous avenue, the Champs Elysees, the regal Notre Dame cathedral, lamp lit bridges spanning the Seine and art nouveau cafes spilling onto wicker-chair-lined terraces.             
       "
        text1="Price: $400"
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="India"
        text="With spectacular valleys, breathtaking views, snowcapped mountains, and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh. Gifted to the world by the mighty Himalayas, it is known to be one of the most popular destinations."
        text1="Price: $300"
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
