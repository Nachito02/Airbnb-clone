"use client";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { BsSnow } from "react-icons/bs";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import React from "react";
import Container from "../Container";
import CategoryBox from "./CategoryBox";
import { useParams, useSearchParams, usePathname } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This porperty is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This porperty has windimills!",
  },

  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This porperty is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This porperty is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This porperty has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This porperty is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This porperty is close to a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This porperty has skiing activities!",
  },
  {
    label: "Casttles",
    icon: GiCastle,
    description: "This porperty is in a casstle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This porperty has camping activities",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This porperty has arctic activities",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This porperty is in a cave!",
  },

  {
    label: "Desert",
    icon: GiCactus,
    description: "This porperty is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This porperty is in the desert!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This porperty is luxurius",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            selected={category === item.label}
            icon={item.icon}
            key={item.label}
            label={item.label}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
