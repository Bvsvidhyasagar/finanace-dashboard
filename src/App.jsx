import Sidebar from "./components/layouts/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;