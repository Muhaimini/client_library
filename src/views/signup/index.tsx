"use client";

import { FormProvider } from "react-hook-form";
import React from "react";
import MainLayout from "^layouts/main";
import cx from "classnames";
import { Button, Input } from "@mantine/core";

import { Card, Container } from "^components";
import useSignUpForm from "^views/hooks/use-signup-form";
import { isEmpty } from "lodash";

const Login = () => {
  const { onBackToLogin, onBackToMain, onSubmit, onInputChange, method } =
    useSignUpForm();

  return (
    <FormProvider {...method}>
      <MainLayout>
        <MainLayout.Header>
          <div className="w-full flex items-center justify-center">
            <div className="w-11/12 flex items-center justify-between">
              <div
                className="text-2xl font-bold cursor-pointer"
                onClick={onBackToMain}
              >
                Perpus
                <span className="text-blue-400">!</span>
              </div>
            </div>
          </div>
        </MainLayout.Header>

        <MainLayout.Body>
          <Container className="mx-10 flex items-center justify-center h-[calc(100vh-200px)]">
            <Card className="relative w-1/4 py-12 flex flex-col gap-4 items-center justify-center border-blue-300 shadow-xl rounded-lg">
              <div className="text-2xl font-bold cursor-pointer mb-6">
                signup
                <span className="text-blue-400">.</span>
              </div>
              <div className="flex flex-col w-full items-center h-12">
                <Input
                  name="identityId"
                  radius="xl"
                  placeholder="ID"
                  classNames={{ wrapper: "w-2/3" }}
                  onChange={onInputChange}
                  error={method.formState.errors?.identityId?.message}
                />
                <div
                  className={cx("text-xs text-red-500 h-4 w-2/3", {
                    hidden: !method.formState.errors?.identityId?.message,
                  })}
                >
                  {method.formState.errors?.identityId?.message}
                </div>
              </div>
              <div className="flex flex-col w-full items-center h-12">
                <Input
                  name="name"
                  radius="xl"
                  placeholder="Nama"
                  classNames={{ wrapper: "w-2/3" }}
                  onChange={onInputChange}
                  error={method.formState.errors?.name?.message}
                />
                <div
                  className={cx("text-xs text-red-500 h-4 w-2/3", {
                    hidden: !method.formState.errors?.name?.message,
                  })}
                >
                  {method.formState.errors?.name?.message}
                </div>
              </div>
              <div className="flex flex-col w-full items-center h-12">
                <Input
                  name="address"
                  radius="xl"
                  placeholder="Alamat"
                  classNames={{ wrapper: "w-2/3" }}
                  onChange={onInputChange}
                  error={method.formState.errors?.address?.message}
                />
                <div
                  className={cx("text-xs text-red-500 h-4 w-2/3", {
                    hidden: !method.formState.errors?.address?.message,
                  })}
                >
                  {method.formState.errors?.address?.message}
                </div>
              </div>
              <div className="flex flex-col w-full items-center h-12">
                <Input
                  name="contact"
                  radius="xl"
                  placeholder="No. HP"
                  classNames={{ wrapper: "w-2/3" }}
                  onChange={onInputChange}
                  error={method.formState.errors?.contact?.message}
                />
                <div
                  className={cx("text-xs text-red-500 h-4 w-2/3", {
                    hidden: !method.formState.errors?.contact?.message,
                  })}
                >
                  {method.formState.errors?.contact?.message}
                </div>
              </div>
              <Button
                disabled={
                  !method.formState.isDirty || !isEmpty(method.formState.errors)
                }
                onClick={onSubmit}
                classNames={{
                  root: "bg-blue-500 hover:bg-blue-600 disabled:text-white",
                }}
              >
                signup
              </Button>
              <div
                onClick={onBackToLogin}
                className={cx(
                  "text-sm text-blue-600 cursor-pointer hover:underline"
                )}
              >
                login
              </div>
            </Card>
          </Container>
        </MainLayout.Body>
      </MainLayout>
    </FormProvider>
  );
};

export default Login;
