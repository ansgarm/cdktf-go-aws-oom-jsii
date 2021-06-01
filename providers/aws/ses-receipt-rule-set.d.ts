import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesReceiptRuleSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule_set.html#rule_set_name SesReceiptRuleSet#rule_set_name}.
     */
    readonly ruleSetName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule_set.html aws_ses_receipt_rule_set}.
 */
export declare class SesReceiptRuleSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_rule_set.html aws_ses_receipt_rule_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SesReceiptRuleSetConfig);
    get arn(): string;
    get id(): string;
    private _ruleSetName;
    get ruleSetName(): string;
    set ruleSetName(value: string);
    get ruleSetNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
