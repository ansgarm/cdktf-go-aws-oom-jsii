import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsWafregionalWebAclConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafregional_web_acl.html#name DataAwsWafregionalWebAcl#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafregional_web_acl.html aws_wafregional_web_acl}.
 */
export declare class DataAwsWafregionalWebAcl extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafregional_web_acl.html aws_wafregional_web_acl} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsWafregionalWebAclConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
