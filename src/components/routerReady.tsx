import { Suspense } from "react";

// RouterReady is a wrapper component that ensures the child component
// is only rendered once the router context is available (i.e., after hydration).
// It helps prevent errors related to client-side hooks like `useSearchParams`
// being called before the context is ready. It does this by wrapping the child
// component in a Suspense boundary and deferring its render until the router
// context is fully initialized.

const RouterReady = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={null}>{children}</Suspense>;
};

export default RouterReady;
