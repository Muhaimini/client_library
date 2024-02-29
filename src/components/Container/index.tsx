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
        "flex gap-3 flex-col",
        { "xl:flex-row md:flex-row": responsive },
        className
      )}
    >
      {children}
    </div>
  );
};

export default memo(Container);
