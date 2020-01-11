initSidebarItems({"enum":[["AnyRef","Represents an opaque reference to any data within WebAssembly."],["Extern",""],["ExternType","A list of all possible types which can be externally referenced from a WebAssembly module."],["Mutability","Indicator of whether a global is mutable or not"],["OptLevel","Possible optimization levels for the Cranelift codegen backend."],["Strategy","Possible Compilation strategies for a wasm module."],["Val","Possible runtime values that a WebAssembly module can either consume or produce."],["ValType","A list of all possible value types in WebAssembly."]],"mod":[["wasm","This file defines the extern \"C\" API, which is compatible with the Wasm C API."]],"struct":[["Config","Global configuration options used to create an [`Engine`] and customize its behavior."],["Engine","An `Engine` which is a global context for compilation and management of wasm modules."],["ExportType","A descriptor for an exported WebAssembly value."],["FrameInfo",""],["Func",""],["FuncType","A descriptor for a function in a WebAssembly module."],["Global",""],["GlobalType","A WebAssembly global descriptor."],["ImportType","A descriptor for an imported value into a wasm module."],["Instance",""],["Limits","Limits of tables/memories where the units of the limits are defined by the table/memory types."],["Memory",""],["MemoryType","A descriptor for a WebAssembly memory type."],["Module","A compiled WebAssembly module, ready to be instantiated."],["Store","A `Store` is a shared cache of information between WebAssembly modules."],["Table",""],["TableType","A descriptor for a table in a WebAssembly module."],["Trap","A struct representing an aborted instruction execution, with a message indicating the cause."]],"trait":[["Callable","A trait representing a function that can be imported and called from inside WebAssembly. # Example ``` use wasmtime::Val;"]]});