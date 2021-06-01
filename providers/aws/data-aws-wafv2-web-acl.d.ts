import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsWafv2WebAclConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_web_acl.html#name DataAwsWafv2WebAcl#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafv2_web_acl.html#scope DataAwsWafv2WebAcl#scope}.
     */
    readonly scope: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafv2_web_acl.html aws_wafv2_web_acl}.
 */
export declare class DataAwsWafv2WebAcl extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafv2_web_acl.html aws_wafv2_web_acl} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsWafv2WebAclConfig);
    get arn(): string;
    get description(): string;
    get id(): string;
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
