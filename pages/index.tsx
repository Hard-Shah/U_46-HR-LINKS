// import React, { useState } from "react";
// import {
//   Code,
//   Users,
//   TrendingUp,
//   DollarSign,
//   LogOut,
//   Search,
//   Settings,
//   X,
// } from "lucide-react";
// import { useAuth, UserButton } from "@clerk/nextjs";
// import { useRouter } from "next/router";
// import categories from "../components/CategoryGrid";

// const CompanyDashboard = () => {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
//   const { signOut } = useAuth();
//   const router = useRouter();

//   // Define category colors
//   const categoryColors = {
//     engineering: "border-blue-500",
//     hr: "border-green-500",
//     marketing: "border-purple-500",
//     finance: "border-amber-500",
//   };

//   const getVisibleLinks = () => {
//     if (activeCategory === "all") {
//       const allLinks = [];
//       Object.keys(categories).forEach((key) => {
//         categories[key].links.forEach((link) => {
//           if (
//             !searchQuery ||
//             link.title.toLowerCase().includes(searchQuery.toLowerCase())
//           ) {
//             allLinks.push({
//               ...link,
//               category: key,
//             });
//           }
//         });
//       });
//       return allLinks;
//     } else {
//       return categories[activeCategory].links
//         .filter(
//           (link) =>
//             !searchQuery ||
//             link.title.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//         .map((link) => ({
//           ...link,
//           category: activeCategory,
//         }));
//     }
//   };

//   const visibleLinks = getVisibleLinks();

//   const handleLogoutClick = () => {
//     setShowLogoutConfirm(true);
//   };

//   const confirmLogout = async () => {
//     await signOut();
//     router.push("/sign-in");
//   };

//   const cancelLogout = () => {
//     setShowLogoutConfirm(false);
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-50">
//       {/* Header */}
//       <header className="w-full bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//           <h1 className="text-xl font-semibold text-gray-800 whitespace-nowrap mr-4">
//             Company Resources
//           </h1>

//           <div className="flex items-center gap-4 flex-1 max-w-2xl">
//             <div className="relative flex-1">
//               <Search
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                 size={16}
//               />
//               <input
//                 type="text"
//                 placeholder="Search resources..."
//                 className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 w-full"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-sm text-gray-600">Welcome!</span>
//               {/* Clerk UserButton for profile/settings */}
//               <UserButton afterSignOutUrl="/sign-in" />
//               <button
//                 onClick={handleLogoutClick}
//                 className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
//                 aria-label="Logout"
//               >
//                 <LogOut size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         {/* Category Tabs */}
//         <div className="flex flex-wrap gap-2 mb-6">
//           <button
//             className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//               activeCategory === "all"
//                 ? "bg-gray-200 text-gray-800"
//                 : "text-gray-600 hover:bg-gray-100"
//             }`}
//             onClick={() => setActiveCategory("all")}
//           >
//             All Resources
//           </button>

//           {Object.keys(categories).map((key) => {
//             const category = categories[key];
//             return (
//               <button
//                 key={key}
//                 className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
//                   activeCategory === key
//                     ? "bg-gray-200 text-gray-800"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//                 onClick={() => setActiveCategory(key)}
//               >
//                 {category.icon}
//                 {category.title}
//               </button>
//             );
//           })}
//         </div>

//         {/* Resources Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {visibleLinks.map((link) => {
//             const category = link.category;
//             const categoryObj = categories[category];
//             const borderColor = categoryColors[category];
//             return (
//               <a
//                 key={link.id}
//                 href={link.url}
//                 className="group block bg-white rounded-md border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
//               >
//                 <div className={`border-t-4 ${borderColor}`}></div>
//                 <div className="p-4">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 text-gray-500 mr-3">
//                       {categoryObj.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-base font-medium text-gray-800 group-hover:text-blue-500 transition-colors">
//                         {link.title}
//                       </h3>
//                       <p className="text-xs text-gray-500 mt-1">
//                         {categoryObj.title}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             );
//           })}
//         </div>

