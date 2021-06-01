import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#code_signing_config_arn LambdaFunction#code_signing_config_arn}.
     */
    readonly codeSigningConfigArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#description LambdaFunction#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#filename LambdaFunction#filename}.
     */
    readonly filename?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#function_name LambdaFunction#function_name}.
     */
    readonly functionName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#handler LambdaFunction#handler}.
     */
    readonly handler?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#image_uri LambdaFunction#image_uri}.
     */
    readonly imageUri?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#kms_key_arn LambdaFunction#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#layers LambdaFunction#layers}.
     */
    readonly layers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#memory_size LambdaFunction#memory_size}.
     */
    readonly memorySize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#package_type LambdaFunction#package_type}.
     */
    readonly packageType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#publish LambdaFunction#publish}.
     */
    readonly publish?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}.
     */
    readonly reservedConcurrentExecutions?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#role LambdaFunction#role}.
     */
    readonly role: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#runtime LambdaFunction#runtime}.
     */
    readonly runtime?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#s3_bucket LambdaFunction#s3_bucket}.
     */
    readonly s3Bucket?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#s3_key LambdaFunction#s3_key}.
     */
    readonly s3Key?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#s3_object_version LambdaFunction#s3_object_version}.
     */
    readonly s3ObjectVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#source_code_hash LambdaFunction#source_code_hash}.
     */
    readonly sourceCodeHash?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#tags LambdaFunction#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#tags_all LambdaFunction#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#timeout LambdaFunction#timeout}.
     */
    readonly timeout?: number;
    /**
     * dead_letter_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#dead_letter_config LambdaFunction#dead_letter_config}
     */
    readonly deadLetterConfig?: LambdaFunctionDeadLetterConfig[];
    /**
     * environment block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#environment LambdaFunction#environment}
     */
    readonly environment?: LambdaFunctionEnvironment[];
    /**
     * file_system_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#file_system_config LambdaFunction#file_system_config}
     */
    readonly fileSystemConfig?: LambdaFunctionFileSystemConfig[];
    /**
     * image_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#image_config LambdaFunction#image_config}
     */
    readonly imageConfig?: LambdaFunctionImageConfig[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#timeouts LambdaFunction#timeouts}
     */
    readonly timeouts?: LambdaFunctionTimeouts;
    /**
     * tracing_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#tracing_config LambdaFunction#tracing_config}
     */
    readonly tracingConfig?: LambdaFunctionTracingConfig[];
    /**
     * vpc_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#vpc_config LambdaFunction#vpc_config}
     */
    readonly vpcConfig?: LambdaFunctionVpcConfig[];
}
export interface LambdaFunctionDeadLetterConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#target_arn LambdaFunction#target_arn}.
     */
    readonly targetArn: string;
}
export interface LambdaFunctionEnvironment {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#variables LambdaFunction#variables}.
     */
    readonly variables?: {
        [key: string]: string;
    };
}
export interface LambdaFunctionFileSystemConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#arn LambdaFunction#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#local_mount_path LambdaFunction#local_mount_path}.
     */
    readonly localMountPath: string;
}
export interface LambdaFunctionImageConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#command LambdaFunction#command}.
     */
    readonly command?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#entry_point LambdaFunction#entry_point}.
     */
    readonly entryPoint?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#working_directory LambdaFunction#working_directory}.
     */
    readonly workingDirectory?: string;
}
export interface LambdaFunctionTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#create LambdaFunction#create}.
     */
    readonly create?: string;
}
export interface LambdaFunctionTracingConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#mode LambdaFunction#mode}.
     */
    readonly mode: string;
}
export interface LambdaFunctionVpcConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#security_group_ids LambdaFunction#security_group_ids}.
     */
    readonly securityGroupIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#subnet_ids LambdaFunction#subnet_ids}.
     */
    readonly subnetIds: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html aws_lambda_function}.
 */
