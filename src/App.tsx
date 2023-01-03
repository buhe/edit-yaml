import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';


export default function App() {
  const queryString = window.location.search
  // it will look like this: ?product=shirt&color=blue&newuser&size=m

  // parse the query string's paramters
  const urlParams = new URLSearchParams(queryString)

  // To get a parameter simply write something like the follwing
  const items = urlParams.get('items') || ""
  const theme = urlParams.get('theme') || "light" as any

  console.log(items)

  return <CodeMirror theme={theme} value={items} height="400px" extensions={[StreamLanguage.define(yaml)]} />;
}
