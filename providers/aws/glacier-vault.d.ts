import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlacierVaultConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#access_policy GlacierVault#access_policy}.
     */
    readonly accessPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#name GlacierVault#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#tags GlacierVault#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#tags_all GlacierVault#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * notification block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#notification GlacierVault#notification}
     */
    readonly notification?: GlacierVaultNotification[];
}
export interface GlacierVaultNotification {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#events GlacierVault#events}.
     */
    readonly events: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#sns_topic GlacierVault#sns_topic}.
     */
    readonly snsTopic: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html aws_glacier_vault}.
 */
export declare class GlacierVault extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html aws_glacier_vault} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlacierVaultConfig);
    private _accessPolicy?;
    get accessPolicy(): string;
    set accessPolicy(value: string);
    resetAccessPolicy(): void;
    get accessPolicyInput(): string | undefined;
    get arn(): string;
    get id(): string;
    get location(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _notification?;
    get notification(): GlacierVaultNotification[];
    set notification(value: GlacierVaultNotification[]);
    resetNotification(): void;
    get notificationInput(): GlacierVaultNotification[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
