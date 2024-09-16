import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => <div className="text-2xl text-white">React Template! 📦 ⚛️</div>,
});
