import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#cidr_block DataAwsVpc#cidr_block}.
     */
    readonly cidrBlock?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#default DataAwsVpc#default}.
     */
    readonly default?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#dhcp_options_id DataAwsVpc#dhcp_options_id}.
     */
    readonly dhcpOptionsId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#state DataAwsVpc#state}.
     */
    readonly state?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#tags DataAwsVpc#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#filter DataAwsVpc#filter}
     */
    readonly filter?: DataAwsVpcFilter[];
}
export declare class DataAwsVpcCidrBlockAssociations extends cdktf.ComplexComputedList {
    get associationId(): string;
    get cidrBlock(): string;
    get state(): string;
}
export interface DataAwsVpcFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#name DataAwsVpc#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc.html#values DataAwsVpc#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc.html aws_vpc}.
 */
export declare class DataAwsVpc extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc.html aws_vpc} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsVpcConfig);
    get arn(): string;
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    cidrBlockAssociations(index: string): DataAwsVpcCidrBlockAssociations;
    private _default?;
    get default(): boolean;
    set default(value: boolean);
    resetDefault(): void;
    get defaultInput(): boolean | undefined;
    private _dhcpOptionsId?;
    get dhcpOptionsId(): string;
    set dhcpOptionsId(value: string);
    resetDhcpOptionsId(): void;
    get dhcpOptionsIdInput(): string | undefined;
    get enableDnsHostnames(): boolean;
    get enableDnsSupport(): boolean;
    get id(): string;
    get instanceTenancy(): string;
    get ipv6AssociationId(): string;
    get ipv6CidrBlock(): string;
    get mainRouteTableId(): string;
    get ownerId(): string;
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
    private _filter?;
    get filter(): DataAwsVpcFilter[];
    set filter(value: DataAwsVpcFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsVpcFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
