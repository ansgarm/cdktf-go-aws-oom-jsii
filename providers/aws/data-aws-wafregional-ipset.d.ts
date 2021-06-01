import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsWafregionalIpsetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafregional_ipset.html#name DataAwsWafregionalIpset#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafregional_ipset.html aws_wafregional_ipset}.
 */
export declare class DataAwsWafregionalIpset extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafregional_ipset.html aws_wafregional_ipset} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsWafregionalIpsetConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
