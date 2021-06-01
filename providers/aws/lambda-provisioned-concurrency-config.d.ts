import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaProvisionedConcurrencyConfigConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#function_name LambdaProvisionedConcurrencyConfig#function_name}.
     */
    readonly functionName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#provisioned_concurrent_executions LambdaProvisionedConcurrencyConfig#provisioned_concurrent_executions}.
     */
    readonly provisionedConcurrentExecutions: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#qualifier LambdaProvisionedConcurrencyConfig#qualifier}.
     */
    readonly qualifier: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#timeouts LambdaProvisionedConcurrencyConfig#timeouts}
     */
    readonly timeouts?: LambdaProvisionedConcurrencyConfigTimeouts;
}
export interface LambdaProvisionedConcurrencyConfigTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#create LambdaProvisionedConcurrencyConfig#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#update LambdaProvisionedConcurrencyConfig#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html aws_lambda_provisioned_concurrency_config}.
 */
export declare class LambdaProvisionedConcurrencyConfig extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html aws_lambda_provisioned_concurrency_config} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LambdaProvisionedConcurrencyConfigConfig);
    private _functionName;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    get id(): string;
    private _provisionedConcurrentExecutions;
    get provisionedConcurrentExecutions(): number;
    set provisionedConcurrentExecutions(value: number);
    get provisionedConcurrentExecutionsInput(): number;
    private _qualifier;
    get qualifier(): string;
    set qualifier(value: string);
    get qualifierInput(): string;
    private _timeouts?;
    get timeouts(): LambdaProvisionedConcurrencyConfigTimeouts;
    set timeouts(value: LambdaProvisionedConcurrencyConfigTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): LambdaProvisionedConcurrencyConfigTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
