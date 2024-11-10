import React, { Suspense, useEffect, useRef } from "react";

const RemoteReactApp = React.lazy(() => import("remote_app/App"));

function VueWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const appInstanceRef = useRef<any>(null);

  useEffect(() => {
    const loadVueApp = async () => {
      try {
        const { mount } = await import("remote_vue/App");
        if (containerRef.current) {
          appInstanceRef.current = mount(containerRef.current);
        }
      } catch (error) {
        console.error("Failed to load Vue app:", error);
      }
    };

    loadVueApp();

    return () => {
      if (appInstanceRef.current) {
        appInstanceRef.current.unmount();
      }
    };
  }, []);

  return <div ref={containerRef} />;
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Host Application</h1>
      <div style={{ marginTop: "20px" }}>
        <Suspense fallback={<div>Loading React Remote App...</div>}>
          <RemoteReactApp />
        </Suspense>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Suspense fallback={<div>Loading Vue Remote App...</div>}>
          <VueWrapper />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
