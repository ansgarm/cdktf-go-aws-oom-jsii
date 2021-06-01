import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AthenaWorkgroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#description AthenaWorkgroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#force_destroy AthenaWorkgroup#force_destroy}.
     */
    readonly forceDestroy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#name AthenaWorkgroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#state AthenaWorkgroup#state}.
     */
    readonly state?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#tags AthenaWorkgroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#tags_all AthenaWorkgroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#configuration AthenaWorkgroup#configuration}
     */
    readonly configuration?: AthenaWorkgroupConfiguration[];
}
export interface AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#encryption_option AthenaWorkgroup#encryption_option}.
     */
    readonly encryptionOption?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#kms_key_arn AthenaWorkgroup#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
}
export interface AthenaWorkgroupConfigurationResultConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#output_location AthenaWorkgroup#output_location}.
     */
    readonly outputLocation?: string;
    /**
     * encryption_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#encryption_configuration AthenaWorkgroup#encryption_configuration}
     */
    readonly encryptionConfiguration?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration[];
}
export interface AthenaWorkgroupConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}.
     */
    readonly bytesScannedCutoffPerQuery?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}.
     */
    readonly enforceWorkgroupConfiguration?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}.
     */
    readonly publishCloudwatchMetricsEnabled?: boolean;
    /**
     * result_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#result_configuration AthenaWorkgroup#result_configuration}
     */
    readonly resultConfiguration?: AthenaWorkgroupConfigurationResultConfiguration[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html aws_athena_workgroup}.
 */
export declare class AthenaWorkgroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html aws_athena_workgroup} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AthenaWorkgroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean;
    set forceDestroy(value: boolean);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
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
    private _configuration?;
    get configuration(): AthenaWorkgroupConfiguration[];
    set configuration(value: AthenaWorkgroupConfiguration[]);
    resetConfiguration(): void;
    get configurationInput(): AthenaWorkgroupConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
