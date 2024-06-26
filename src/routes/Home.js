import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home(){
    return(
        <>
        <Navbar />
         <Hero 
         cName="hero"
         heroImg="https://images.unsplash.com/photo-1542044896530-05d85be9b11a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         title="Your Journey Your Story"
         text="Choose Your Favourite Destination."
         buttonText="Travel Planner"
         url="/"
         btnClass="show"

         />        
        <Destination/>
        <Trip/>
       <Footer/>
        </>
    )
}

export default Home;