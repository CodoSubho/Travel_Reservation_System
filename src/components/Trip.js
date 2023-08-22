import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/8.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/7.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using google maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="trip in philipins"
          text="The Philippines  Filipino: Pilipinas), officially the Republic of the Philippines (Filipino: Republika ng Pilipinas),[d] is an archipelagic country in Southeast Asia. In the western Pacific Ocean, it consists of 7,641 islands which are broadly categorized in three main geographical divisions from north to south: Luzon, Visayas, and Mindanao.."
        />
        <TripData
          image={Trip2}
          heading="trip in manali "
          text="Manali, city located in the centre of mainland  Asia. Located wholly within the tropics, Thailand encompasses diverse ecosystems, including the hilly forested areas of the northern frontier, the fertile rice fields of the central plains, the broad plateau of the northeast, and the rugged coasts along the narrow southern peninsula."
        />
        <TripData
          image={Trip3}
          heading="trip in thailand"
          text="Thailand, country located in the centre of mainland Southeast Asia. Located wholly within the tropics, Thailand encompasses diverse ecosystems, including the hilly forested areas of the northern frontier, the fertile rice fields of the central plains, the broad plateau of the northeast, and the rugged coasts along the narrow southern peninsula."
        />
      </div>
    </div>
  );
}
export default Trip;
