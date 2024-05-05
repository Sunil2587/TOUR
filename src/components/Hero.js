import "./Hero.css";

function Hero(props){
    return(
        <>
        <div className={props.cName}>
        <img alt="Heroimg" src={props.heroImg} />
        </div>

        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
             <a href={props.url} className={props.btnClass}>
                {props.buttonText}</a>
        </div>
        </>
    )
}

export default Hero;