import React from "react";
import Image from "next/image";
const Applications = () => {
  return (
    <footer className="flex justify-between items-center gap-[110px] absolute bottom-[-3700px]">
      <div className="flex flex-col gap-5">
        <div className="flex gap-3">
          <Image src="/Exclude.svg" width={25} height={25} alt="logo" />
          <p className="text-2xl text-white">GreenBank</p>
        </div>
        <p className="text-[#ADB2B1] w-[400px]">Discover the power of our secure and rewarding credit cards</p>
      </div>
      <nav className="flex gap-[6.5rem]">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl">About us</h3>
          <ul>
            <li className="text-[#ADB2B1]">Investors</li>
            <li className="text-[#ADB2B1]">Features</li>
            <li className="text-[#ADB2B1]">Book a demo</li>
            <li className="text-[#ADB2B1]">Security</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl">Products</h3>
          <ul>
            <li className="text-[#ADB2B1]">Credit Cards</li>
            <li className="text-[#ADB2B1]">Gift Cards</li>
            <li className="text-[#ADB2B1]">Savings accounts</li>
            <li className="text-[#ADB2B1]">NFT</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl">Useful Links</h3>
          <ul>
            <li className="text-[#ADB2B1]">Free rewards</li>
            <li className="text-[#ADB2B1]">Documentation</li>
            <li className="text-[#ADB2B1]">Affiliate program</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl">Social</h3>
          <ul>
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
