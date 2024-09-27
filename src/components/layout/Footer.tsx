import Image from "next/image";
import gitHubIcon from "/public/github-icon.svg";
import instagramIcon from "/public/instagram-icon.svg";
import mastodonIcon from "/public/mastodon-icon.svg";
import twitterXIcon from "/public/twitterx-icon.svg";
import youTubeIcon from "/public/youtube-icon.svg";
import { NextComponentType } from "next";

// TODO: Resize icons reactively?

const Footer: NextComponentType = () => {
  return (
    <footer className="footer my-auto footer-center p-10 bg-base-400 text-base-content rounded">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.youtube.com/channel/UCfjxDcuPuavGoLn9V4kECVQ"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={youTubeIcon} alt="YouTube icon" />
          </a>
          <a
            href="https://twitter.com/kookajoo"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={twitterXIcon} alt="TwitterX icon" />
          </a>
          <a
            href="https://mastodon.social/@kookajoo"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={mastodonIcon} alt="Mastodon icon" />
          </a>
          <a
            href="https://www.instagram.com/studiokookajoo/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={instagramIcon} alt="Instagram icon" />
          </a>
          <a
            href="https://github.com/studio-kookajoo"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image src={gitHubIcon} alt="GitHub icon" />
          </a>
        </div>
      </nav>
      <aside>
        <p>© 2019-2024 Studio Kookajoo</p>
      </aside>
    </footer>
  );
};

export default Footer;
