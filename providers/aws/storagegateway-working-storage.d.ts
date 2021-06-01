import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewayWorkingStorageConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html#disk_id StoragegatewayWorkingStorage#disk_id}.
     */
    readonly diskId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html#gateway_arn StoragegatewayWorkingStorage#gateway_arn}.
     */
    readonly gatewayArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html aws_storagegateway_working_storage}.
 */
export declare class StoragegatewayWorkingStorage extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_working_storage.html aws_storagegateway_working_storage} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: StoragegatewayWorkingStorageConfig);
    private _diskId;
    get diskId(): string;
    set diskId(value: string);
    get diskIdInput(): string;
    private _gatewayArn;
    get gatewayArn(): string;
    set gatewayArn(value: string);
    get gatewayArnInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
