import Apps from '../assets/icons/Apps';
import Cancel from '../assets/icons/Cancel';
import ColoredSearch from '../assets/icons/ColoredSearch';
import Image from '../assets/icons/Image';
import More from '../assets/icons/More';
import News from '../assets/icons/News';
import Search from '../assets/icons/Search';
import Settings from '../assets/icons/Settings';
import Video from '../assets/icons/Video';
import Voice from '../assets/icons/Voice';

export default function Header() {
  return (
    <section className="">
      <div className="mx-7 flex justify-between items-center mt-7 ">
        <div className="flex space-x-10 items-center">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            className="w-[92px] h-[30px]"
          />
          <div
            className="w-[640px] px-5 py-0.5 flex bg-white rounded-3xl items-center justify-between"
            style={{
              boxShadow: '0 2px 5px 1px rgb(64 60 67 / 16%)',
            }}
          >
            <p className="text-darkGray">cristaino ronaldo</p>
            <div className="flex space-x-4 items-center">
              <Cancel />
              <div className="border-l h-6 w-1 border-darkGray opacity-30"></div>
              <Voice />
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IlN0YW5kYXJkX3Byb2R1Y3RfaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKCSB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE5MnB4IiBoZWlnaHQ9IjE5MnB4IiB2aWV3Qm94PSIwIDAgMTkyIDE5MiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTkyIDE5MiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxyZWN0IGlkPSJib3VuZGluZ19ib3hfMV8iIGZpbGw9Im5vbmUiIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIi8+CjxnIGlkPSJhcnRfbGF5ZXIiPgoJPGNpcmNsZSBpZD0iRG90IiBmaWxsPSIjNDI4NUY0IiBjeD0iOTYiIGN5PSIxMDQuMTUiIHI9IjI4Ii8+Cgk8cGF0aCBpZD0iUmVkIiBmaWxsPSIjRUE0MzM1IiBkPSJNMTYwLDcydjQwLjE1VjEzNmMwLDEuNjktMC4zNCwzLjI5LTAuODIsNC44MnYwdjBjLTEuNTcsNC45Mi01LjQzLDguNzgtMTAuMzUsMTAuMzVoMHYwCgkJYy0xLjUzLDAuNDktMy4xMywwLjgyLTQuODIsMC44Mkg2NmwxNiwxNmg1MGgxMmM0LjQyLDAsOC42My0wLjksMTIuNDYtMi41MWMzLjgzLTEuNjIsNy4yOC0zLjk2LDEwLjE3LTYuODYKCQljMS40NS0xLjQ1LDIuNzYtMy4wMywzLjkxLTQuNzRjMi4zLTMuNCwzLjk2LTcuMjgsNC44MS0xMS40NGMwLjQzLTIuMDgsMC42NS00LjI0LDAuNjUtNi40NXYtMTJWOTYuMTVWODRsLTYtMTlsLTEwLjgyLDIuMTgKCQlDMTU5LjY2LDY4LjcxLDE2MCw3MC4zMSwxNjAsNzJ6Ii8+Cgk8cGF0aCBpZD0iQmx1ZSIgZmlsbD0iIzQyODVGNCIgZD0iTTMyLDcyYzAtMS42OSwwLjM0LTMuMjksMC44Mi00LjgyYzEuNTctNC45Miw1LjQzLTguNzgsMTAuMzUtMTAuMzVDNDQuNzEsNTYuMzQsNDYuMzEsNTYsNDgsNTYKCQloOTZjMS42OSwwLDMuMjksMC4zNCw0LjgyLDAuODJjMCwwLDAsMCwwLDBMMTQ5LDQ1bC0xNy01bC0xNi0xNmgtMTMuNDRIOTZoLTYuNTZINzZMNjAsNDBINDhjLTE3LjY3LDAtMzIsMTQuMzMtMzIsMzJ2MTJ2MjBsMTYsMTYKCQlWNzJ6Ii8+Cgk8cGF0aCBpZD0iR3JlZW4iIGZpbGw9IiMzNEE4NTMiIGQ9Ik0xNDQsNDBoLTEybDE2LjgzLDE2LjgzYzEuMjMsMC4zOSwyLjM5LDAuOTMsMy40NywxLjU5YzIuMTYsMS4zMiwzLjk3LDMuMTMsNS4yOSw1LjI5CgkJYzAuNjYsMS4wOCwxLjIsMi4yNCwxLjU5LDMuNDd2MEwxNzYsODRWNzJDMTc2LDU0LjMzLDE2MS42Nyw0MCwxNDQsNDB6Ii8+Cgk8cGF0aCBpZD0iWWVsbG93IiBmaWxsPSIjRkJCQzA0IiBkPSJNNDgsMTY4aDM5Ljg5bC0xNi0xNkg0OGMtOC44MiwwLTE2LTcuMTgtMTYtMTZ2LTIzLjg5bC0xNi0xNlYxMzZDMTYsMTUzLjY3LDMwLjMzLDE2OCw0OCwxNjh6CgkJIi8+CjwvZz4KPC9zdmc+Cg=="
                className="w-6 h-6"
                alt="Camera search"
              />
              <Search />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Settings />
          <Apps />
          <div className="w-8 h-8 rounded-full bg-[#9aa0a6] flex items-center justify-center text-xl">
            T
          </div>
        </div>
      </div>
      <section className="pl-44 mt-7">
        <div className="flex items-start  space-x-5">
          <p className="flex space-x-1 items-center pb-2 border-b-[3px] w-[36px] border-[#1a73e8] ">
            <ColoredSearch />
            <span className="text-sm text-[#4285f4]">All</span>
          </p>
          <p className="flex space-x-1 items-center">
            <News />
            <span className="text-sm text-darkGray">News</span>
          </p>
          <p className="flex space-x-1 items-center">
            <Image />
            <span className="text-sm text-darkGray">Images</span>
          </p>
          <p className="flex space-x-1 items-center">
            <Video />
            <span className="text-sm text-darkGray">Videos</span>
          </p>
          <p className="flex space-x-1 items-center">
            <More />
            <span className="text-sm text-darkGray">More</span>
          </p>
          <p className="translate-x-44 text-darkGray py-1 px-3 text-sm hover:bg-gray-200">
            Tools
          </p>
        </div>
        <p className="my-4 text-darkGray text-sm">
          About 329,000,000 results (0.55 seconds)
        </p>
        <div className="flex items-center space-x-5">
          <img
            className="rounded-lg w-[37px] h-[56px]"
            alt="ronaldo"
            src="data:image/jpeg;base64,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"
          />
          <div>
            <p className="text-3xl text-black1">Cristiano Ronaldo</p>
            <p className="flex space-x-1 mt-1 items-center">
              <span className="text-darkGray text-sm">
                Portuguese footballer
              </span>
              <More />
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <p className="border border-darkGray cursor-pointer bg-lightGray1 text-darkGray rounded-full px-4 text-sm py-2">
              Overview
            </p>
            <p className=" bg-lightGray1 text-darkGray  cursor-pointer rounded-full px-4 text-sm py-2">
              News
            </p>
            <p className=" bg-lightGray1 text-darkGray cursor-pointer rounded-full px-4 text-sm py-2">
              Stats
            </p>
            <p className=" bg-lightGray1 text-darkGray  cursor-pointer rounded-full px-4 text-sm py-2">
              Videos
            </p>
          </div>
        </div>
      </section>
      <hr className="bg-darkGray w-full mt-4" />
    </section>
  );
}
