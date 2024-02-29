"use client";

import React, { memo, PropsWithChildren } from "react";
import cx from "classnames";

const Parent = ({ children }: PropsWithChildren) => {
  return <div className="h-full w-full box-border">{children}</div>;
};

const Header = ({
  children,
  className = "bg-white",
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cx("sticky top-0 w-full z-10 border-b shadow p-4", className)}
    >
      {children}
    </div>
  );
};

const Body = ({
  children,
  className = "p-4",
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={cx("flex flex-col gap-4", className)}>{children}</div>;
};

const Footer = ({
  children,
  className = "p-4",
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={cx("sticky w-full", className)}>{children}</div>;
};

export default Object.assign(memo(Parent), { Header, Body, Footer });
