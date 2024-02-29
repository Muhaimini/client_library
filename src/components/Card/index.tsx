import React, { PropsWithChildren, memo } from "react";
import cx from "classnames";

const Card = ({
  children,
  className,
}: PropsWithChildren<Partial<ClassName>>) => {
  return (
    <div className={cx("border rounded shadow p-2 min-w-min", className)}>
      {children}
    </div>
  );
};

export default memo(Card);
