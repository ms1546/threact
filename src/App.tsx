import ThreeCanvas from '@/components/ui/canvas';
import { Button } from "@/components/ui/button"

function App() {
    return (
    <>
      <h1>Threact</h1>
        <Button onClick={() => alert("Pushed!!")}>牡丹</Button>
      <ThreeCanvas /> 
    </>
  );
};

export default App
