import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KmsExternalKeyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#deletion_window_in_days KmsExternalKey#deletion_window_in_days}.
     */
    readonly deletionWindowInDays?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#description KmsExternalKey#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#enabled KmsExternalKey#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#key_material_base64 KmsExternalKey#key_material_base64}.
     */
    readonly keyMaterialBase64?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#policy KmsExternalKey#policy}.
     */
    readonly policy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#tags KmsExternalKey#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#tags_all KmsExternalKey#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html#valid_to KmsExternalKey#valid_to}.
     */
    readonly validTo?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html aws_kms_external_key}.
 */
export declare class KmsExternalKey extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_external_key.html aws_kms_external_key} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: KmsExternalKeyConfig);
    get arn(): string;
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
    private _enabled?;
    get enabled(): boolean;
    set enabled(value: boolean);
    resetEnabled(): void;
    get enabledInput(): boolean | undefined;
    get expirationModel(): string;
    get id(): string;
    private _keyMaterialBase64?;
    get keyMaterialBase64(): string;
    set keyMaterialBase64(value: string);
    resetKeyMaterialBase64(): void;
    get keyMaterialBase64Input(): string | undefined;
    get keyState(): string;
    get keyUsage(): string;
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
    private _validTo?;
    get validTo(): string;
    set validTo(value: string);
    resetValidTo(): void;
    get validToInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
