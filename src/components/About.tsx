import Forward from '../assets/icons/Forward';
import Button from './Button';

export default function About() {
  return (
    <section className="pl-4">
      {/* About */}
      <div className="text-black1">
        <p className="text-lg">About</p>
        <button className="flex items-center space-x-2 my-3 text-sm  bg-white border border-lightGray1 hover:bg-lightGray3 px-3 py-2 rounded-full">
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#4285f4"
            width={20}
            height={20}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
          </svg>
          <span> cristainoronaldo.com</span>
        </button>
        <p className="text-sm text-darkGray">
          Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese
          professional footballer who plays as a forward for Saudi Professional
          League club Al Nassr and captains the Portugal national team.{' '}
          <span className="text-blueLink hover:underline">Wikipedia</span>
        </p>
        <p className="my-3 text-sm">
          <strong>Born:</strong> 5 February 1985 (age 37 years),{' '}
          <span className="text-blueLink hover:underline">
            Hospital Dr. Nélio Mendonça, Funchal, Portugal
          </span>
        </p>
        <p className="my-3 text-sm">
          <strong>Children:</strong> 5 February 1985 (age 37 years),{' '}
          <span className="text-blueLink">
            Cristiano Ronaldo Jr., Bella Esmeralda, Alana Martina dos Santos
            Aveiro, Eva Maria Dos Santos, Mateo Ronaldo
          </span>
        </p>
        <p className="my-3 text-sm">
          <strong>Current teams:</strong>{' '}
          <span className="text-blueLink hover:underline">
            Portugal national football team{' '}
          </span>
          (#7 / Forward),
          <span className="text-blueLink hover:underline"> Al-Nassr FC </span>
          (#7 / Forward)
        </p>
        <p className="my-3 text-sm">
          <strong>Dates joined:</strong> 2023 (
          <span className="text-blueLink hover:underline">Al-Nassr FC</span>)
          2022, (
          <span className="text-blueLink hover:underline">Al-Nassr FC</span>)
          <span className="text-blueLink hover:underline"> MORE </span>
        </p>
        <p className="my-3 text-sm">
          <strong>Height:</strong> 1.87 m
        </p>
        <p className="my-3 text-sm">
          <strong>Salary:</strong> 62 million GBP (2023)
        </p>
        <p className="my-3 text-sm">
          <strong>Awards:</strong> 5 February 1985 (age 37 years),{' '}
          <span className="text-blueLink hover:underline">
            European Golden Shoe,{' '}
          </span>
          <span className="text-blueLink  hover:underline">
            Ballon d'Or Dream Team,{' '}
          </span>
          <span className="text-blueLink  hover:underline">MORE</span>
        </p>
        <div className="flex justify-between items-end my-3">
          <button className="flex items-center space-x-2  text-sm  bg-white border border-lightGray1 hover:bg-lightGray3 px-3 py-2 rounded-full">
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#4285f4"
              width={16}
              height={16}
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
            </svg>
            <span>Claim this knowledge panel</span>
          </button>
          <span className="text-xs text-darkGray">Feedback</span>
        </div>
      </div>
      <hr className="bg-darkGray my-3" />

      {/* Profiles */}
      <div>
        <p className="text-lg my-4">Profiles</p>
        <div className="flex items-center justify-between text-sm text-black1">
          <div className="flex flex-col items-center space-y-1">
            <img src="data:image/png;base64,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" />
            <span>Instagram</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAABZUlEQVR4AWLQWfWQpmjUAjxo1IJRC2wBpJTDQkVRFIafKBujZrnGjbNd84wHiJNs27btrm3rrFbW1T73m20u/yMsW0cBg6zue5XCYLFQcC41JK0I3PsYaWvC+BkugYFljrbmWPp/H/86FOnhB2hGZbTg/dBhFoEBhsoEAO23Su9+5s/9nA0R/ANtXEgNJTtiAgObfB28gZaKt8Wen2ZarhRgjVL8nagGmetC+IFMb5lgqOtOZAtsLVgjcIhFZqD+RLYj0IFzGCwUcRctc7XgNNcyA7GBhAW+EWvnHK3XCjqDhg3OUpvAEegFTgAdA+nrwnuF4zCw7DSlwqOPscRxUAmtiYqY5NDXImz/6mPprlAP1sDgcjdFLokdCkPGW6Kstmbhtoim2IWNsRsvFXNsjURvBmvgiMROc11S0+BhVvmhFAUDhewrISgbg4/qlyUdeEnl+sBk7SOgfcBSb3jWaKMWjFoAABKespvtvzYlAAAAAElFTkSuQmCC" />
            <span>Twitter</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAA1UlEQVR4AWOwDp9LUzTELRi1wDdtaf+8w9sPXDtx7h4Q7Tt2c92OS9SxwCZibtesg0+fv3756i0aoo4FkxcdgxhHEwtiite8ePmGhhas3HIB2cRL1x5t3HV5xebzEEQFC67efAI3/cDxW7aR86icip6/QIRP9+xD1E+myOHTPv3AqAVA1DJ1/76jN+EI2YKLVx8hS+0+cgMY5yRbMHfVKbBxhNGFqw+B6mloweY9V2hrAbAIIceCugl7gE6DI2QTT124jyyVXrNxEKaiUQtGLRi1YNQCAMs01I34bbYCAAAAAElFTkSuQmCC" />
            <span>Facebook</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAADm0lEQVR4AaWWhW5sxxJFVx3Pk/Exh5k5HxAGQZg54jCDKN8SQZhBFLEUZmZm5ph0PbViuVQi3/BS6/Tu6tq7h+fEJ7tsSgQSoUKAAUQIoUaEEiECEAghRKC2wSCsshoASMRQDlCB0CCspQIIgCJI6NqIrpQZkESiXO2DoZrKSe0kgqIKZkmUrtnpBCVorwplJ9ShLFVOLdH+KNFLKGENlSzdQjCoUypr6A3TBIQEa2B5AO0tpM/rrRa9pI0mg7VhQKjYl5pBScsFipHQAaR9htYSe1OAwTUSUxJStD2VVNoikrKjpkhZTKLfsqiQih0JQFlIiPIGCGHVoScRCJFeYhCB2o19BWOkNBXJaIedpk47e7TN9jE7GzOrYwZYFUxM0DAeuzAPuLCwKpyfX3nrjaXrr1157RWKAuOd7f9v9JeMGLbc+h833x1T0/x2XFr8+qQjV957J8QwQGNIwzT7zZw+8RQmp/xdrBqnTjzNNNEkRR3E/ryjjHbbiz/AaPe9BO0BI1VojH/9W+X3smZHCECkv2ipikbMzfETfHPN1SvvvcvPsvq5SFSyM4c0SiWqTE37E8zfc8dnRx329TVXb3jvHX+CmJ7JJLEy1cFWJglMTPhTJDkez999x6dHHf712rNxPcOgmGgdw5CQmpBgyk8jmqi5Ybzh/ffGX33JxugHg4YwMiFAQCEXF2Nqio2RBvqnbbf/60WXTe1/IKBSNC4vpRWoQjBKBaKqkIsLw+QkG2P493/+cu6Fs0cdUy8j61l7fClFiDgSqHYDGH/77fC3v7Mx/nfvff3kfpLxN98IaOfHoKZopKorH37w01/USX+JlY8+VJSsWOzvASIpiw8+yB9g4cEHkopGyKQ/pslYlW9vvmHpuWf9XSy/8Px3N92QomgdQzyxyX8AEQjAYGKY2nff1U/LxF//GpOTMTU98Zc/AzE7F8MAAOMfviczf/jB5eXVkd99u+HddxcffsjxOOh3IAKMx/7/b1hTINAEVBtNN/wkAa7rHBRVSWiNkpKUpisI0pUaIG2B7ixQhmpLMEuE2kH0d9L1zqyeNDOEFBOprZAQrGeQBpJGGp3YoYAIokhP/albd1Oj3VYwpFAyrBlJlBD7Qxwl7FCtYXYW2vE1l8UByHYW1WVqIiS1R5mRqosKXe9BJgmpgjIoBHanYkQ/ZehamTsLJNvYh1UrFAIYDGjvhUk1SV0QNATtY+hdtFX19BW1BPojd0p5ENc3bJAAAAAASUVORK5CYII=" />
            <span>Youtube</span>
          </div>
        </div>
      </div>
      <hr className="bg-darkGray my-6" />

      {/* Stats */}
      <div className="text-black1">
        <div className="flex justify-between items-center">
          <p className="text-lg ">Stats</p>
          <span className="p-1 rounded-full bg-white hover:bg-lightGray3 border border-lightGray1">
            <Forward />
          </span>
        </div>
        <p className="hover:underline text-sm my-3">Portugal</p>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-darkGray text-xs text-start font-normal py-2">
                League
              </th>
              <th className="text-darkGray text-xs text-start font-normal">
                Matches
              </th>
              <th className="text-darkGray text-xs text-start font-normal">
                Goals
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-lightGray1 text-sm">
              <td className="hover:underline py-2">
                <p>World Cup</p>
                <p className="text-darkGray text-xs">2022</p>
              </td>
              <td>5</td>
              <td>1</td>
            </tr>
            <tr className="border-t border-lightGray1 text-sm">
              <td className="hover:underline py-2">
                <p>World Cup Qualifiers</p>
                <p className="text-darkGray text-xs">2021-22</p>
              </td>
              <td>9</td>
              <td>6</td>
            </tr>
            <tr className="border-t border-lightGray1 text-sm">
              <td className="hover:underline py-2">
                <p>UEFA EURO</p>
                <p className="text-darkGray text-xs">2021</p>
              </td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr className="border-t border-lightGray1 text-sm">
              <td className="hover:underline py-2">
                <p>UEFA EURO Qualifiers</p>
                <p className="text-darkGray text-xs">2019-20</p>
              </td>
              <td>8</td>
              <td>11</td>
            </tr>
            <tr className="border-t border-lightGray1 text-sm">
              <td className="hover:underline py-2">
                <p>FIFA Confederations Cup</p>
                <p className="text-darkGray text-xs">2017</p>
              </td>
              <td>4</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr className="bg-darkGray my-6" />
      {/* People also search */}
      <div className="text-black1 ">
        <p className="text-lg">People also search for</p>
        <div className="flex space-x-2 mt-3 mb-5">
          <div className="flex flex-col items-center space-y-2 text-sm cursor-pointer">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QEBRXhpZgAASUkqAAgAAAADAA4BAgC4AAAAMgAAAJiCAgAPAAAA6gAAABIBAwABAAAAAQAAAAAAAABQT1JUVUdBTCAtIEpBTlVBUlkgNDogQW50b255IG9mIEFqYXggQW1zdGVyZGFtIGR1cmluZyB0aGUgVHJhaW5pbmcgU2Vzc2lvbiBvbiBEYXkgMiBtb3JuaW5nIGF0IFF1aW50YSBkbyBMYWdvIG9uIEphbnVhcnkgNCwgMjAyMiBpbiBQb3J0dWdhbC4gKFBob3RvIGJ5IEJlbiBHYWwvQlNSIEFnZW5jeS9HZXR0eSBJbWFnZXMpMjAyMiBCU1IgQWdlbmN5/+0BDlBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAADxHAJQAApCU1IgQWdlbmN5HAJ4ALhQT1JUVUdBTCAtIEpBTlVBUlkgNDogQW50b255IG9mIEFqYXggQW1zdGVyZGFtIGR1cmluZyB0aGUgVHJhaW5pbmcgU2Vzc2lvbiBvbiBEYXkgMiBtb3JuaW5nIGF0IFF1aW50YSBkbyBMYWdvIG9uIEphbnVhcnkgNCwgMjAyMiBpbiBQb3J0dWdhbC4gKFBob3RvIGJ5IEJlbiBHYWwvQlNSIEFnZW5jeS9HZXR0eSBJbWFnZXMpHAJ0AA8yMDIyIEJTUiBBZ2VuY3kcAm4ADEdldHR5IEltYWdlcwD/4QXNaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIGRjOlJpZ2h0cz0iMjAyMiBCU1IgQWdlbmN5IiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMiIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSIxMzYyNzQyMDkyIiB4bXBSaWdodHM6V2ViU3RhdGVtZW50PSJodHRwczovL3d3dy5nZXR0eWltYWdlcy5jb20vZXVsYT91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybCIgPgo8ZGM6Y3JlYXRvcj48cmRmOlNlcT48cmRmOmxpPkJTUiBBZ2VuY3k8L3JkZjpsaT48L3JkZjpTZXE+PC9kYzpjcmVhdG9yPjxkYzpkZXNjcmlwdGlvbj48cmRmOkFsdD48cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBPUlRVR0FMIC0gSkFOVUFSWSA0OiBBbnRvbnkgb2YgQWpheCBBbXN0ZXJkYW0gZHVyaW5nIHRoZSBUcmFpbmluZyBTZXNzaW9uIG9uIERheSAyIG1vcm5pbmcgYXQgUXVpbnRhIGRvIExhZ28gb24gSmFudWFyeSA0LCAyMDIyIGluIFBvcnR1Z2FsLiAoUGhvdG8gYnkgQmVuIEdhbC9CU1IgQWdlbmN5L0dldHR5IEltYWdlcyk8L3JkZjpsaT48L3JkZjpBbHQ+PC9kYzpkZXNjcmlwdGlvbj4KPHBsdXM6TGljZW5zb3I+PHJkZjpTZXE+PHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+PHBsdXM6TGljZW5z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"
              className="rounded-lg w-[78px] h-[78px]"
            />
            <span className="hover:underline">
              Anthony <br /> <span className="text-darkGray">Trending</span>
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2 text-sm cursor-pointer">
            <img
              src="data:image/jpeg;base64,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"
              className="rounded-lg w-[78px] h-[78px]"
            />
            <span className="hover:underline">
              Marcus <br /> Rashford <br />{' '}
              <span className="text-darkGray">Trending</span>
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2 text-sm cursor-pointer">
            <img
              src="data:image/jpeg;base64,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"
              className="rounded-lg w-[78px] h-[78px]"
            />
            <span className="hover:underline">
              Lionel <br /> Messi
            </span>
          </div>
          <div className="flex flex-col items-center space-y-2 text-sm cursor-pointer">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QDvRXhpZgAASUkqAAgAAAABAA4BAgDNAAAAGgAAAAAAAABNQURSSUQsIFNQQUlOIC0gTUFZIDMwOiAgTW9kZWwgR2VvcmdpbmEgUm9kcmlndWV6IGF0dGVuZHMgRUxMRSBDaGFyaXR5IEdhbGEgMjAxOSB0byByYWlzZSBmdW5kcyBmb3IgY2FuY2VyIGF0IEludGVyY29udGluZW50YWwgSG90ZWwgb24gTWF5IDMwLCAyMDE5IGluIE1hZHJpZCwgU3BhaW4uIChQaG90byBieSBDYXJsb3MgQWx2YXJlei9HZXR0eSBJbWFnZXMp/+0BElBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAD2HAJQAA5DYXJsb3MgQWx2YXJlehwCeADNTUFEUklELCBTUEFJTiAtIE1BWSAzMDogIE1vZGVsIEdlb3JnaW5hIFJvZHJpZ3VleiBhdHRlbmRzIEVMTEUgQ2hhcml0eSBHYWxhIDIwMTkgdG8gcmFpc2UgZnVuZHMgZm9yIGNhbmNlciBhdCBJbnRlcmNvbnRpbmVudGFsIEhvdGVsIG9uIE1heSAzMCwgMjAxOSBpbiBNYWRyaWQsIFNwYWluLiAoUGhvdG8gYnkgQ2FybG9zIEFsdmFyZXovR2V0dHkgSW1hZ2VzKRwCbgAMR2V0dHkgSW1hZ2Vz/+EDqGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8ACTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBs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"
              className="rounded-lg w-[78px] h-[78px]"
            />
            <span className="hover:underline">
              Georgina <br /> Rodrig...
            </span>
          </div>
        </div>
        <Button>See More</Button>
      </div>
    </section>
  );
}
