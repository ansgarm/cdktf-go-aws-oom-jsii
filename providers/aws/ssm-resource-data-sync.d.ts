import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmResourceDataSyncConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#name SsmResourceDataSync#name}.
     */
    readonly name: string;
    /**
     * s3_destination block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#s3_destination SsmResourceDataSync#s3_destination}
     */
    readonly s3Destination: SsmResourceDataSyncS3Destination[];
}
export interface SsmResourceDataSyncS3Destination {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#bucket_name SsmResourceDataSync#bucket_name}.
     */
    readonly bucketName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#kms_key_arn SsmResourceDataSync#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#prefix SsmResourceDataSync#prefix}.
     */
    readonly prefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#region SsmResourceDataSync#region}.
     */
    readonly region: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html#sync_format SsmResourceDataSync#sync_format}.
     */
    readonly syncFormat?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html aws_ssm_resource_data_sync}.
 */
export declare class SsmResourceDataSync extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html aws_ssm_resource_data_sync} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SsmResourceDataSyncConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _s3Destination;
    get s3Destination(): SsmResourceDataSyncS3Destination[];
    set s3Destination(value: SsmResourceDataSyncS3Destination[]);
    get s3DestinationInput(): SsmResourceDataSyncS3Destination[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
