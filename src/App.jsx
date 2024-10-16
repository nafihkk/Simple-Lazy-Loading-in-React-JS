import React, {lazy, Suspense} from "react";
import "./style.css";

const AvatarComponent = lazy(() => import('./AvatarComponent'));

const App = () => {
  const Loader = () => <p>Loading</p>;

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>lazy load loading with suspense</p>
      <Suspense fallback={<Loader />}>
        <AvatarComponent />
      </Suspense>
    </div>
  );
};

export default App;
