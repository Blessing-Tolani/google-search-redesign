import React from 'react';
import Downward from '../assets/icons/Downward';
import More from '../assets/icons/More';

export default function PeopleAsk() {
  return (
    <section className="my-6 text-black1">
      <p className="text-[22px] mb-3">People also ask</p>
      <div className="w-full flex py-3 justify-between items-center border-y border-lightGray1">
        <p>Who is No 1 Messi or Ronaldo?</p>
        <Downward />
      </div>
      <div className="w-full flex py-3 justify-between items-center">
        <p>What religion is Ronaldo?</p>
        <Downward />
      </div>
      <div className="w-full flex py-3 justify-between items-center border-y border-lightGray1">
        <p>Why Cristiano Ronaldo is so popular?</p>
        <Downward />
      </div>
      <div className="w-full flex py-3 justify-between items-center">
        <p>How do I contact Ronaldo?</p>
        <Downward />
      </div>

      <div className="flex items-center space-x-4">
        <div className="w-[90%] h-0.5 bg-lightGray1"></div>
        <span className="text-sm text-darkGray">Feedback</span>
      </div>

      <div className="my-6 flex justify-between">
        <div>
          <p className="flex space-x-4 items-center ">
            <p className="text-sm cursor-pointer">
              <span className="text-darkGray">https://en.wikipedia.org</span>
              <span> › wiki › Cristiano_Ronaldo</span>
            </p>
            <More />
          </p>
          <p className="hover:underline text-blueLink mt-2 text-2xl">
            Cristiano Ronaldo - Wikipedia
          </p>
          <p className="text-darkGray w-[60ch] text-sm">
            24 hours ago — <strong>Cristiano Ronaldo</strong> dos Santos Aveiro
            GOIH ComM is a Portuguese professional footballer who plays as a
            forward for Saudi Professional League club Al Nassr and ...
          </p>
          <p className="text-blueLink text-sm mt-1">
            <span className="hover:underline cursor-pointer">
              Cristiano (surname)
            </span>{' '}
            ·{' '}
            <span className="hover:underline cursor-pointer">
              Ronaldo (film)
            </span>{' '}
            ·
            <span className="hover:underline cursor-pointer">
              {' '}
              Cristiano (given name)
            </span>{' '}
            ·{' '}
            <span className="hover:underline cursor-pointer">Irina Shayk</span>
          </p>
        </div>
        <img
          className="w-[92px] h-[92px] rounded-lg"
          src="data:image/jpeg;base64,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"
        />
      </div>
    </section>
  );
}
