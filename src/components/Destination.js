
import "./Destination.css"
import DestinationData from "./DestinationData";

import Mountain1 from "../asserts/77.jpg";
import Mountain2 from "../asserts/78.jpg";
import Mountain3 from "../asserts/3.jpg";
import Mountain4 from "../asserts/4.jpg";
const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity</p> 
        <DestinationData
        className= "first-des"
        heading="Badrinath Kedarnath Himalayan Pilgrimage"
        text="Nestled among the serene heights of the great Himalayas are 02 holy Hindu pilgrim-destinations namely Kedarnath, and Badrinath, collectively known as DOr Dham. These pilgrimage centers draw the maximum numbers of pilgrims each year, thus becoming the most important hubs of religious travel in the whole of Northern India. Traditionally, the pilgrimage begins from the West and ends in the East. Thus, the DO Dham Yatra commences from Delhi Rishikesh then to Kedarnath and finally Badrinath."
        img1= {Mountain1}
        img2={Mountain2}
        />


<DestinationData
className="first-des-reverse" 
        heading="Munnar"
        text="When visiting Munnar, Kerala, guests should head to its famous evergreen tea plantations. These offer a beautiful view of Munnar's rolling hills, perfect for taking captivating photos. Aside from this, the city is also home to the Eravikulam National Park. Visitors will see various wild goats in their lush habitat."
        img1={Mountain3}
        img2={Mountain4}
        />
        
            </div>
    );
};

export default Destination;