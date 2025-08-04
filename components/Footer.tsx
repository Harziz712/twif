"use client";

import { FacebookLogoIcon, InstagramLogoIcon, PinterestLogoIcon, TiktokLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import React, { useRef, useState } from "react";


const Footer = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const [showCheckbox, setShowCheckbox] = useState(false);
  return (
    <footer className="bg-[#FAFAF7] px-4 md:px-12 pt-12 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 border-b pb-10  ">
        {/* Newsletter */}
        <div className="col-span-1 md:col-span-1 text-gray-800  ">
          <h3 className="font-semibold text-lg mb-4">
            Subscribe To Our Newsletter To Get Updates
          </h3>
          <div className="flex items-center border-b border-black max-w-sm">
                  <input
              ref={emailRef}
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent py-2 focus:outline-none"
              onClick={() => setShowCheckbox(true)}
          />
          <button className="text-xl font-bold">→</button>
            </div>
          { showCheckbox ? 
                <label className="text-sm mt-3 block text-gray-600">
                    <input type="checkbox" className="mr-2" />
                    I agree to the processing of my email as per the {" "}
                    <span className="underline cursor-pointer">Privacy Notice</span>.
                </label>
            : null
          }
          
        </div>

        {/* Links */}
        <div className="grid grid-cols-4 w-full  gap-6 text-gray-800">
          <div>
            <h4 className="font-semibold mb-4">Men's Store</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Custom Suits</li>
            <li>Custom Dress Shirts</li>
            <li>Custom Blazers</li>
            <li>Custom Pants</li>
            <li>Overcoats</li>
            <li className="underline">Other products</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Women</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Women's Suits</li>
            <li>Women's Dress Shirt</li>
            <li>Women's Blazers</li>
            <li>Women's Dress Pants</li>
            <li>Women's Wool Coats</li>
            <li className="underline">Other products</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>About us</li>
            <li>How it works</li>
            <li>Perfect Fit Guarantee</li>
            <li>Twif Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Contact us</li>
            <li>Order fabric samples</li>
            <li>Track order</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
 </div>

      {/* Payment and Social */}
      <div className="flex flex-wrap justify-between items-start mt-10 gap-6">
        <div>
          <h5 className="font-semibold mb-3 text-gray-800">Payment Methods</h5>
          <div className="flex gap-3">
            {/* <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="/paypal.png" alt="PayPal" className="h-6" />
            <img src="/amex.png" alt="American Express" className="h-6" />
            <img src="/applepay.png" alt="Apple Pay" className="h-6" /> */}
            <img src="/payment.png" alt="Payment Methods"  />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t pt-6 text-sm text-gray-600">
        <p>Copyright 2025 Twif</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <InstagramLogoIcon className="md:h-5 md:w-5 text-gray-600" />
          <FacebookLogoIcon className="md:h-5 md:w-5 text-gray-600" />
          <WhatsappLogoIcon className="md:h-5 md:w-5 text-gray-600" />
          <PinterestLogoIcon className="md:h-5 md:w-5 text-gray-600"  />
          <TiktokLogoIcon className="md:h-5 md:w-5 text-gray-600"  />
        </div>
        <p className="mt-4 md:mt-0">Terms and Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
