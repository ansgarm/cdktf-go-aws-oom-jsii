import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRamResourceShareConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#name DataAwsRamResourceShare#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#resource_owner DataAwsRamResourceShare#resource_owner}.
     */
    readonly resourceOwner: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#tags DataAwsRamResourceShare#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#filter DataAwsRamResourceShare#filter}
     */
    readonly filter?: DataAwsRamResourceShareFilter[];
}
export interface DataAwsRamResourceShareFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#name DataAwsRamResourceShare#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html#values DataAwsRamResourceShare#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html aws_ram_resource_share}.
 */
export declare class DataAwsRamResourceShare extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ram_resource_share.html aws_ram_resource_share} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsRamResourceShareConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get owningAccountId(): string;
    private _resourceOwner;
    get resourceOwner(): string;
    set resourceOwner(value: string);
    get resourceOwnerInput(): string;
    get status(): string;
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
    private _filter?;
    get filter(): DataAwsRamResourceShareFilter[];
    set filter(value: DataAwsRamResourceShareFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsRamResourceShareFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
