import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLambdaAliasConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_alias.html#function_name DataAwsLambdaAlias#function_name}.
     */
    readonly functionName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_alias.html#name DataAwsLambdaAlias#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_alias.html aws_lambda_alias}.
 */
export declare class DataAwsLambdaAlias extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_alias.html aws_lambda_alias} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsLambdaAliasConfig);
    get arn(): string;
    get description(): string;
    private _functionName;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string;
    get functionVersion(): string;
    get id(): string;
    get invokeArn(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
