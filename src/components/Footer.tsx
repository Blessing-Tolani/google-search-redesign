import React from 'react';

export default function Footer() {
  return (
    <section className="bg-[#F2F2F2] text-darkGray text-sm">
      <div className="pt-6 pb-2 border-b border-lightGray1 flex items-center  pl-44">
        <p className="border-r pr-4 border-darkGray">Nigeria</p>
        <p className=" pl-2 ">
          <span className="inline-block w-2.5 h-2.5 bg-darkGray rounded-full "></span>
          <strong className="ml-1">Odogunyan, Ikorodu - </strong>
          <span className="text-blueLink">
            Based on your past activity - Update location
          </span>
        </p>
      </div>
      <p className="flex space-x-6  pl-44 pt-2 pb-6">
        <span className="cursor-pointer hover:text-black1">Help</span>
        <span className="cursor-pointer hover:text-black1">Send feedback</span>
        <span className="cursor-pointer hover:text-black1">Privacy</span>
        <span className="cursor-pointer hover:text-black1">Terms</span>
      </p>
    </section>
  );
}
