import React from "react";
import { Label } from "./Label";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-gray-900 text-center">
      <div className="flex flex-col justify-center items-center space-x-5 mb-5 bg-[grey] text-black">
        <h1 className="font-bold text-lg mb-5">Newsletter</h1>
        <p>Sign up for exclusive offers, events and more</p>
        <p className="mb-5">
          subscibe now.
          <span className="font-bold text-sm"> Read our Privacy Policy</span>
        </p>
        <input
          type="email"
          placeholder="Enter your email to subscribe"
          className="p-2 rounded border border-gray-300"
        />
        <button className="bg-black text-white px-4 py-2 rounded-full  mt-2">
          Subscribe
        </button>
      </div>
      <div className="flex flex-col justify-start items-start text-white">
        <label className="font-bold text-lg mt-5 text-white">Shop</label>
        <a href="#" className=" hover:text-black">
          Ring
        </a>
        <a href="#" className=" hover:text-black">
          Necklace
        </a>
        <a href="#" className=" hover:text-black">
          Bracelet
        </a>
        <a href="#" className=" hover:text-black">
          Wedding
        </a>
      </div>
      <div className="flex flex-col justify-start items-start text-white">
        <Label>Explore</Label>
        <a href="#" className=" hover:text-black">
          Our Story
        </a>
        <a href="#" className=" hover:text-black">
          Category
        </a>
        <a href="#" className=" hover:text-black">
          Store Locations
        </a>
      </div>
      
      <div className="flex flex-col justify-center space-x-4 mb-4">
        <div className="flex justify-center space-x-4 mb-2">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-400 hover:text-white"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-400 hover:text-white"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.981.981-1.275 2.093-1.334 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-400 hover:text-white"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
        <span>
          &copy; {new Date().getFullYear()} Medo The Jewelly. All rights
          reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
