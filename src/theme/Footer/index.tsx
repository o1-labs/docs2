import React from "react";

import Button from "@site/src/components/common/Button";
import ArrowRightSmall from "@site/static/img/common/arrow-right-small.svg";

import styles from "./Footer.module.scss";
import { SocialLinks } from "@site/src/constants";
import DiscordLogo from "@site/static/img/socials/discord_24x24.svg";
import TwitterLogo from "@site/static/img/socials/twitter_24x24.svg";
import FacebookLogo from "@site/static/img/socials/facebook_24x24.svg";
import TelegramLogo from "@site/static/img/socials/telegram_24x24.svg";
import WeChatLogo from "@site/static/img/socials/wechat_24x24.svg";
import YoutubeLogo from "@site/static/img/socials/youtube_24x24.svg";

function Footer(): JSX.Element | null {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    // TODO: add email to newsletter
    // console.log(event, email);
  };

  const renderForm = () => {
    if (isSubmitted) {
      return <div>Thanks for subscribing!</div>;
    }
    return (
      <form
        onSubmit={handleSubmit}
        className={styles.minaFooter_form__submitContainer}
      >
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          className={styles.minaFooter_form_input}
        />
        <Button color="orange">
          <span>Submit</span>
          <ArrowRightSmall />
        </Button>
      </form>
    );
  };

  return (
    <div className={styles.minaFooter}>
      <div className={styles.minaFooter_container}>
        <div className={styles.minaFooter_col1}>
          <img alt="Mina Logo" src="/img/footer/logo.svg" loading="lazy" />
          <div className={styles.minaFooter_form}>
            <h4>GET UPDATES</h4>
            <p>Mina is growing fast! Subscribe to stay updated</p>
            {renderForm()}
          </div>
          <div className={styles.minaFooter_social}>
            <h4>CONNECT</h4>
            <p>Join the conversation.</p>
          </div>
          <div className={styles.minaFooter_social__links}>
            <a target="_blank" href={SocialLinks.Discord}>
              <DiscordLogo />
            </a>
            <a target="_blank" href={SocialLinks.Twitter}>
              <TwitterLogo />
            </a>
            <a target="_blank" href={SocialLinks.Facebook}>
              <FacebookLogo />
            </a>
            <a target="_blank" href={SocialLinks.Telegram}>
              <TelegramLogo />
            </a>
            <a target="_blank" href={SocialLinks.WeChat}>
              <WeChatLogo />
            </a>
            <a target="_blank" href={SocialLinks.Youtube}>
              <YoutubeLogo />
            </a>
          </div>
        </div>
        <div className={styles.minaFooter_col2}>
          <ul>
            <li>
              <a href="#">Getting Started</a>
              <ul>
                <li>
                  <a
                    href="https://docs.minaprotocol.com"
                    rel="noopener"
                    target="_blank"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="https://minaprotocol.com/node-operators">
                    Run a Node
                  </a>
                </li>
                <li>
                  <a href="https://minaprotocol.com/genesis">Join Genesis</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Resources</a>
              <ul>
                <li>
                  <a
                    href="https://minaprotocol.com/lightweight-blockchain"
                    rel="noopener"
                    target="_blank"
                  >
                    About the Tech
                  </a>
                </li>
                <li>
                  <a
                    rel="knowledge-base"
                    href="https://minaprotocol.com/get-started"
                  >
                    Get Started
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="/assets/technicalWhitepaper.pdf"
                  >
                    Technical Whitepaper
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="/assets/economicsWhitepaper.pdf"
                  >
                    Economics Whitepaper
                  </a>
                </li>
                <li>
                  <a href="https://minaprotocol.com/media">Media</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Community</a>
              <ul>
                <li>
                  <a href="https://minaprotocol.com/community">Welcome</a>
                </li>
                <li>
                  <a href="https://minaprotocol.com/genesis">Genesis Program</a>
                </li>
                <li>
                  <a href="https://minaprotocol.com/leaderboard">
                    Testnet Leaderboard
                  </a>
                </li>
                <li>
                  <a href="https://minaprotocol.com/work-with-mina">Careers</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Help and Support</a>
              <ul>
                <li>
                  <a target="_blank" rel="noopener" href={SocialLinks.Discord}>
                    Discord
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener" href={SocialLinks.Telegram}>
                    Forums
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener" href={SocialLinks.Github}>
                    Github
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener" href={SocialLinks.Support}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.minaFooter_legals}>
        <div className={styles.minaFooter_legals__menu}>
          <ul>
            <li>
              <a href="https://o1labs.org">O(1) Labs</a>
            </li>
            <li>
              <a href="https://github.com/MinaProtocol/mina/blob/develop/CODE_OF_CONDUCT.md">
                Code of Conduct
              </a>
            </li>
            <li>
              <a href="https://minaprotocol.com/privacy">Privacy</a>
            </li>
            <li>
              <a href="https://minaprotocol.com/tos">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className={styles.minaFooter_legals__info}>
          ©2022 Mina. Started by O(1) Labs.
        </div>
      </div>
    </div>
  );
}

export default React.memo(Footer);
