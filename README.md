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

### Workaround / Fix
```
NODE_OPTIONS='--max-old-space-size=7000' ./test.sh
```
