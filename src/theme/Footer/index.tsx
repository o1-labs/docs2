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
  return (
    <div className={styles.minaFooter}>
      <div className={styles.minaFooter_container}>
        <div className={styles.minaFooter_col1}>
          <img alt="Mina Logo" src="/img/footer/logo.svg" loading="lazy" />
          <div className={styles.minaFooter_form}>
            <h4>GET UPDATES</h4>
            <p>Mina is growing fast! Subscribe to stay updated</p>
            <div>
              {/* <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter Email"
                />
              </div> */}
              <div>
                <Button color="orange">
                  <span>Submit</span>
                  <ArrowRightSmall />
                </Button>
              </div>
            </div>
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
      </div>
    </div>
  );
}

export default React.memo(Footer);
