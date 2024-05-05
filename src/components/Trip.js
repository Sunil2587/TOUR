import "./trip.css";
import TripData from "./TripData";
import Trip1 from "../asserts/4.jpg"
import Trip2 from "../asserts/5.jpg"
import Trip3 from "../asserts/6.jpg"

function Trip(){
 return(
    <div className="trip">
        <h1> Recent Trips</h1>
        <p>You can discover uninque destinations using Google Maps</p>
<div className="tripcard">
    <TripData
    image={Trip1}
    heading="Trip in NEWUS"
    text="paragaph rasuko"
    />
<TripData
    image={Trip2}
    heading="Trip in NEWUS"
    text="paragaph rasuko"
    />
    <TripData
    image={Trip3}
    heading="Trip in NEWUS"
    text="paragaph rasuko"
    />

</div>
    </div>
 )
}

export default Trip;