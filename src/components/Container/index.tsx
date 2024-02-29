import React, { PropsWithChildren, memo } from "react";
import cx from "classnames";

const Container = ({
  children,
  className,
  responsive = true,
}: PropsWithChildren<Partial<ContainterProps>>) => {
  return (
    <div
      className={cx(
        "grid grid-cols-4 gap-4",
        { "xl:flex-row md:flex-col": responsive },
        className
      )}
    >
      {children}
    </div>
  );
};

export default memo(Container);
