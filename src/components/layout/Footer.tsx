import Image from "next/image";
import facebookIcon from "/public/facebook-icon.svg";
import gitHubIcon from "/public/github-icon.svg";
import twitterXIcon from "/public/twitterx-icon.svg";
import youTubeIcon from "/public/youtube-icon.svg";
import mastodonIcon from "/public/mastodon-icon.svg"

// TODO: Resize icons reactively?

const Footer: any = () => {
  return (
    <footer className="footer my-auto footer-center p-10 bg-base-400 text-base-content rounded">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <Image src={youTubeIcon} alt="YouTube icon" />
          </a>
          <a>
            <Image src={twitterXIcon} alt="TwitterX icon" />
          </a>
          <a>
            <Image src={mastodonIcon} alt="Mastodon icon" />
          </a>
          <a>
            <Image src={facebookIcon} alt="Facebook icon" />
          </a>
          <a>
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
