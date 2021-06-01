import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLambdaInvocationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html#function_name DataAwsLambdaInvocation#function_name}.
     */
    readonly functionName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html#input DataAwsLambdaInvocation#input}.
     */
    readonly input: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html#qualifier DataAwsLambdaInvocation#qualifier}.
     */
    readonly qualifier?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html aws_lambda_invocation}.
 */
export declare class DataAwsLambdaInvocation extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html aws_lambda_invocation} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsLambdaInvocationConfig);
    private _functionName;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    get id(): string;
    private _input;
    get input(): string;
    set input(value: string);
    get inputInput(): string;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string | undefined;
    get result(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
