import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesReceiptFilterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html#cidr SesReceiptFilter#cidr}.
     */
    readonly cidr: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html#name SesReceiptFilter#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html#policy SesReceiptFilter#policy}.
     */
    readonly policy: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html aws_ses_receipt_filter}.
 */
export declare class SesReceiptFilter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_receipt_filter.html aws_ses_receipt_filter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SesReceiptFilterConfig);
    get arn(): string;
    private _cidr;
    get cidr(): string;
    set cidr(value: string);
    get cidrInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _policy;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
