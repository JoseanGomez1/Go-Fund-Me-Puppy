import { MainNav } from "../Navigation";
const headerImage =
  "https://t4.ftcdn.net/jpg/00/50/88/69/360_F_50886917_yChVR43wDepJIlbPU6xYEE92rPchmena.jpg";


const Header = ({ heroImage }) => {
  return (
    <header style={{ height: "360px", overflow: "hidden" }}>
      <MainNav />
      <img style={{ width: "100%" }} src={heroImage || headerImage} />
    </header>
  );
};
export default Header;