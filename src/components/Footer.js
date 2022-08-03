import facebook from "../images/icons8-facebook-f-48.svg";
import twitter from "../images/icons8-twitter.svg";
import instagram from "../images/icons8-instagram.svg";
import styled from "../css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styled.footer}>
      <img src={facebook} alt="logo-huddle" className={styled.facebook} />
      <img src={twitter} alt="logo-huddle" className={styled.twitter} />
      <img src={instagram} alt="logo-huddle" className={styled.instagram} />
    </footer>
  );
}
