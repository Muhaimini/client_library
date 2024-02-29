import React, { memo } from "react";
import cx from "classnames";

const Skeleton = ({ isRounded = false, className }: Partial<SkeletonProps>) => {
  return (
    <div
      className={cx("animate-pulse bg-slate-200 rounded", className, {
        "rounded-full w-8 h-8": isRounded,
        "w-24 h-6": !isRounded,
      })}
    />
  );
};

export default memo(Skeleton);
