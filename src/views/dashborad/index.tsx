"use client";

import useGetJsonPlacholder from "hooks/queries/use-get-json-placholder";
import { useRouter } from "next/navigation";
import React, { memo } from "react";

const Dashboard = () => {
  const router = useRouter();
  const { data, isLoading } = useGetJsonPlacholder();

  return (
    <div>
      <div
        className="bg-blue-200 cursor-pointer"
        onClick={() => router.push("/")}
      >
        Dashboard page!
      </div>
      <div>
        {isLoading
          ? "Loading..."
          : data?.data?.map((data) => <div key={data.id}>{data?.title}</div>)}
      </div>
    </div>
  );
};

export default memo(Dashboard);
