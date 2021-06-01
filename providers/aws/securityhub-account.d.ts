import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubAccountConfig extends cdktf.TerraformMetaArguments {
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_account.html aws_securityhub_account}.
 */
export declare class SecurityhubAccount extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_account.html aws_securityhub_account} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: SecurityhubAccountConfig);
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
