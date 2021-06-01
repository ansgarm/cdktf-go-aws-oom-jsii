import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubStandardsSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_subscription.html#standards_arn SecurityhubStandardsSubscription#standards_arn}.
     */
    readonly standardsArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_subscription.html aws_securityhub_standards_subscription}.
 */
export declare class SecurityhubStandardsSubscription extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_subscription.html aws_securityhub_standards_subscription} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SecurityhubStandardsSubscriptionConfig);
    get id(): string;
    private _standardsArn;
    get standardsArn(): string;
    set standardsArn(value: string);
    get standardsArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
