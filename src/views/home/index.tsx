"use client";

import React, { memo } from "react";
import MainLayout from "^layouts/main";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { Card, Container } from "components";

const Home = () => {
  const { push } = useRouter();
  return (
    <MainLayout>
      <MainLayout.Header>
        <Button
          color="dark"
          variant="outline"
          onClick={() => push("/dashboard")}
        >
          go to dashborad
        </Button>
      </MainLayout.Header>

      <MainLayout.Body className="mx-10 my-7">
        <Card className="h-40">Jumbotron</Card>
        <Container>
          <Card className="w-full h-40">1</Card>
          <Card className="w-full h-40">2</Card>
          <Card className="w-full h-40">3</Card>
        </Container>
      </MainLayout.Body>
    </MainLayout>
  );
};

export default memo(Home);
