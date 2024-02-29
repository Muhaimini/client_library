"use client";

import React, { useRef, useState } from "react";
import MainLayout from "^layouts/main";
import { useRouter } from "next/navigation";
import useMainPageHooks from "^views/hooks/use-main-page-hooks";
import useAuthUser from "^views/hooks/use-auth-user";
import ProfileUser from "^components/Profile";
import { ComboboxItem, Select, TextInput } from "@mantine/core";
import { Card, Container } from "^components";
import useGetGenre from "^hooks/queries/use-get-genre";

const Kelola = () => {
  const { userProfile } = useAuthUser();
  const { data } = useMainPageHooks();

  const { push } = useRouter();

  // const { mutate } = usePostBooks();

  const refNo = useRef(null);
  const refLabel = useRef(null);
  const refAuthor = useRef(null);
  const refPublishDate = useRef(null);

  const [genre, setGenre] = useState<ComboboxItem>();
  const onOpenKelolaPage = () => push("/");

  const { data: genres } = useGetGenre({ enabled: true });

  const valuesGenre = genres?.data.data.map((genre: any) => ({
    value: genre.id,
    label: genre.label,
  }));

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
              <TextInput ref={refNo} label="No" />
              <TextInput ref={refLabel} label="Judul" />
              <TextInput ref={refAuthor} label="Author" />
              <TextInput ref={refPublishDate} label="Tanggal Rilis" />
              <Select
                label="Genre"
                data={valuesGenre}
                value={genre ? genre.value : null}
                onChange={(option: any) => setGenre(option)}
              />
            </div>

            <div className="w-full h-full p-4 overflow-y-auto">
              <Container className="mx-10 my-4">
                {data?.data?.map((books) => (
                  <Card
                    key={books?.id}
                    className="relative flex gap-2 h-72 hover:border-blue-300 cursor-pointer group w-[18rem]"
                  >
                    <div className="relative flex flex-col items-center justify-center w-full bg-blue-400">
                      <div className="text-white text-4xl font-semibold group-hover:text-yellow-400">
                        {books?.title}
                      </div>
                      <div className="text-neutral-50">
                        By:{" "}
                        <span className="text-neutral-800">
                          {books?.author}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </Container>
            </div>
          </div>
        </div>
      </MainLayout.Body>
    </MainLayout>
  );
};

export default Kelola;
