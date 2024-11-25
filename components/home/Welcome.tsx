import { welcomeStyles } from ".";
import Link from "next/link";
import { Button, Typography } from "antd";
import { VscHubot } from "react-icons/vsc";
import { IoGameControllerOutline } from "react-icons/io5";

const Welcome = () => (
  <div className={welcomeStyles.welcome} data-testid="welcome">
    <main>
      <aside>
        <span>Welcome to</span>

        <span style={{ fontWeight: 900 }}>
          <a href="/organization" rel="noopener noreferrer" target="_blank">
            Wave Research
          </a>
        </span>

        <span>
          The ultimate destination for football enthusiasts and managers, designed to provide you with everything you need to stay ahead of the game.
        </span>

        <span>
          With our cutting-edge tools and in-depth insights, you can access real-time data. So join us today and experience the power of data-driven
          football API like never before!
        </span>

        <nav>
          <Link href="/games">
            <Button size="large" type="primary" icon={<IoGameControllerOutline />}>
              <Typography>Soccer Manager</Typography>
            </Button>
          </Link>

          <Link href="/apihub">
            <Button size="large" type="primary" icon={<VscHubot />}>
              <Typography>API Hub</Typography>
            </Button>
          </Link>
        </nav>
      </aside>
    </main>
  </div>
);

export default Welcome;
