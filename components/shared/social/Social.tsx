import { Button } from "antd";
import { TbPhoneCall } from "react-icons/tb";
import { VscGithubInverted } from "react-icons/vsc";
import { MdFacebook, MdOutlineWhatsapp } from "react-icons/md";
// import { Social } from "interfaces/components/others/shared.interface";
import { TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";

export const Social = ({ account, link, fontSize }: { link: string; account: string; fontSize: string }) => {
  let icon;

  switch (account) {
    case "Whatsapp":
      icon = <MdOutlineWhatsapp fontSize={fontSize} />;
      break;
    case "Twitter":
      icon = <TiSocialTwitter fontSize={fontSize} />;
      break;
    case "Instagram":
      icon = <TiSocialInstagram fontSize={fontSize} />;
      break;
    case "Facebook":
      icon = <MdFacebook fontSize={fontSize} />;
      break;
    case "LinkedIn":
      icon = <TiSocialLinkedin fontSize={fontSize} />;
      break;
    case "Github":
      icon = <VscGithubInverted fontSize={fontSize} />;
      break;
    case "Phone":
      icon = <TbPhoneCall fontSize={fontSize} />;
      break;

    default:
      icon = <></>;
  }

  return icon ? (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={account.toLowerCase()}>
      <Button type="text" aria-label="change-theme" icon={icon} />
    </a>
  ) : null;
};
