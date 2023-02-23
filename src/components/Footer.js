import React from "react";
import * as Icons from "@heroicons/react/24/outline";
const Footer = () => {
  return (
    <>
      <div>
        <div className="border-b-[1px] border-gray-600 py-4 px-4 md:px-40 md:py-4 bg-[#1e2f3b] lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center space-x-2">
            <Icons.PaperAirplaneIcon className="h-5 w-5 text-white" />
            <p className="text-lg  text-white mr-4">Signup For News Letter</p>
          </div>

          <div className="mt-3 w-[70vw] flex rounded bg-white  justify-between  lg:mt-0 md:w-[30vw] md:min-w-[400px]  overflow-hidden">
            <input
              placeholder="Search me"
              className="py-[5px] rounded outline-none px-6 text-zinc-500 w-[50vw] md:w-[33vw]"
            />
            <div className="bg-orange-400 flex items-center justify-center px-2">
              Subscribe
            </div>
          </div>
        </div>

        <div className="bg-[#1e2f3b]">
          <footer class="w-full bg-[#1e2f3b] p-8">
            <div>
              <div>
                <div className="md:flex md:space-x-8 md:justify-between">
                  <div>
                    <div>
                      <h4 class="w-full text-2xl font-bold text-white mt-4">
                        Services
                      </h4>
                      <p class="text-zinc-500 my-2">Market Analysis</p>
                      <p class="text-zinc-500 my-2">Accounting Advisor</p>
                      <p class="text-zinc-500 my-2">General Consutancy</p>
                      <p class="text-zinc-500 my-2">Structured Assesment</p>
                    </div>
                    <div class="flex w-[150px] justify-between">
                      <div class="bg-zinc-700 min-w-[30px] min-h-[30px] rounded-full flex justify-center items-center">
                        <i class="fa-brands fa-facebook text-green-600 "></i>
                      </div>{" "}
                      <div class="bg-zinc-700 rounded-full min-w-[30px] min-h-[30px] flex justify-center items-center">
                        <i class="fa-brands fa-twitter text-green-600"></i>
                      </div>{" "}
                      <div class="bg-zinc-700 rounded-full min-w-[30px] min-h-[30px] flex justify-center items-center">
                        <i class="fa-brands fa-instagram text-green-600"></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 class="w-full text-2xl font-bold text-white mt-4">
                      Services
                    </h4>
                    <p class="text-zinc-500 my-2">Market Analysis</p>
                    <p class="text-zinc-500 my-2">Accounting Advisor</p>
                    <p class="text-zinc-500 my-2">General Consutancy</p>
                    <p class="text-zinc-500 my-2">Structured Assesment</p>
                  </div>

                  <div class="">
                    <h4 class="w-full text-2xl font-bold text-white mt-4">
                      Discover
                    </h4>
                    <p class="text-zinc-500 my-2">About Us</p>
                    <p class="text-zinc-500 my-2">Contact Us</p>
                    <p class="text-zinc-500 my-2">Terms & Conditions</p>
                    <p class="text-zinc-500 my-2">Policies</p>
                  </div>

                  <div>
                    <h4 class="w-full text-2xl font-bold text-white mt-4">
                      Resources
                    </h4>
                    <p class="text-zinc-500 my-2">Security</p>
                    <p class="text-zinc-500 my-2">Global</p>
                    <p class="text-zinc-500 my-2">Charts</p>
                    <p class="text-zinc-500 my-2">Privacy</p>
                  </div>

                  <div>
                    <h4 class="w-full text-2xl font-bold text-white mt-4">
                      Resources
                    </h4>
                    <p class="text-zinc-500 my-2">Security</p>
                    <p class="text-zinc-500 my-2">Global</p>
                    <p class="text-zinc-500 my-2">Charts</p>
                    <p class="text-zinc-500 my-2">Privacy</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="md:flex md:items-center md:mt-14 md:justify-between">
              <p class="text-zinc-500 my-8">
                Copyright ©2023 All rights reserved | Ecommerce made with
                &#128420; by <span class="text-green-600">ChimaUX</span>
              </p>
              ghgfh ngfnhnhndh
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
