import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueDevEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#arguments GlueDevEndpoint#arguments}.
     */
    readonly arguments?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#extra_jars_s3_path GlueDevEndpoint#extra_jars_s3_path}.
     */
    readonly extraJarsS3Path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#extra_python_libs_s3_path GlueDevEndpoint#extra_python_libs_s3_path}.
     */
    readonly extraPythonLibsS3Path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#glue_version GlueDevEndpoint#glue_version}.
     */
    readonly glueVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#name GlueDevEndpoint#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#number_of_nodes GlueDevEndpoint#number_of_nodes}.
     */
    readonly numberOfNodes?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#number_of_workers GlueDevEndpoint#number_of_workers}.
     */
    readonly numberOfWorkers?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#public_key GlueDevEndpoint#public_key}.
     */
    readonly publicKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#public_keys GlueDevEndpoint#public_keys}.
     */
    readonly publicKeys?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#role_arn GlueDevEndpoint#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#security_configuration GlueDevEndpoint#security_configuration}.
     */
    readonly securityConfiguration?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#security_group_ids GlueDevEndpoint#security_group_ids}.
     */
    readonly securityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#subnet_id GlueDevEndpoint#subnet_id}.
     */
    readonly subnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#tags GlueDevEndpoint#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#tags_all GlueDevEndpoint#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html#worker_type GlueDevEndpoint#worker_type}.
     */
    readonly workerType?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html aws_glue_dev_endpoint}.
 */
export declare class GlueDevEndpoint extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint.html aws_glue_dev_endpoint} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlueDevEndpointConfig);
    private _arguments?;
    get arguments(): {
        [key: string]: string;
    };
    set arguments(value: {
        [key: string]: string;
    });
    resetArguments(): void;
    get argumentsInput(): {
        [key: string]: string;
    } | undefined;
    get arn(): string;
    get availabilityZone(): string;
    private _extraJarsS3Path?;
    get extraJarsS3Path(): string;
    set extraJarsS3Path(value: string);
    resetExtraJarsS3Path(): void;
    get extraJarsS3PathInput(): string | undefined;
    private _extraPythonLibsS3Path?;
    get extraPythonLibsS3Path(): string;
    set extraPythonLibsS3Path(value: string);
    resetExtraPythonLibsS3Path(): void;
    get extraPythonLibsS3PathInput(): string | undefined;
    get failureReason(): string;
    private _glueVersion?;
    get glueVersion(): string;
    set glueVersion(value: string);
    resetGlueVersion(): void;
    get glueVersionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _numberOfNodes?;
    get numberOfNodes(): number;
    set numberOfNodes(value: number);
    resetNumberOfNodes(): void;
    get numberOfNodesInput(): number | undefined;
    private _numberOfWorkers?;
    get numberOfWorkers(): number;
    set numberOfWorkers(value: number);
    resetNumberOfWorkers(): void;
    get numberOfWorkersInput(): number | undefined;
    get privateAddress(): string;
    get publicAddress(): string;
    private _publicKey?;
    get publicKey(): string;
    set publicKey(value: string);
    resetPublicKey(): void;
    get publicKeyInput(): string | undefined;
    private _publicKeys?;
    get publicKeys(): string[];
    set publicKeys(value: string[]);
    resetPublicKeys(): void;
    get publicKeysInput(): string[] | undefined;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _securityConfiguration?;
    get securityConfiguration(): string;
    set securityConfiguration(value: string);
    resetSecurityConfiguration(): void;
    get securityConfigurationInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    get status(): string;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
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
    get vpcId(): string;
    private _workerType?;
    get workerType(): string;
    set workerType(value: string);
    resetWorkerType(): void;
    get workerTypeInput(): string | undefined;
    get yarnEndpointAddress(): string;
    get zeppelinRemoteSparkInterpreterPort(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
