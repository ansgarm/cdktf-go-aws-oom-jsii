import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCognitoUserPoolsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pools.html#name DataAwsCognitoUserPools#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pools.html aws_cognito_user_pools}.
 */
export declare class DataAwsCognitoUserPools extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cognito_user_pools.html aws_cognito_user_pools} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsCognitoUserPoolsConfig);
    get arns(): string[];
    get id(): string;
    get ids(): string[];
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
