import React from "react";

import { useThemeConfig } from "@docusaurus/theme-common";
import FooterLinks from "@theme/Footer/Links";
import FooterLogo from "@theme/Footer/Logo";
import FooterCopyright from "@theme/Footer/Copyright";
import FooterLayout from "@theme/Footer/Layout";

import { SocialLinks } from "@site/src/constants";
import DiscordLogo from "@site/static/img/socials/discord_24x24.svg";
import TwitterLogo from "@site/static/img/socials/twitter_24x24.svg";
import FacebookLogo from "@site/static/img/socials/facebook_24x24.svg";
import TelegramLogo from "@site/static/img/socials/telegram_24x24.svg";
import WeChatLogo from "@site/static/img/socials/wechat_24x24.svg";
import YoutubeLogo from "@site/static/img/socials/youtube_24x24.svg";

function Footer(): JSX.Element | null {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright, links, logo, style } = footer;

  return (
    <div className="">
      <div className="">
        <div className="">
          <img
            className=""
            alt="Mina Logo"
            src="/img/footer/logo.svg"
            loading="lazy"
          />
          <div className="mt-40 [&>*]:text-white">
            <h4 className="text-xl font-normal uppercase tracking-wider ">
              GET UPDATES
            </h4>
            <p className="mb-4 text-xl  opacity-70">
              Mina is growing fast! Subscribe to stay updated
            </p>
          </div>
          <div className="">
            <h4 className=" ">CONNECT</h4>
            <p className="">Join the conversation.</p>
          </div>
          <div className="">
            <a
              target="_blank"
              href={SocialLinks.Discord}
              className="w-[32px] no-underline"
            >
              <DiscordLogo />
            </a>
            <a
              target="_blank"
              href={SocialLinks.Twitter}
              className="w-[32px] no-underline"
            >
              <TwitterLogo />
            </a>
            <a
              target="_blank"
              href={SocialLinks.Facebook}
              className="w-[32px] no-underline "
            >
              <FacebookLogo />
            </a>
            <a
              target="_blank"
              href={SocialLinks.Telegram}
              className="w-[32px] no-underline"
            >
              <TelegramLogo />
            </a>
            <a
              target="_blank"
              href={SocialLinks.WeChat}
              className="w-[32px] no-underline"
            >
              <WeChatLogo />
            </a>
            <a
              target="_blank"
              href={SocialLinks.Youtube}
              className="w-[32px] no-underline"
            >
              <YoutubeLogo />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Footer);
