import {
  AlarmClock,
  Bookmark,
  BookPlus,
  CalendarDays,
  ChartCandlestick,
} from "lucide-react";

import Userprofile from "../../assets/userprofile.jpg";

export default function Slidebar() {
  return (
    <aside className="flex flex-col h-full">
      <ul className="space-y-3">
        {/* Active */}
        <li>
          <a
            href="#"
            className="
              group flex items-center gap-3
              px-5 py-4 rounded-xl
              text-gray-600 dark:text-white font-medium
              transition-all duration-200
              hover:bg-primary hover:text-white
            "
          >
            <ChartCandlestick size={22} />
            <span>Trending</span>
          </a>
        </li>

        {/* New Releases */}
        <li>
          <a
            href="#"
            className="
              group flex items-center gap-3
              px-5 py-4 rounded-xl
              text-gray-600 dark:text-white font-medium
              transition-all duration-200
              hover:bg-primary hover:text-white
            "
          >
            <BookPlus
              size={22}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            <span>New Releases</span>
          </a>
        </li>

        {/* Coming Soon */}
        <li>
          <a
            href="#"
            className="
                 group flex items-center gap-3
              px-5 py-4 rounded-xl
              text-gray-600 dark:text-white font-medium
              transition-all duration-200
              hover:bg-primary hover:text-white
            "
          >
            <CalendarDays
              size={22}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            <span>Coming Soon</span>
          </a>
        </li>

        {/* Favourites */}
        <li>
          <a
            href="#"
            className="
              group flex items-center gap-3
              px-5 py-4 rounded-xl
              text-gray-600 dark:text-white font-medium
              transition-all duration-200
              hover:bg-primary hover:text-white
            "
          >
            <Bookmark
              size={22}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            <span>Favourites</span>
          </a>
        </li>

        {/* Watch Later */}
        <li>
          <a
            href="#"
            className="
              group flex items-center gap-3
              px-5 py-4 rounded-xl
              text-gray-600 dark:text-white font-medium
              transition-all duration-200
              hover:bg-primary hover:text-white
            "
          >
            <AlarmClock
              size={22}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>

      {/* User Profile Section */}
      <div className="mt-auto p-2">
        <a
          href="#"
          className="
            flex items-center gap-3
            px-4 py-4 rounded-xl
            text-gray-700
          "
        >
          <img
            src={Userprofile}
            alt="User profile"
            className="
              w-10 h-10
              rounded-full
              object-cover
              ring-2 ring-primary/20
            "
          />

          <div className="leading-tight">
            <p className="text-[16px] font-semibold text-primary">Mumtahina</p>
            <p className="text-xs text-black-500">View Profile</p>
          </div>
        </a>
      </div>
    </aside>
  );
}
