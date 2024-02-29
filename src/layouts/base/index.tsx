"use client";

import React, { memo, PropsWithChildren } from "react";

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="fixed h-screen w-screen overflow-auto">{children}</div>
  );
};

export default memo(BaseLayout);
