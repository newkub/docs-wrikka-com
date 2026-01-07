---
title: API Reference
description: Complete API documentation for Vitext
---

# API Reference

Complete API documentation for extending and customizing Vitext.

## Core API

### Extension API

#### activate()

Called when the extension is activated.

```typescript
export function activate(context: Extension) {
  console.log("Extension activated");
}
```

#### deactivate()

Called when the extension is deactivated.

```typescript
export function deactivate() {
  console.log("Extension deactivated");
}
```

### Commands API

#### registerCommand()

Register a new command.

```typescript
import { commands } from "@wrikka/vitext";

const disposable = commands.registerCommand("extension.hello", () => {
  window.showInformationMessage("Hello World!");
});

context.subscriptions.push(disposable);
```

#### executeCommand()

Execute an existing command.

```typescript
import { commands } from "@wrikka/vitext";

await commands.executeCommand("workbench.action.files.save");
```

#### getCommands()

Get all available commands.

```typescript
import { commands } from "@wrikka/vitext";

const allCommands = await commands.getCommands();
```

### Window API

#### showInformationMessage()

Display an information message.

```typescript
import { window } from "@wrikka/vitext";

window.showInformationMessage("Operation completed successfully!");
```

#### showErrorMessage()

Display an error message.

```typescript
import { window } from "@wrikka/vitext";

window.showErrorMessage("Something went wrong!");
```

#### showWarningMessage()

Display a warning message.

```typescript
import { window } from "@wrikka/vitext";

window.showWarningMessage("Please save your changes first.");
```

#### showInputBox()

Prompt user for input.

```typescript
import { window } from "@wrikka/vitext";

const result = await window.showInputBox({
  prompt: "Enter your name",
  placeHolder: "John Doe",
  validateInput: (value) => {
    return value.length < 3 ? "Name must be at least 3 characters" : null;
  },
});
```

#### showQuickPick()

Show selection list.

```typescript
import { window } from "@wrikka/vitext";

const choice = await window.showQuickPick(
  ["Option 1", "Option 2", "Option 3"],
  {
    placeHolder: "Select an option",
    canPickMany: false,
  },
);
```

### Workspace API

#### workspaceFolders

Get workspace folders.

```typescript
import { workspace } from "@wrikka/vitext";

const folders = workspace.workspaceFolders;
if (folders) {
  console.log("Workspace folders:", folders.map(f => f.uri.fsPath));
}
```

#### findFiles()

Find files in workspace.

```typescript
import { workspace } from "@wrikka/vitext";

const files = await workspace.findFiles(
  "**/*.ts", // Include pattern
  "**/node_modules/**", // Exclude pattern
  10, // Max results
);
```

#### openTextDocument()

Open a text document.

```typescript
import { workspace } from "@wrikka/vitext";

const document = await workspace.openTextDocument("/path/to/file.ts");
```

#### getConfiguration()

Get workspace configuration.

```typescript
import { workspace } from "@wrikka/vitext";

const config = workspace.getConfiguration("editor");
const fontSize = config.get<number>("fontSize", 14);
```

## Document API

### TextDocument

#### getText()

Get document text.

```typescript
const text = document.getText();
const rangeText = document.getText(range);
```

#### getLineCount()

Get number of lines.

```typescript
const lineCount = document.getLineCount();
```

#### lineAt()

Get line at specific index.

```typescript
const line = document.lineAt(0);
const lineText = line.text;
const lineNumber = line.lineNumber;
```

#### positionAt()

Get position at offset.

```typescript
const position = document.positionAt(100);
```

#### offsetAt()

Get offset at position.

```typescript
const offset = document.offsetAt(position);
```

### TextEditor

#### document

Get current document.

```typescript
const document = window.activeTextEditor?.document;
```

#### selection

Get current selection.

```typescript
const selection = window.activeTextEditor?.selection;
const selectedText = document?.getText(selection);
```

#### edit()

Make edits to document.

```typescript
const editor = window.activeTextEditor;
if (editor) {
  await editor.edit(editBuilder => {
    editBuilder.insert(new Position(0, 0), "Hello World");
    editBuilder.replace(new Range(0, 0, 0, 5), "Hi");
  });
}
```

## Events API

### onDidChangeTextDocument()

Listen for document changes.

```typescript
import { workspace } from "@wrikka/vitext";

const disposable = workspace.onDidChangeTextDocument((event) => {
  console.log("Document changed:", event.document.fileName);

  for (const change of event.contentChanges) {
    console.log("Change:", change.text, change.range);
  }
});

context.subscriptions.push(disposable);
```

### onDidChangeConfiguration()

Listen for configuration changes.

```typescript
import { workspace } from "@wrikka/vitext";

const disposable = workspace.onDidChangeConfiguration((event) => {
  if (event.affectsConfiguration("editor.fontSize")) {
    console.log("Font size changed");
  }
});

context.subscriptions.push(disposable);
```

### onDidSaveTextDocument()

Listen for document saves.

```typescript
import { workspace } from "@wrikka/vitext";

const disposable = workspace.onDidSaveTextDocument((document) => {
  console.log("Document saved:", document.fileName);
});

context.subscriptions.push(disposable);
```

## Language API

