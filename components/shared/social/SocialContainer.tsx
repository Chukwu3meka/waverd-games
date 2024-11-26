import { Social } from "./Social";
import { SOCIAL_ACCOUNTS } from "utils/constants";

import dynamic from "next/dynamic";
const Flex = dynamic(() => import("antd").then((x) => x.Flex));

const SocialContainer = ({ filterParams, fontSize = "18px" }: { fontSize?: string; filterParams: string[] }) => (
  <Flex>
    {SOCIAL_ACCOUNTS.filter((acc) => filterParams.includes(acc.id)).map(({ title, id, href }) => (
      <Social key={id} account={title} link={href} fontSize={fontSize} />
    ))}
  </Flex>
);

export default SocialContainer;
