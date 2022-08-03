import logoCompany from "../images/logo.svg";
import mockups from "../images/illustration-mockups.svg";
import styled from "../css/Header.module.css";

export default function Header() {
  return (
    <header className={styled.header}>
      <img src={logoCompany} alt="logo-huddle" className={styled.logoCompany} />
      <img src={mockups} alt="logo" className={styled.mockups} />
    </header>
  );
}
