import { useState } from "react";
import { Button, Menu } from "antd";
import { IoHomeOutline } from "react-icons/io5";
import { FaPrescription } from "react-icons/fa";
import { GoHistory } from "react-icons/go";

import { SiGooglemessages } from "react-icons/si";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", <IoHomeOutline size="1.15rem" />),
  getItem("Messege", "2", <SiGooglemessages size="1.15rem" />),
  getItem("Prescription", "3", <FaPrescription size="1.15rem" />),
  getItem("Consultation History", "4", <GoHistory size="1.15rem" />),
];
const dashboard = () => {
  return (
    <div>
      <div
        style={{
          width: 256,
          marginLeft: "20px",
          paddingTop: "4rem",
        }}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
};

export default dashboard;
