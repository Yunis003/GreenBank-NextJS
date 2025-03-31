import React from "react";
import Image from "next/image";
const Applications = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-[110px] bottom-0 left-0 w-full p-5 md:p-10">
      <div className="flex flex-col gap-5 items-center md:items-start">
        <div className="flex gap-3 items-center">
          <Image src="/Exclude.svg" width={25} height={25} alt="logo" />
          <p className="text-2xl text-white">GreenBank</p>
        </div>
        <p className="text-[#ADB2B1] max-w-[400px] text-center md:text-left">Discover the power of our secure and rewarding credit cards</p>
      </div>
      <nav className="flex flex-col md:flex-row gap-8 md:gap-[6.5rem] items-center">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h3 className="text-xl">About us</h3>
          <ul className="flex flex-col gap-1 items-center md:items-start">
            <li className="text-[#ADB2B1]">Investors</li>
            <li className="text-[#ADB2B1]">Features</li>
            <li className="text-[#ADB2B1]">Book a demo</li>
            <li className="text-[#ADB2B1]">Security</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h3 className="text-xl">Products</h3>
          <ul className="flex flex-col gap-1 items-center md:items-start">
            <li className="text-[#ADB2B1]">Credit Cards</li>
            <li className="text-[#ADB2B1]">Gift Cards</li>
            <li className="text-[#ADB2B1]">Savings accounts</li>
            <li className="text-[#ADB2B1]">NFT</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h3 className="text-xl">Useful Links</h3>
          <ul className="flex flex-col gap-1 items-center md:items-start">
            <li className="text-[#ADB2B1]">Free rewards</li>
            <li className="text-[#ADB2B1]">Documentation</li>
            <li className="text-[#ADB2B1]">Affiliate program</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-start">
          <h3 className="text-xl">Social</h3>
          <ul className="flex flex-col gap-1 items-center md:items-start">
            <li className="text-[#ADB2B1]">Changelog</li>
            <li className="text-[#ADB2B1]">Licenses</li>
            <li className="text-[#ADB2B1]">Site Maps</li>
            <li className="text-[#ADB2B1]">News</li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Applications;
