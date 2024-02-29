"use client";

import React, { memo } from "react";
import MainLayout from "^layouts/main";
import { Button, Input } from "@mantine/core";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Card, Container } from "^components";
import useMainPageHooks from "^views/hooks/use-main-page-hooks";

const Main = () => {
  const { push } = useRouter();
  const { data, onSearchBook } = useMainPageHooks();

  return (
    <MainLayout>
      <MainLayout.Header>
        <div className="w-full flex items-center justify-center">
          <div className="w-11/12 flex items-center justify-between">
            <div className="text-2xl font-bold">
              Perpus
              <span className="text-blue-400">!</span>
            </div>
            <div className="flex gap-3 items-center">
              <Input
                radius="xl"
                placeholder="Search"
                onChange={(event) => onSearchBook(event.target.value)}
                rightSection={<MagnifyingGlassIcon className="w-4" />}
              />
              <Button
                classNames={{ root: "bg-blue-500 hover:bg-blue-600" }}
                onClick={() => push("/dashboard")}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </MainLayout.Header>

      <MainLayout.Body>
        <Container className="mx-10 my-4">
          {data?.data?.map((books) => (
            <Card
              key={books?.id}
              className="relative flex gap-2 h-72 hover:border-blue-300 cursor-pointer group w-[30rem]"
            >
              <div className="flex flex-col items-center justify-center w-full bg-blue-400">
                <div className="text-white text-4xl font-semibold group-hover:text-yellow-400">
                  {books?.title}
                </div>
                <div className="text-neutral-50">
                  By: <span className="text-neutral-800">{books.author}</span>
                </div>
              </div>
            </Card>
          ))}
        </Container>
      </MainLayout.Body>
    </MainLayout>
  );
};

export default memo(Main);
