import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayAccountConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html#cloudwatch_role_arn ApiGatewayAccount#cloudwatch_role_arn}.
     */
    readonly cloudwatchRoleArn?: string;
}
export declare class ApiGatewayAccountThrottleSettings extends cdktf.ComplexComputedList {
    get burstLimit(): number;
    get rateLimit(): number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html aws_api_gateway_account}.
 */
export declare class ApiGatewayAccount extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html aws_api_gateway_account} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: ApiGatewayAccountConfig);
    private _cloudwatchRoleArn?;
    get cloudwatchRoleArn(): string;
    set cloudwatchRoleArn(value: string);
    resetCloudwatchRoleArn(): void;
    get cloudwatchRoleArnInput(): string | undefined;
    get id(): string;
    throttleSettings(index: string): ApiGatewayAccountThrottleSettings;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