export declare class LambdaFunction extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html aws_lambda_function} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LambdaFunctionConfig);
    get arn(): string;
    private _codeSigningConfigArn?;
    get codeSigningConfigArn(): string;
    set codeSigningConfigArn(value: string);
    resetCodeSigningConfigArn(): void;
    get codeSigningConfigArnInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _filename?;
    get filename(): string;
    set filename(value: string);
    resetFilename(): void;
    get filenameInput(): string | undefined;
    private _functionName;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    private _handler?;
    get handler(): string;
    set handler(value: string);
    resetHandler(): void;
    get handlerInput(): string | undefined;
    get id(): string;
    private _imageUri?;
    get imageUri(): string;
    set imageUri(value: string);
    resetImageUri(): void;
    get imageUriInput(): string | undefined;
    get invokeArn(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    get lastModified(): string;
    private _layers?;
    get layers(): string[];
    set layers(value: string[]);
    resetLayers(): void;
    get layersInput(): string[] | undefined;
    private _memorySize?;
    get memorySize(): number;
    set memorySize(value: number);
    resetMemorySize(): void;
    get memorySizeInput(): number | undefined;
    private _packageType?;
    get packageType(): string;
    set packageType(value: string);
    resetPackageType(): void;
    get packageTypeInput(): string | undefined;
    private _publish?;
    get publish(): boolean;
    set publish(value: boolean);
    resetPublish(): void;
    get publishInput(): boolean | undefined;
    get qualifiedArn(): string;
    private _reservedConcurrentExecutions?;
    get reservedConcurrentExecutions(): number;
    set reservedConcurrentExecutions(value: number);
    resetReservedConcurrentExecutions(): void;
    get reservedConcurrentExecutionsInput(): number | undefined;
    private _role;
    get role(): string;
    set role(value: string);
    get roleInput(): string;
    private _runtime?;
    get runtime(): string;
    set runtime(value: string);
    resetRuntime(): void;
    get runtimeInput(): string | undefined;
    private _s3Bucket?;
    get s3Bucket(): string;
    set s3Bucket(value: string);
    resetS3Bucket(): void;
    get s3BucketInput(): string | undefined;
    private _s3Key?;
    get s3Key(): string;
    set s3Key(value: string);
    resetS3Key(): void;
    get s3KeyInput(): string | undefined;
    private _s3ObjectVersion?;
    get s3ObjectVersion(): string;
    set s3ObjectVersion(value: string);
    resetS3ObjectVersion(): void;
    get s3ObjectVersionInput(): string | undefined;
    get signingJobArn(): string;
    get signingProfileVersionArn(): string;
    private _sourceCodeHash?;
    get sourceCodeHash(): string;
    set sourceCodeHash(value: string);
    resetSourceCodeHash(): void;
    get sourceCodeHashInput(): string | undefined;
    get sourceCodeSize(): number;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number | undefined;
    get version(): string;
    private _deadLetterConfig?;
    get deadLetterConfig(): LambdaFunctionDeadLetterConfig[];
    set deadLetterConfig(value: LambdaFunctionDeadLetterConfig[]);
    resetDeadLetterConfig(): void;
    get deadLetterConfigInput(): LambdaFunctionDeadLetterConfig[] | undefined;
    private _environment?;
    get environment(): LambdaFunctionEnvironment[];
    set environment(value: LambdaFunctionEnvironment[]);
    resetEnvironment(): void;
    get environmentInput(): LambdaFunctionEnvironment[] | undefined;
    private _fileSystemConfig?;
    get fileSystemConfig(): LambdaFunctionFileSystemConfig[];
    set fileSystemConfig(value: LambdaFunctionFileSystemConfig[]);
    resetFileSystemConfig(): void;
    get fileSystemConfigInput(): LambdaFunctionFileSystemConfig[] | undefined;
    private _imageConfig?;
    get imageConfig(): LambdaFunctionImageConfig[];
    set imageConfig(value: LambdaFunctionImageConfig[]);
    resetImageConfig(): void;
    get imageConfigInput(): LambdaFunctionImageConfig[] | undefined;
    private _timeouts?;
    get timeouts(): LambdaFunctionTimeouts;
    set timeouts(value: LambdaFunctionTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): LambdaFunctionTimeouts | undefined;
    private _tracingConfig?;
    get tracingConfig(): LambdaFunctionTracingConfig[];
    set tracingConfig(value: LambdaFunctionTracingConfig[]);
    resetTracingConfig(): void;
    get tracingConfigInput(): LambdaFunctionTracingConfig[] | undefined;
    private _vpcConfig?;
    get vpcConfig(): LambdaFunctionVpcConfig[];
    set vpcConfig(value: LambdaFunctionVpcConfig[]);
    resetVpcConfig(): void;
    get vpcConfigInput(): LambdaFunctionVpcConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
