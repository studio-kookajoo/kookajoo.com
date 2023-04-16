import React from "react";
import { companyData, marketingInfo } from "../contracts/company";
import MediaIcons from "./mediaIcons";

// TODO: Clarify icon for company: Simple "K"? Make SVG to import.
// TODO: Kookajoo logotype to SVG.
// TODO: Breakout text link sections into separate components?

interface FooterProps {
  company: companyData;
  marketing: marketingInfo;
}

const Footer: any = (props: FooterProps) => {
  const companyName: string = props.company.companyName;
  const home: string = props.marketing.homepageUrl;

  return (
    <footer className="fixed bottom-0 w-full p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href={`https://${home}`} className="flex items-center mb-4 sm:mb-0">
          <img
            src={`https://${home}/docs/images/logo.svg`}
            className="mr-3 h-8"
            alt={`${companyName} Logo`}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {companyName}
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href={`https://${home}`} className="hover:underline">
            {companyName}™
          </a>
          . All Rights Reserved.
        </span>
        <MediaIcons />
      </div>
    </footer>
  );
};

export default Footer;
