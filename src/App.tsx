import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { yaml } from '@codemirror/legacy-modes/mode/yaml';
import './App.css';
import { EditorView } from '@codemirror/view';


export default function App() {
  const queryString = window.location.search
  // it will look like this: ?product=shirt&color=blue&newuser&size=m

  // parse the query string's paramters
  const urlParams = new URLSearchParams(queryString)

  // To get a parameter simply write something like the follwing
  const items = urlParams.get('items') || ""
  const theme = urlParams.get('theme') || "light" as any

  console.log(items)

  return <div className="playground-container">
      
      <div className="playground-panel">
        <CodeMirror
         onChange={c => {
            console.log(c)
            let w = window as any;
            if (w.webkit && w.webkit.messageHandlers && w.webkit.messageHandlers.toggleMessageHandler) {
              w.webkit.messageHandlers.toggleMessageHandler.postMessage({
                "message": c
              });
            }
          }} theme={theme} value={items} 
        extensions={[StreamLanguage.define(yaml), EditorView.lineWrapping]} 
          className="cm-outer-container"
        />
      </div>
    <div className="btn-container">
      <button className="btn" onClick={() => {
        console.log("load")

        let w = window as any;
        if (w.webkit && w.webkit.messageHandlers && w.webkit.messageHandlers.toggleMessageHandler) {
          w.webkit.messageHandlers.toggleMessageHandler.postMessage({
            "done": "true"
          });
        }

      }}>Load reource via yaml</button>
      </div>
    
    </div>
}
