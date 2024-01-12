import FacebookIcon from "../icons/FacebookIcon";
import GitHubIcon from "../icons/GitHubIcon";
import TwitterXIcon from "../icons/TwitterXIcon";
import YouTubeIcon from "../icons/YouTubeIcon";

// TODO: Resize icons reactively?

const Footer: any = () => {
  return (
    <footer className="footer my-auto footer-center p-10 bg-base-400 text-base-content rounded">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <YouTubeIcon />
          </a>
          <a>
            <TwitterXIcon />
          </a>
          <a>
            <FacebookIcon />
          </a>
          <a>
            <GitHubIcon />
          </a>
        </div>
      </nav>
      <aside>
        <p>© 2019-{new Date().getFullYear()} Studio Kookajoo</p>
      </aside>
    </footer>
  );
};

export default Footer;
