import Image from "next/image";
import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";
import Routes from "../constants/routes";

const AppHeader = () => {
  const router = useRouter();

  const handleLogoClick = () => router.push(Routes.Home);
  const handleAboutClick = () => router.push(Routes.About);

  return (
    <Menu inverted>
      <Menu.Item onClick={handleLogoClick}>
        <Image
          src={require("../assets/logo.png")}
          alt="Logo"
          height={50}
          width={75}
        />
      </Menu.Item>
      <Menu.Item onClick={handleAboutClick}>なにこれ</Menu.Item>
    </Menu>
  );
};

export default AppHeader;
