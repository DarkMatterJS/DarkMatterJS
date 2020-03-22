import ts from 'typescript'

const compilerOptions: ts.CompilerOptions = {
  target: ts.ScriptTarget.Latest,
  module: ts.ModuleKind.CommonJS,
  lib: ['dom', 'dom.iterable', 'esnext', 'es2020'],
  allowJs: true,
  skipLibCheck: true,
  esModuleInterop: true,
  allowSyntheticDefaultImports: true,
  forceConsistentCasingInFileNames: true,
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  resolveJsonModule: true,
  isolatedModules: true,
  noEmit: true,
  jsx: ts.JsxEmit.React,
  inlineSourceMap: true,

  /* Strict */
  // strict: true, /* enable all strict type checks */

  /* Additional Checks */
  strictNullChecks: true,
  noUnusedLocals: true /* Report errors on unused locals. */,
  noUnusedParameters: true /* Report errors on unused parameters. */,
  noImplicitReturns: true /* Report error when not all code paths in function return a value. */,
  noFallthroughCasesInSwitch: true /* Report errors for fallthrough cases in switch statement. */,

  /* Debugging Options */
  traceResolution: false /* Report module resolution log messages. */,
  listEmittedFiles: false /* Print names of generated files part of the compilation. */,
  listFiles: false /* Print names of files part of the compilation. */,
  pretty: true /* Stylize errors and messages using color and context. */,

  /* Types */
  types: ['node', 'jest'],
  typeRoots: ['node_modules/@types', 'src/types'],
}

export = {
  compilerOptions,
}
