import { define } from "directive";
import { paint } from "standard/dom";
import component from "./component";
import style from "./style";

@define("memo-how-works")
@paint(component, style)
class App extends HTMLElement {}

export default App;
