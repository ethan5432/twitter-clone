import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import {BadgeCheckIcon} from '@heroicons/react/solid'

export default function Trending() {
  return (
    <div className="hidden lg:flex flex-col ml-7 mt-4">
      <div
        className="flex space-x-3 bg-white bg-opacity-10
        w-[300px] h-[44px] p-3 rounded-3xl"
      >
        <SearchIcon className="w-6 text-gray-600" />
        <input
          className="
                bg-transparent
                focus:outline-none
          placeholder:text-gray-600"
          placeholder="Search Twitter"
        />
      </div>

      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">Whats Happening</h1>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">340k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in Israel</p>
          <h1 className="text-[15px] font-bold">Tech in Tel Aviv</h1>
          <p className="text-xs text-gray-500">100k Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">SuperBowl</h1>
          <p className="text-xs text-gray-500">2.3M Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in Japan</p>
          <h1 className="text-[15px] font-bold">Anime</h1>
          <p className="text-xs text-gray-500">5m Tweets</p>
        </div>
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in France</p>
          <h1 className="text-[15px] font-bold">World Cup</h1>
          <p className="text-xs text-gray-500">12M Tweets</p>
        </div>
      </div>

      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">Who to follow</h1>

        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/pfp.png"/>
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Elon Musk</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12] text-gray-500 mt-1">@MuskMan</h1>
            </div>
          </div>
          <button className="bg-white text-black text-sm rounded-3xl font-bold w-20 h-8">Follow</button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/kylie.png"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Kylie</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12] text-gray-500 mt-1">@TheKylie</h1>
            </div>
          </div>
          <button className="bg-white text-black text-sm rounded-3xl font-bold w-20 h-8">Follow</button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="https://media.licdn.com/dms/image/D4E03AQG3WoQjtQPalg/profile-displayphoto-shrink_400_400/0/1679269126837?e=1701907200&v=beta&t=b6i_9gVCV3JNNfr48yRXrWZE-rbHf-yPCFlOABiOJ2s"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Ethan N</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12] text-gray-500 mt-1">@ethannirenberg</h1>
            </div>
          </div>
          <button className="bg-white text-black text-sm rounded-3xl font-bold w-20 h-8">Follow</button>
        </div>
      </div>
    </div>
  );
}
