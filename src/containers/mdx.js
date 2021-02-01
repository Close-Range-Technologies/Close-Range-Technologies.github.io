import { importMDX } from "./mdx.macro";

const MyDocument = React.lazy(() => importMDX("./my-document.mdx"));
const MDXContainer = () => {
  return (
    (
      <React.Suspense fallback={<div>Loading...</div>}>
        <MyDocument />
      </React.Suspense>
    ),
    document.getElementById("root")
  );
};

export default MDXContainer;
