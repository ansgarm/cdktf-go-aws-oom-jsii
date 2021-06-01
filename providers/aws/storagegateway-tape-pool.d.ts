import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewayTapePoolConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#pool_name StoragegatewayTapePool#pool_name}.
     */
    readonly poolName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#retention_lock_time_in_days StoragegatewayTapePool#retention_lock_time_in_days}.
     */
    readonly retentionLockTimeInDays?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#retention_lock_type StoragegatewayTapePool#retention_lock_type}.
     */
    readonly retentionLockType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#storage_class StoragegatewayTapePool#storage_class}.
     */
    readonly storageClass: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#tags StoragegatewayTapePool#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html#tags_all StoragegatewayTapePool#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html aws_storagegateway_tape_pool}.
 */
export declare class StoragegatewayTapePool extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_tape_pool.html aws_storagegateway_tape_pool} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: StoragegatewayTapePoolConfig);
    get arn(): string;
    get id(): string;
    private _poolName;
    get poolName(): string;
    set poolName(value: string);
    get poolNameInput(): string;
    private _retentionLockTimeInDays?;
    get retentionLockTimeInDays(): number;
    set retentionLockTimeInDays(value: number);
    resetRetentionLockTimeInDays(): void;
    get retentionLockTimeInDaysInput(): number | undefined;
    private _retentionLockType?;
    get retentionLockType(): string;
    set retentionLockType(value: string);
    resetRetentionLockType(): void;
    get retentionLockTypeInput(): string | undefined;
    private _storageClass;
    get storageClass(): string;
    set storageClass(value: string);
    get storageClassInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
