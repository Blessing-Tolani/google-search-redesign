import More from '../assets/icons/More';
import Upward from '../assets/icons/Upward';
import Button from './Button';

export default function RelatedSearch() {
  const relatedSearch = [
    'jr',
    'instagram',
    'net worth',
    'chelsea',
    'wife',
    'wikipedia',
    'transfermarkt',
    'news',
  ];

  return (
    <section className="mt-6 pr-16">
      <div className="flex space-x-2 cursor-pointer items-center">
        <p className="text-[22px] text-black1 hover:text-blueLink">
          Related searches
        </p>
        <More />
      </div>
      <hr className="bg-darkGray mt-4 mb-3" />
      <div className="w-full flex justify-between cursor-pointer">
        <p className="text-black1">Portugal strikers</p>
        <Upward />
      </div>
      <div className="flex space-x-2 mt-6 mb-3 text-sm">
        <div className="cursor-pointer">
          <img
            className="w-[102px] h-[102px] rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp79IpuuwdS_J4Nf-Ry12B0kIBBRbEv3jmRp4ZKviu6tQW9_cs0ycA&s=0"
          />
          <p className="text-black1 hover:underline mt-1">João Félix</p>
        </div>
        <div className="cursor-pointer">
          <img
            className="w-[102px] h-[102px] rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ7ye3F18-dyUR0kFAup2ddkktnq8fdICID0xCFvhA9JXtBovgGm1LNVQbxEF6vJcFHNAv2C3E&s=19"
          />
          <p className="text-black1 hover:underline mt-1">Rafa Silva</p>
        </div>
        <div className="cursor-pointer">
          <img
            className="w-[102px] h-[102px] rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymMhlBDO9_FNMEu4XpJ3BtY4aOX5X1Npa-ojvxcl3MUVAq9E6bot8&s=0"
          />
          <p className="text-black1 hover:underline mt-1">
            Daniel <br /> Podence
          </p>
        </div>
        <div className="cursor-pointer">
          <img
            className="w-[102px] h-[102px] rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBLvjKA21A9V9MCauOradvCuBI-DenZ2iYsJi-QoaxS6znA38GSDj&s=0"
          />
          <p className="text-black1 hover:underline mt-1">Diogo Jota</p>
        </div>
        <div className="cursor-pointer">
          <img
            className="w-[102px] h-[102px] rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqbJyheYx6AfU1AU4EgzFeYhhNNie4Hc2Thy8oV2ouvh233oQuIFb&s=0"
          />
          <p className="text-black1 hover:underline mt-1">
            Ricardo <br /> Domingos <br /> Barbosa{' '}
          </p>
        </div>
        <div className="cursor-pointer">
          <img
            className="w-[102px] h-[102px] rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSDyU1_tGfGNHRTwem_4uC5hqjj-q3B8guIl2WPZ-qx_UN7DAHrVVLmA_Cz23hxwYNSHoKknuc7&s=19"
          />
          <p className="text-black1 hover:underline">
            Ricardo <br /> Horta
          </p>
        </div>
      </div>
      <div className="flex justify-center my-6">
        <Button>See More</Button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-[90%] h-0.5 bg-lightGray1"></div>
        <span className="text-sm text-darkGray">Feedback</span>
      </div>
      <div className="grid grid-cols-2 grid-rows-4 gap-x-6 gap-y-2 mt-6">
        {relatedSearch.map((item) => (
          <button className="bg-lightGray3 pl-6  text-black1  w-[310px] py-3 space-x-3 flex rounded-full items-center">
            <img
              className="w-5 h-5"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='rgba(0,0,0,.54)' d='M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z'/%3E%3C/svg%3E"
            />
            <span>
              cristiano ronaldo <strong>{item}</strong>
            </span>
          </button>
        ))}
      </div>
      <div className="my-8 flex items-center justify-center">
        <img src="https://www.midwestmarketingllc.com/wp-content/uploads/2016/10/gooooogle.jpg" />
        <div className="ml-2 ">
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#4285f4"
            width={24}
            height={24}
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </svg>
          <span className="text-[#4285f4] text-sm  hover:underline cursor-pointer">
            Next
          </span>
        </div>
      </div>
    </section>
  );
}
