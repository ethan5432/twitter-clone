import { ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline"

export default function Tweet({ data }) {
  return (
    <div className="border-b  border-gray-700">
      <TweetHeader
        username={data?.username}
        name={data?.name}
        // timestamp={data?.timestamp}
        text={data?.tweet}
        photoUrl={data?.photoUrl}
      />
      <div className="p-3 ml-16 text-gray-500 flex space-x-14">
        <ChatIcon className="w-5 cursor-pointer hover:text-green-400" />
        <HeartIcon className="w-5 cursor-pointer hover:text-pink-400" />
        <ChartBarIcon className="w-5 cursor-not-allowed hover:text-green-400" />
        <UploadIcon className="w-5 cursor-not-allowed hover:text-green-400" />
      </div>
    </div>
  );
}

export function TweetHeader({username, name, timestamp, text, photoUrl}) {
    return (
      <div className="flex space-x-3 p-3 ">
        <img
          src={photoUrl}
          className="w-11 h-11 
            rounded-full object-cover"
        />
        <div>
          <div className="text-gray-500 flex items-center space-x-2 mb-1">
            <h1 className="text-white font-bold">{name}</h1>
            <span>@{username}</span>
            <div className="w-1 h-1 border border-gray-500 rounded-full"></div>
            <span>2 hours ago</span>
            <span>{timestamp}</span>
          </div>
          <span>{text}</span>
        </div>
      </div>
    );
}
