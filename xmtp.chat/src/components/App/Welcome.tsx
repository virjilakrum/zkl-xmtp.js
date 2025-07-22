import {
  Anchor,
  Button,
  Group,
  Stack,
  Text,
  Title,
  useMatches,
} from "@mantine/core";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import { Connect } from "@/components/App/Connect";


export const Welcome = () => {
  const navigate = useNavigate();
  const px = useMatches({
    base: "5%",
    sm: "10%",
  });

  const handleInboxToolsClick = useCallback(() => {
    void navigate("/inbox-tools");
  }, [navigate]);

  return (
    <Stack gap="xl" py={40} px={px}>
      <Stack gap="md" align="center">
        <Title order={1}>zkλ is built for developers</Title>
        <Text fs="italic" size="xl">
          Learn to build with zkλ — using an app built with zkλ
        </Text>
      </Stack>
      <Connect />
      <Stack gap="md">
        <Title order={3}>Installation management</Title>
        <Text>
          Use this tool to manage your installations without an zkλ client.
        </Text>
        <Group justify="center">
          <Button size="md" onClick={handleInboxToolsClick}>
            Launch installation management
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
};
