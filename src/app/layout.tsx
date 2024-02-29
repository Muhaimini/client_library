import React, { PropsWithChildren } from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Provider as QueryClientProvider } from "^/utils/react-query";
import BaseLayout from "^/layouts/base";

import "^/styles/globals.css";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <QueryClientProvider>
          <MantineProvider>
            <BaseLayout>{children}</BaseLayout>
          </MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
