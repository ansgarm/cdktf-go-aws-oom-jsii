import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2IpSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html#addresses Wafv2IpSet#addresses}.
     */
    readonly addresses?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html#description Wafv2IpSet#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html#ip_address_version Wafv2IpSet#ip_address_version}.
     */
    readonly ipAddressVersion: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html#name Wafv2IpSet#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html#scope Wafv2IpSet#scope}.
     */
    readonly scope: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html#tags Wafv2IpSet#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html#tags_all Wafv2IpSet#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html aws_wafv2_ip_set}.
 */
export declare class Wafv2IpSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html aws_wafv2_ip_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Wafv2IpSetConfig);
    private _addresses?;
    get addresses(): string[];
    set addresses(value: string[]);
    resetAddresses(): void;
    get addressesInput(): string[] | undefined;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _ipAddressVersion;
    get ipAddressVersion(): string;
    set ipAddressVersion(value: string);
    get ipAddressVersionInput(): string;
    get lockToken(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _scope;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
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
