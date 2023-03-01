import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "About",
    path: "./aboutus",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaInfoCircle />,
  },
  {
    id: "services",
    title: "Services",
    path: "/services",
    icon: <Icons.FaWrench />,
    nName: "nav-item dropdown",
    sName: "sidebar-item",
    dropdown: [
      {
        id: "haircuts",
        title: "Haircuts",
        path: "/haircuts",
        icon: <Icons.FaCut />,
      },
      {
        id: "shaves",
        title: "Shaves",
        path: "/shaves",
        icon: <Icons.FaPlus />,
      },
      {
        id: "price",
        title: "Prices",
        path: "/price",
        icon: <Icons.FaPlus />,
      },
    ],
  },
  {
    id: 4,
    title: "Gallery",
    path: "./gallery",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaPhotoVideo />,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "./contactus",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaPhone />,
  },
];