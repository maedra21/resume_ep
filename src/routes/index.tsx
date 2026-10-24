import { createFileRoute } from "@tanstack/react-router";
import { ResumePage } from "@/components/resume-page";

export const Route = createFileRoute("/")({
  component: ResumePage,
});
