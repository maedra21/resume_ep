import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/projekte/")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
