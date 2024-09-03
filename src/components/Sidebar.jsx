import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";
import { RiFlagLine } from "react-icons/ri";
import { MdHelpOutline } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";


function Sidebar() {
  const sidebarItems2= [
    {
      Id: "1",
      name: "Your channel",
      icon: <PiUserSquareThin />,
    },
    {
      Id: "2",
      name: "History",
      icon: <MdHistory />,
    },
    {
      Id: "3",
      name: "Playlists",
      icon: <MdOutlineSubscriptions />,
    },
    {
        Id: "4",
        name: "Your videos",
        icon: <BiVideo />,
      },
      {
        Id: "5",
        name: "Watch Later",
        icon: <MdOutlineWatchLater />,
      },
      {
        Id: "6",
        name: "Liked videos",
        icon: <AiOutlineLike />,
      },
  ];

  const sidebarItems = [
    {
      Id: "1",
      name: "Home",
      icon: <GoHome />,
    },
    {
      Id: "2",
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      Id: "3",
      name: "Subscription",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebarItems3 = [
    {
      Id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      Id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      Id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      Id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      Id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      Id: 6,
      name: "Gaming",
      icon: <IoGameControllerOutline />,
    },
    {
      Id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      Id: 8,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      Id: 9,
      name: "Courses",
      icon: <SiStylelint />,
    },
    {
      Id: 10,
      name: "Fashion & beauty",
      icon: <PiLightbulbLight />,
    },
    {
      Id: 11,
      name: "Padcasts",
      icon: <MdPodcasts />,
    },
  ];

  const sidebarItems4 = [
    {
      Id: 1,
      name: "Youtube Premium",
      icon: <FaYoutube />,
    },
    {
      Id: 2,
      name: "Youtube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      Id: 3,
      name: "Youtube Music",
      icon: <SiYoutubemusic />,
    },
    {
      Id: 4,
      name: "Youtube Kids",
      icon: <SiYoutubekids />,
    },
  ];
  const sidebarItems5 = [
    {
      Id: 1,
      name: "Settings",
      icon: <CiSettings />,
    },
    {
      Id: 2,
      name: "Report history",
      icon: <RiFlagLine />,
    },
    {
      Id: 3,
      name: "Help",
      icon: <MdHelpOutline />,
    },
    {
      Id: 4,
      name: "Send feedback",
      icon: <MdOutlineFeedback />,
    },
  ];



  return (
    <div className=" mt-12 w-[16%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">

      {/* Home */}
      <div className=" space y-3 ml-4 font-semibold">
      {sidebarItems.map((items) => {
        return(
        <div key={items.Id}className="flex items-center space-x-6 hover:bg-gray-200 duration-500 cursor-pointer pt-2 pb-2 rounded-l-2xl rounded-r-2xl">
          <div className="text-xl ms-2">
            {items.icon}
          </div>
          <span>{items.name}</span>
        </div>
        )
    })}
      </div>
      <br/>
      <hr/>
      <br/>

      {/* You section */}

      <div className="ml-4 space-y-3 font-semibold">
      <div className="pl-2 flex items-center space-x-2">
          <h1>You</h1>
          <FaChevronRight className="text-sm " />
        </div>
      {sidebarItems2.map((items) => {
        return(
        <div key={items.Id}className="flex items-center space-x-6 hover:bg-gray-200 duration-500 cursor-pointer pt-2 pb-2 rounded-l-2xl rounded-r-2xl">
          <div className="text-xl ms-2">
            {items.icon}
          </div>
          <span>{items.name}</span>
        </div>
        )
    })}
      </div>
      <br/>
      <hr/>
      <br/>
    
    {/* Explore */}

    <div className="ml-4 items-center space-y-3 font-semibold">
      <div className="pl-2 flex items-center space-x-2">
          <h1>Explore</h1>
        </div>
      {sidebarItems3.map((items) => {
        return(
        <div key={items.Id}className="flex items-center space-x-6 hover:bg-gray-200 duration-500 cursor-pointer pt-2 pb-2 rounded-l-2xl rounded-r-2xl">
          <div className="text-xl ms-2">
            {items.icon}
          </div>
          <span>{items.name}</span>
        </div>
        )
    })}
      </div>
      <br/>
      <hr/>
      <br/>
    
    {/* more from youtube */}
     
    <div className="ml-4 space-y-3 item-centre font-semibold">
      <div className="pl-2 flex items-center space-x-2">
          <h1>More from YouTube</h1>
        </div>
      
      {sidebarItems4.map((items) => {
        return(
        <div key={items.Id} className="flex items-center space-x-6 hover:bg-gray-200 duration-500 cursor-pointer pt-2 pb-2 rounded-l-2xl rounded-r-2xl">
          <div className="text-xl text-red-600 ms-2">
            {items.icon}
          </div>
          <span>{items.name}</span>
        </div>
        )
    })}
      </div>
      <br/>
      <hr/>
      <br/>

      {/* other */}

      <div className="ml-4 space-y-3 item-centre font-semibold">
      
      {sidebarItems5.map((items) => {
        return(
        <div key={items.Id} className="flex items-center space-x-6 hover:bg-gray-200 duration-500 cursor-pointer pt-2 pb-2 rounded-l-2xl rounded-r-2xl">
          <div className="text-xl ms-2">
            {items.icon}
          </div>
          <span>{items.name}</span>
        </div>
        )
    })}
      </div>
      <br/>
      <hr/>
      <br/>

      {/* footer */}
      <div className="ml-6">
        <span className="text-sm text-gray-500 font-semibold">About Press Copyright <br/>Contact us Creator Advertise <br/>Developers<br/>
        <br/>Terms Privacy Policy & Safety<br/>How YouTube works <br/>Test new features<br/>
        </span>
        <br/>
        <span className="text-sm text-gray-400">© 2024 Google LLC</span>
      </div>
    </div>
  );

}

export default Sidebar;
