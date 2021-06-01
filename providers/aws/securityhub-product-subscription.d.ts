import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubProductSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_product_subscription.html#product_arn SecurityhubProductSubscription#product_arn}.
     */
    readonly productArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_product_subscription.html aws_securityhub_product_subscription}.
 */
export declare class SecurityhubProductSubscription extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_product_subscription.html aws_securityhub_product_subscription} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SecurityhubProductSubscriptionConfig);
    get arn(): string;
    get id(): string;
    private _productArn;
    get productArn(): string;
    set productArn(value: string);
    get productArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