//         {visibleLinks.length === 0 && (
//           <div className="text-center py-12 bg-white rounded-md border border-gray-200">
//             <p className="text-gray-600">
//               No resources found matching your search.
//             </p>
//             <button
//               className="mt-4 px-4 py-2 text-sm bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
//               onClick={() => setSearchQuery("")}
//             >
//               Clear Search
//             </button>
//           </div>
//         )}
//       </main>

//       {/* Footer */}
//       <footer className="w-full mt-auto py-4 border-t border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center text-gray-500 text-xs">
//             © 2025 Your Company. All rights reserved.
//           </div>
//         </div>
//       </footer>

//       {/* Logout Confirmation Modal */}
//       {showLogoutConfirm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden transform transition-all">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-medium text-gray-900">Sign Out</h3>
//                 <button
//                   onClick={cancelLogout}
//                   className="text-gray-400 hover:text-gray-500"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>
//               <div className="mt-2">
//                 <p className="text-gray-500">
//                   Are you sure you want to sign out? You'll need to sign in
//                   again to access your resources.
//                 </p>
//               </div>
//               <div className="mt-6 flex justify-end gap-3">
//                 <button
//                   onClick={cancelLogout}
//                   className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={confirmLogout}
//                   className="px-4 py-2 bg-red-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CompanyDashboard;
import React, { useState } from "react";
import {
  Code,
  Users,
  TrendingUp,
  DollarSign,
  LogOut,
  Search,
  Settings,
  X,
} from "lucide-react";
import { useAuth, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/router";
import categories from "../components/CategoryGrid";

const CompanyDashboard = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { signOut } = useAuth();
  const router = useRouter();

  // Define category colors
  const categoryColors = {
    engineering: "border-blue-500",
    hr: "border-green-500",
    marketing: "border-purple-500",
    finance: "border-amber-500",
  };

  const getVisibleLinks = () => {
    if (activeCategory === "all") {
      const allLinks = [];
      Object.keys(categories).forEach((key) => {
        categories[key].links.forEach((link) => {
          if (
            !searchQuery ||
            link.title.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            allLinks.push({
              ...link,
              category: key,
            });
          }
        });
      });
      return allLinks;
    } else {
      return categories[activeCategory].links
        .filter(
          (link) =>
            !searchQuery ||
            link.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((link) => ({
          ...link,
          category: activeCategory,
        }));
    }
  };

  const visibleLinks = getVisibleLinks();

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = async () => {
    await signOut();
    router.push("/sign-in");
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">
            Company Resources
          </h1>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Welcome!</span>
            <UserButton afterSignOutUrl="/sign-in" />
            <button
              onClick={handleLogoutClick}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Category Tabs with Search Bar */}
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex flex-wrap gap-2 my-2">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory("all")}
            >
              All Resources
            </button>

            {Object.keys(categories).map((key) => {
              const category = categories[key];
              return (
                <button
                  key={key}
                  className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
                    activeCategory === key
                      ? "bg-gray-200 text-gray-800"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveCategory(key)}
                >
                  {category.icon}
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-64 md:w-72 lg:w-80 my-2">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search resources..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleLinks.map((link) => {
            const category = link.category;
            const categoryObj = categories[category];
            const borderColor = categoryColors[category];
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-md border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className={`border-t-4 ${borderColor}`}></div>
                <div className="p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-gray-500 mr-3">
                      {categoryObj.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-800 group-hover:text-blue-500 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {categoryObj.title}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {visibleLinks.length === 0 && (
          <div className="text-center py-12 bg-white rounded-md border border-gray-200">
            <p className="text-gray-600">
              No resources found matching your search.
            </p>
            <button
              className="mt-4 px-4 py-2 text-sm bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              onClick={() => setSearchQuery("")}
            >
              Clear Search
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto py-4 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 text-xs">
            © 2025 Your Company. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden transform transition-all">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Sign Out</h3>
                <button
                  onClick={cancelLogout}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="mt-2">
                <p className="text-gray-500">
                  Are you sure you want to sign out? You'll need to sign in
                  again to access your resources.
                </p>
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={cancelLogout}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmLogout}
                  className="px-4 py-2 bg-red-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDashboard;
