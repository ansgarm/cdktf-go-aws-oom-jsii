import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBillingServiceAccountConfig extends cdktf.TerraformMetaArguments {
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/billing_service_account.html aws_billing_service_account}.
 */
export declare class DataAwsBillingServiceAccount extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/billing_service_account.html aws_billing_service_account} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsBillingServiceAccountConfig);
    get arn(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
