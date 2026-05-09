import { createFileRoute } from "@tanstack/react-router";
import { CameraGrid, EventsFeed } from "@/components/dashboard";

export const Route = createFileRoute("/cameras")({
  head: () => ({
    meta: [
      { title: "Camera Grid · ForestGuard AI" },
      { name: "description", content: "Edge AI camera nodes across Nepal's conservation zones with adaptive coordination." },
    ],
  }),
  component: CamerasPage,
});

function CamerasPage() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Camera Network</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Offline edge AI inference. Empty frames suppressed. Adaptive boost activates neighboring cameras on important detections.
        </p>
      </div>
      <CameraGrid />
      <EventsFeed limit={30} />
    </div>
  );
}
