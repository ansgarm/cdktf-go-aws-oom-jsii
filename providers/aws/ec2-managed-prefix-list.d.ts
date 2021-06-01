import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2ManagedPrefixListConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#address_family Ec2ManagedPrefixList#address_family}.
     */
    readonly addressFamily: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#max_entries Ec2ManagedPrefixList#max_entries}.
     */
    readonly maxEntries: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#name Ec2ManagedPrefixList#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#tags Ec2ManagedPrefixList#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#tags_all Ec2ManagedPrefixList#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * entry block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#entry Ec2ManagedPrefixList#entry}
     */
    readonly entry?: Ec2ManagedPrefixListEntry[];
}
export interface Ec2ManagedPrefixListEntry {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#cidr Ec2ManagedPrefixList#cidr}.
     */
    readonly cidr: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html#description Ec2ManagedPrefixList#description}.
     */
    readonly description?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list}.
 */
export declare class Ec2ManagedPrefixList extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_managed_prefix_list.html aws_ec2_managed_prefix_list} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Ec2ManagedPrefixListConfig);
    private _addressFamily;
    get addressFamily(): string;
    set addressFamily(value: string);
    get addressFamilyInput(): string;
    get arn(): string;
    get id(): string;
    private _maxEntries;
    get maxEntries(): number;
    set maxEntries(value: number);
    get maxEntriesInput(): number;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ownerId(): string;
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
    get version(): number;
    private _entry?;
    get entry(): Ec2ManagedPrefixListEntry[];
    set entry(value: Ec2ManagedPrefixListEntry[]);
    resetEntry(): void;
    get entryInput(): Ec2ManagedPrefixListEntry[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