### Languages

```typescript
import { languages } from "@wrikka/vitext";

// Register completion provider
const disposable = languages.registerCompletionItemProvider(
  "typescript", // Language
  {
    provideCompletionItems(document, position) {
      return [
        {
          label: "console.log",
          kind: CompletionItemKind.Function,
          insertText: "console.log($1)",
          documentation: "Log to console",
        },
      ];
    },
  },
  ".", // Trigger character
);

context.subscriptions.push(disposable);
```

### CompletionItemProvider

```typescript
interface CompletionItemProvider {
  provideCompletionItems(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: CompletionContext,
  ): CompletionItem[] | Promise<CompletionItem[]>;
}
```

### HoverProvider

```typescript
const disposable = languages.registerHoverProvider("typescript", {
  provideHover(document, position) {
    const word = document.getText(document.getWordRangeAtPosition(position));

    return {
      contents: [`${word} documentation`],
    };
  },
});
```

## Diagnostics API

### createDiagnosticCollection()

Create diagnostic collection.

```typescript
import { languages } from "@wrikka/vitext";

const collection = languages.createDiagnosticCollection("myExtension");

// Add diagnostics
collection.set(uri, [
  {
    range: new Range(0, 0, 0, 10),
    message: "This is an error",
    severity: DiagnosticSeverity.Error,
  },
]);
```

### DiagnosticSeverity

```typescript
enum DiagnosticSeverity {
  Error = 0,
  Warning = 1,
  Information = 2,
  Hint = 3,
}
```

## Output Channel API

### createOutputChannel()

Create output channel.

```typescript
import { window } from "@wrikka/vitext";

const outputChannel = window.createOutputChannel("My Extension");
outputChannel.appendLine("Extension started");
outputChannel.show();
```

## Status Bar API

### createStatusBarItem()

Create status bar item.

```typescript
import { window } from "@wrikka/vitext";

const statusBarItem = window.createStatusBarItem(StatusBarAlignment.Right, 100);
statusBarItem.text = "$(gear) My Extension";
statusBarItem.tooltip = "Click to run extension";
statusBarItem.command = "extension.run";
statusBarItem.show();
```

## Tree View API

### TreeDataProvider

```typescript
import { TreeDataProvider, TreeItem } from "@wrikka/vitext";

class MyTreeDataProvider implements TreeDataProvider<string> {
  getTreeItem(element: string): TreeItem {
    return {
      label: element,
      collapsibleState: element.includes("/")
        ? TreeItemCollapsibleState.Expanded
        : TreeItemCollapsibleState.None,
    };
  }

  getChildren(element?: string): Thenable<string[]> {
    if (!element) {
      return Promise.resolve(["folder1", "folder2", "file1"]);
    }
    return Promise.resolve([]);
  }
}

const treeDataProvider = new MyTreeDataProvider();
window.createTreeView("myExtension.explorer", {
  treeDataProvider,
});
```

## Webview API

### WebviewPanel

```typescript
import { window } from "@wrikka/vitext";

const panel = window.createWebviewPanel(
  "myExtension.webview", // viewType
  "My Webview", // title
  ViewColumn.One, // position
  {
    enableScripts: true,
    retainContextWhenHidden: true,
  },
);

panel.webview.html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Webview</title>
    </head>
    <body>
      <h1>Hello from Webview!</h1>
    </body>
  </html>
`;
```

## Utilities

### Disposable

```typescript
import { Disposable } from "@wrikka/vitext";

class MyFeature implements Disposable {
  private disposables: Disposable[] = [];

  constructor() {
    this.disposables.push(); // Register disposables
  }

  dispose() {
    this.disposables.forEach(d => d.dispose());
  }
}
```

### CancellationToken

```typescript
async function longRunningOperation(token: CancellationToken) {
  for (let i = 0; i < 1000; i++) {
    if (token.isCancellationRequested) {
      return;
    }
    // Do work
  }
}
```

## Types

### Position

```typescript
interface Position {
  line: number;
  character: number;
}
```

### Range

```typescript
interface Range {
  start: Position;
  end: Position;
}
```

### Location

```typescript
interface Location {
  uri: Uri;
  range: Range;
}
```

### Uri

```typescript
interface Uri {
  scheme: string
  authority: string
  path: string
  query: string
  fragment: string
  
  static file(path: string): Uri
  static parse(value: string): Uri
}
```

## Examples

### Simple Extension

```typescript
import { commands, Extension, window } from "@wrikka/vitext";

export function activate(context: Extension) {
  const disposable = commands.registerCommand("extension.hello", () => {
    window.showInformationMessage("Hello from Extension!");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
```

### Language Provider

```typescript
import { CompletionItemKind, Extension, languages } from "@wrikka/vitext";

export function activate(context: Extension) {
  const disposable = languages.registerCompletionItemProvider(
    "javascript",
    {
      provideCompletionItems(document, position) {
        return [
          {
            label: "console.log",
            kind: CompletionItemKind.Function,
            insertText: "console.log($1);",
            documentation: "Log to console",
          },
        ];
      },
    },
    ".",
  );

  context.subscriptions.push(disposable);
}
```

---

_For more examples and advanced usage, check out our examples for complete application templates._
