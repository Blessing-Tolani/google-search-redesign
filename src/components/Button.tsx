import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-lightGray3  text-black1 text-sm w-[300px] py-2 space-x-3 flex rounded-full justify-center items-center">
      <span>{children}</span>
      <svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#70757a"
        width={20}
        height={20}
      >
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
      </svg>
    </button>
  );
}
