import { createFileRoute } from "@tanstack/react-router";

import ReactTemplate from "@/assets/images/react-template.svg";

export const Route = createFileRoute("/")({
  component: () => (
    <div className="text-white text-center">
      <ReactTemplate />
      <h1 className="text-5xl my-8">React Template! 📦 ⚛️</h1>
    </div>
  ),
});
