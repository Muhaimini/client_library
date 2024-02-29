import { Avatar, Menu } from "@mantine/core";
import { slice } from "lodash";
import { User } from "response/user-profile";

const ProfileUser = ({ user }: { user: User }) => {
  return (
    <Menu
      classNames={{ dropdown: "bg-white p-0 w-44", item: "hover:bg-blue-50" }}
    >
      <Menu.Target>
        <Avatar className="cursor-pointer" color="cyan" radius="xl">
          {slice(user.name, 0, 1)}
        </Avatar>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Buku yang dipinjam</Menu.Item>
        <Menu.Item>Kelola</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileUser;
