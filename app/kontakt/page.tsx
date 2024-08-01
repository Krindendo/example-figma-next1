import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Kontakt() {
  return (
    <section className="container flex justify-center items-center gap-16 h-full flex-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319427.7992320492!2d29.76505212311348!3d59.94034692161916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90YIg0J_QtdGC0LXRgNGB0LHRg9GA0LMsINCg0YPRgdC40ZjQsA!5e1!3m2!1ssr!2srs!4v1722520301009!5m2!1ssr!2srs"
        className="border-none w-3/5 h-full"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="flex flex-col justify-center gap-4 w-2/5">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faPhone} color="#fb923c" width="25px" />
          <p>(123) 123-1234</p>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faLocationDot} color="#fb923c" width="25px" />
          <p></p>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faClock} color="#fb923c" width="25px" />
          <div>
            <p>Ponedeljak: 4:00 PM - 10:00 PM</p>
            <p>Utorak: 4:00 PM - 10:00 PM</p>
            <p>Sreda: 4:00 PM - 10:00 PM</p>
            <p>Cetvrtak: 4:00 PM - 10:00 PM</p>
            <p>Petak: 4:00 PM - 10:00 PM</p>
            <p>Subota: 4:00 PM - 10:00 PM</p>
            <p>Nedelja: 4:00 PM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
