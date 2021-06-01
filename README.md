# JSII Out Of Memory Error

In the [CDK for Terraform](https://cdk.tf) we generate bindings to Terraform providers. The AWS Terraform provider is particularly large (see `.jsii` file). When using `jsii-pacmak` to generate the Go code, it needs ~7 GB of memory to work and fails with less (e.g. 4 GB or the default which seems to be 2 GB). We haven't yet determined the exact amount it needs, but it would be nice to know whether it's something that is "our fault" by using such large workloads with jsii or if that is something that might be fixed somehow.  
  


## Reproduction
This repo contains the required code to reproduce that out of memory error.

### Prerequisites
```
yarn install
```

### Reproduce out of memory error
```
./test.sh
```
fails with
```
➜  cdktf-go-aws-oom-jsii git:(main) ✗ ./test.sh                                             14:17:36
npx: installed 45 in 7.111s

<--- Last few GCs --->

[47418:0x110008000]    70928 ms: Scavenge 1999.8 (2038.6) -> 1994.6 (2038.6) MB, 68.5 / 0.0 ms  (average mu = 0.257, current mu = 0.224) allocation failure 
[47418:0x110008000]    70950 ms: Scavenge 2005.8 (2038.6) -> 1999.9 (2038.6) MB, 6.9 / 0.0 ms  (average mu = 0.257, current mu = 0.224) allocation failure 
[47418:0x110008000]    71728 ms: Scavenge 2010.1 (2038.6) -> 2004.5 (2021.1) MB, 11.4 / 0.0 ms  (average mu = 0.257, current mu = 0.224) allocation failure 


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0x100a0ddd9]
Security context: 0x13db59a808d1 <JSObject>
    1: byName(aka byName) [0x13db21610751] [/Users/ansgar/.npm/_npx/47418/lib/node_modules/jsii-pacmak/lib/targets/go/comparators.js:~4] [pc=0x2e0a555aa404](this=0x13dbbf5004b1 <undefined>,0x13db65aaaff9 <GoMethod map = 0x13db06504da9>,0x13db65aaaef9 <GoMethod map = 0x13db06504da9>)
    2: StubFrame [pc: 0x100a5c789]
    3: StubFrame [pc: 0x100a5ef36]
    4: so...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0x1012049e5 node::Abort() (.cold.1) [/Users/ansgar/.nvm/versions/node/v12.22.0/bin/node]
 2: 0x1000a5fd9 node::Abort() [/Users/ansgar/.nvm/versions/node/v12.22.0/bin/node]
 3: 0x1000a613f node::OnFatalError(char const*, char const*) [/Users/ansgar/.nvm/versions/node/v12.22.0/bin/node]
 4: 0x1001f0117 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/Users/ansgar/.nvm/versions/node/v12.22.0/bin/node]
 5: 0x1001f00b7 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/Users/ansgar/.nvm/versions/node/v12.22.0/bin/node]
 6: 0x100388e75 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/Users/ansgar/.nvm/versions/node/v12.22.0/bin/node]
 7: 0x10038a6ea v8::internal::Heap::RecomputeLimits(v8::internal::GarbageCollector) [/Users/ansgar/.nvm/versions/node/v12.22.0/bin/node]
 8: 0x10038711c v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/Users/ansgar/.nvm/versions/node/v12.22.0/bin/node]
 9: 0x100384f1e v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/Users/ansgar/.nvm/versions/node/v12.22.0/bin/node]
10: 0x100383f61 v8::internal::Heap::HandleGCRequest() [/Users/ansgar/.nvm/versions/node/v12.22.0/bin/node]
11: 0x1003490d1 v8::internal::StackGuard::HandleInterrupts() [/Users/ansgar/.nvm/versions/node/v12.22.0/bin/node]
12: 0x1006b0a5c v8::internal::Runtime_StackGuard(int, unsigned long*, v8::internal::Isolate*) [/Users/ansgar/.nvm/versions/node/v12.22.0/bin/node]
13: 0x100a0ddd9 Builtins_CEntry_Return1_DontSaveFPRegs_ArgvOnStack_NoBuiltinExit [/Users/ansgar/.nvm/versions/node/v12.22.0/bin/node]
./test.sh: line 1: 47418 Abort trap: 6           npx jsii-pacmak .
```

### Workaround / Fix
```
NODE_OPTIONS='--max-old-space-size=7000' ./test.sh
```
