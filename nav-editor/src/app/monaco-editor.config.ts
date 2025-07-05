import { NgxMonacoEditorConfig } from "ngx-monaco-editor-v2";


export const monacoEditorConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets', // or 'node_modules/monaco-editor/min'
  defaultOptions: { scrollBeyondLastLine: false },
  onMonacoLoad: () => {
    console.log('Monaco Editor Loaded');
  }
};
