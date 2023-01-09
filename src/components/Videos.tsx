import Forward from '../assets/icons/Forward';
import Button from './Button';

export default function Videos() {
  return (
    <section className="mt-12 pr-16">
      <div className="flex space-x-2 cursor-pointer items-center">
        <p className="text-[22px] text-black1 hover:text-blueLink">Videos</p>
        <Forward />
      </div>
      <hr className="bg-darkGray mt-4 mb-3" />
      <div className="flex space-x-4 cursor-pointer">
        <img
          className="w-[124px] h-[70px] rounded-lg"
          src="https://i.ytimg.com/vi/u8BamEsaSQI/mqdefault.jpg?sqp=-oaymwEECHwQRg&rs=AMzJL3muY0lggY1BJgkizAIdVfblSbtw_A"
        />
        <div>
          <p className="hover:underline text-blueLink">
            Cristiano Ronaldo celebrates Al Nassr win in dressing room
          </p>
          <p className="text-darkGray text-sm mt-2">
            <span className="text-black1">Sky Sports </span>· Sky Sports
          </p>
          <p className="text-darkGray text-sm">2 days ago</p>
        </div>
      </div>
      <hr className="bg-darkGray my-3" />
      <div className="flex space-x-4 cursor-pointer">
        <img
          className="w-[124px] h-[70px] rounded-lg"
          src="https://i.ytimg.com/vi/Go0IzjmAwoQ/mqdefault.jpg?sqp=-oaymwEECHwQRg&rs=AMzJL3mxMCHiANdnjQvfWhW20oPB9HJgsA"
        />
        <div>
          <p className="hover:underline text-blueLink">
            This is how CRISTIANO RONALDO lives in SAUDI ARABIA ...
          </p>
          <p className="text-darkGray text-sm mt-2">
            <span className="text-black1">YouTube </span>· INSIDE FOOTBALL
          </p>
          <p className="text-darkGray text-sm">12 hours ago</p>
        </div>
      </div>
      <hr className="bg-darkGray my-3" />
      <div className="flex space-x-4 cursor-pointer">
        <img
          className="w-[124px] h-[70px] rounded-lg"
          src="https://i.ytimg.com/vi/u8BamEsaSQI/mqdefault.jpg?sqp=-oaymwEECHwQRg&rs=AMzJL3muY0lggY1BJgkizAIdVfblSbtw_A"
        />
        <div>
          <p className="hover:underline text-blueLink">
            Cristiano Ronaldo's New FIFA 23 Rating, Luis Suárez ...
          </p>
          <p className="text-darkGray text-sm mt-2">
            <span className="text-black1">YouTube </span>· Oh My Goal - News
          </p>
          <p className="text-darkGray text-sm">1 day ago</p>
        </div>
      </div>
      <div className="w-full mt-3 flex justify-center items-center">
        <div className="w-[40%] h-0.5 bg-lightGray1"></div>
        <Button>View all</Button>
        <div className="w-[40%] h-0.5 bg-lightGray1"></div>
      </div>
    </section>
  );
}
