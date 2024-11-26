import { styles } from ".";
import Link from "next/link";
import dynamic from "next/dynamic";
import pageInfo from "utils/page-info";

const Text = dynamic(() => import("antd").then((x) => x.Typography.Text));
const Title = dynamic(() => import("antd").then((x) => x.Typography.Title));
const SocialContainer = dynamic(() => import("components/shared/social/SocialContainer"));

const Footer = () => (
  <div data-testid="footer" className={styles.footer} style={{ maxWidth: "100vw", overflowX: "hidden" }}>
    <footer>
      <main>
        <aside>
          <Title ellipsis type="secondary" style={{ fontWeight: 700, fontSize: "2.2em" }}>
            Wave Research
          </Title>

          <img src="/images/layout/waverd.webp" alt="Wave Research" width={80} height={80} />

          <Text code>Follow US</Text>

          <SocialContainer filterParams={["twitter", "instagram", "github", "whatsapp", "linkedin", "phone", "facebook"]} fontSize="20px" />
        </aside>

        <nav>
          <div>
            <Text type="secondary">
              <label>Wave Research</label>
            </Text>

            <a href="https://blog.waverd.com/">Blog</a>
            <Link href={pageInfo.organization.path}>{pageInfo.organization.title}</Link>
            <Link href={pageInfo.passwordReset.path}>{pageInfo.passwordReset.title}</Link>
            <Link href={pageInfo.advertisement.path}>{pageInfo.advertisement.title}</Link>
            <Link href={pageInfo.contactUs.path}>Bug Report</Link>
            {/* <a href="https://github.com/Wave Research-Inc/Wave Research-Web/issues" rel="noopener noreferrer" target="_blank"></a> */}
          </div>

          <div>
            <Text type="secondary">
              <label>Learn More</label>
            </Text>

            <Link href={pageInfo.contactUs.path}>Contact Us</Link>
            <Link href={pageInfo.termsAndCondition.path}>Terms &amp; Conditions</Link>
            <Link href={pageInfo.privacyPolicy.path}>Privacy Policy</Link>
            <Link href={pageInfo.faq.path}>Freq. Asked Questions</Link>
            <Link href={pageInfo.dataDeletion.path}>Data Deletion</Link>
          </div>

          <div>
            <Text type="secondary">
              <label>Partners</label>
            </Text>

            <a href="https://apihub.waverd.com/">API Hub</a>
            <Link href={pageInfo.sponsors.path}>{pageInfo.sponsors.title}</Link>
            <a href="https://games.waverd.com/">Soccer Manager</a>
            <a href="https://translate.waverd.com/">Translation</a>
            <a href="https://waverd.com/">Jobs & Career</a>
            {/* <a href="https://waverd.com/">Agriculture</a> */}
            {/* <a href="https://waverd.com/">Homes & Space</a> */}
            {/* <a href="https://waverd.com/">Hourly Jobs</a> */}
          </div>
        </nav>
      </main>

      <section>
        <Text
          type="secondary"
          style={{
            fontSize: ".8em",
          }}>
          <span>
            Powered with 💗 by&nbsp;
            <a href="https://mongodb.com/" rel="noopener noreferrer" target="_blank">
              MongoDB
            </a>
            ,&nbsp;
            <a href="https://vercel.com/" rel="noopener noreferrer" target="_blank">
              Vercel
            </a>
            &nbsp;&&nbsp;
            <a href="https://render.com/" rel="noopener noreferrer" target="_blank">
              Render
            </a>
          </span>
        </Text>

        <Text
          type="secondary"
          style={{
            fontSize: ".8em",
          }}>
          ● All rights reserved. All trademarks are the property of their respective owners ●<span></span>
        </Text>

        <Text
          type="secondary"
          style={{
            fontSize: "1em",
          }}>
          <span>©Wave Research 2018 ~ {new Date().getFullYear()}</span>
        </Text>
      </section>
    </footer>
  </div>
);

export default Footer;
