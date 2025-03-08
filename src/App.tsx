import "./App.css";
import SearchForm from "./components/ui/custom/SearchForm";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

function App() {
  return (
    <div className="w-full h-screen bg-black text-white">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <SearchForm />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Форма для добавления</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
 
export default App;
