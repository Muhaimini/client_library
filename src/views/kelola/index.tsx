"use client";

import React from "react";
import MainLayout from "^layouts/main";
import { useRouter } from "next/navigation";
import useMainPageHooks from "^views/hooks/use-main-page-hooks";
import useAuthUser from "^views/hooks/use-auth-user";
import ProfileUser from "^components/Profile";
import { Input, TextInput } from "@mantine/core";

const Kelola = () => {
  const { userProfile } = useAuthUser();
  const { data, onSearchBook } = useMainPageHooks();

  const { push } = useRouter();
  const onOpenKelolaPage = () => push("/");

  return (
    <MainLayout>
      <MainLayout.Header>
        <div className="w-full flex items-center justify-center">
          <div className="w-11/12 flex items-center justify-between">
            <div
              className="text-2xl font-bold cursor-pointer"
              onClick={onOpenKelolaPage}
            >
              Perpus
              <span className="text-blue-400">!</span>
            </div>
            <div className="flex gap-3 items-center">
              {userProfile && (
                <ProfileUser
                  onOpenKelolaPage={onOpenKelolaPage}
                  user={userProfile}
                />
              )}
            </div>
          </div>
        </div>
      </MainLayout.Header>

      <MainLayout.Body className="w-full p-4 h-[calc(100%-70px)]">
        <div className="w-full flex items-center justify-center h-full">
          <div className="w-11/12 flex items-center justify-between gap-3 h-full">
            <div className="w-1/4 h-full p-4 felx flex-col gap-4">
              <TextInput label="Judul" />
              <TextInput label="Author" />
            </div>
            <div className="w-full h-full p-4">hello</div>
          </div>
        </div>
      </MainLayout.Body>
    </MainLayout>
  );
};

export default Kelola;
