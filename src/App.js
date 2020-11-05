import Math from "./Math";
import Math2 from "./Math2";

function App() {
  return (
    <div>
        <Math a b />
        <Math a='1' b='2' />
        <Math a={1} b={2} />
        <Math a={1} b={2} foo={()=>{console.log('Do smth ...')}} />
        <br/>
        <Math2 a={1} b={2} />
        <Math2 a={1} b={2} specProp='smth else...'/>
    </div>
  );
}

export default App;
