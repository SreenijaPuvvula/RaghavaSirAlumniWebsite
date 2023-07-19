import Aos from "aos";
import { useEffect } from "react";
export default function CreateCard(props) {
    useEffect(()=>{
        Aos.init({ duration: 1000 })
      },[])
    function Card(props) {
        return (
            <div className="wallOfFameCard">
                <div >
                    <img src={props.img} alt="alumni" className="wofImage" data-aos="fade-in-out"/>
                </div>
                <div className="wofCardInfo">
                    <h3 data-aos="fade-in-out">{props.name}</h3>
                    <p data-aos="fade-in-out">{props.branch}</p>
                    <p data-aos="fade-in-out">{props.description}</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            {props.info.map(Card)}
            {console.log(props.info)}
        </div>
    )
}