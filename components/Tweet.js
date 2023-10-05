import { openCommentModal, setCommentTweet } from "@/Redux/modalSlice";
import { ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router";
import Moment from "react-moment";
import { useDispatch } from "react-redux";

export default function Tweet({ data, id }) {

  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <div
    onClick={() => router.push("/" + id)}
      className="border-b cursor-pointer border-gray-700">
      <TweetHeader
        username={data?.username}
        name={data?.name}
        timestamp={data?.timestamp?.toDate()}
        text={data?.tweet}
        photoUrl={data?.photoUrl}
      />
      <div className="p-3 ml-16 text-gray-500 flex space-x-14">
        <div
          onClick={(e) => {
            e.stopPropagation()
            dispatch(
              setCommentTweet({
                id: id,
                tweet: data?.tweet,
                photoUrl: data?.photoUrl,
                name: data?.name,
                username: data?.username,
              })
            );
            dispatch(openCommentModal())
          }}
        >
          <ChatIcon className="w-5 cursor-pointer hover:text-green-400" />
        </div>
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
           
            <Moment fromNow>
             {timestamp}
            </Moment>
          </div>
          <span>{text}</span>
        </div>
      </div>
    );
}
