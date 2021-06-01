import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RamResourceShareConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#allow_external_principals RamResourceShare#allow_external_principals}.
     */
    readonly allowExternalPrincipals?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#name RamResourceShare#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#tags RamResourceShare#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#tags_all RamResourceShare#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#timeouts RamResourceShare#timeouts}
     */
    readonly timeouts?: RamResourceShareTimeouts;
}
export interface RamResourceShareTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#create RamResourceShare#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html#delete RamResourceShare#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html aws_ram_resource_share}.
 */
export declare class RamResourceShare extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html aws_ram_resource_share} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: RamResourceShareConfig);
    private _allowExternalPrincipals?;
    get allowExternalPrincipals(): boolean;
    set allowExternalPrincipals(value: boolean);
    resetAllowExternalPrincipals(): void;
    get allowExternalPrincipalsInput(): boolean | undefined;
    get arn(): string;
    get id(): string;
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
    private _timeouts?;
    get timeouts(): RamResourceShareTimeouts;
    set timeouts(value: RamResourceShareTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): RamResourceShareTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
