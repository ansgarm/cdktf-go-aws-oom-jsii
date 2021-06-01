import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsWafv2IpSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_ip_set.html#name DataAwsWafv2IpSet#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_ip_set.html#scope DataAwsWafv2IpSet#scope}.
     */
    readonly scope: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafv2_ip_set.html aws_wafv2_ip_set}.
 */
export declare class DataAwsWafv2IpSet extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafv2_ip_set.html aws_wafv2_ip_set} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsWafv2IpSetConfig);
    get addresses(): string[];
    get arn(): string;
    get description(): string;
    get id(): string;
    get ipAddressVersion(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _scope;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
