import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#customer_master_key_spec KmsKey#customer_master_key_spec}.
     */
    readonly customerMasterKeySpec?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#deletion_window_in_days KmsKey#deletion_window_in_days}.
     */
    readonly deletionWindowInDays?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#description KmsKey#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#enable_key_rotation KmsKey#enable_key_rotation}.
     */
    readonly enableKeyRotation?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#is_enabled KmsKey#is_enabled}.
     */
    readonly isEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#key_usage KmsKey#key_usage}.
     */
    readonly keyUsage?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#policy KmsKey#policy}.
     */
    readonly policy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#tags KmsKey#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html#tags_all KmsKey#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html aws_kms_key}.
 */
export declare class KmsKey extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_key.html aws_kms_key} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: KmsKeyConfig);
    get arn(): string;
    private _customerMasterKeySpec?;
    get customerMasterKeySpec(): string;
    set customerMasterKeySpec(value: string);
    resetCustomerMasterKeySpec(): void;
    get customerMasterKeySpecInput(): string | undefined;
    private _deletionWindowInDays?;
    get deletionWindowInDays(): number;
    set deletionWindowInDays(value: number);
    resetDeletionWindowInDays(): void;
    get deletionWindowInDaysInput(): number | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enableKeyRotation?;
    get enableKeyRotation(): boolean;
    set enableKeyRotation(value: boolean);
    resetEnableKeyRotation(): void;
    get enableKeyRotationInput(): boolean | undefined;
    get id(): string;
    private _isEnabled?;
    get isEnabled(): boolean;
    set isEnabled(value: boolean);
    resetIsEnabled(): void;
    get isEnabledInput(): boolean | undefined;
    get keyId(): string;
    private _keyUsage?;
    get keyUsage(): string;
    set keyUsage(value: string);
    resetKeyUsage(): void;
    get keyUsageInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
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
