import { Layout } from "./components/Layout";
import { Profile } from "./components/Profile";
import useGithub from "./hooks/github-hooks";
import Repositories from "./components/Repositories";
import { NoSearch } from "./components/NoSearch";
import { Loading } from "./components/Loading";

function App() {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <Loading />
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;
