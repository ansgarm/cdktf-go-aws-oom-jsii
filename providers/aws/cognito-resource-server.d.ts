import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoResourceServerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#identifier CognitoResourceServer#identifier}.
     */
    readonly identifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#name CognitoResourceServer#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#user_pool_id CognitoResourceServer#user_pool_id}.
     */
    readonly userPoolId: string;
    /**
     * scope block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#scope CognitoResourceServer#scope}
     */
    readonly scope?: CognitoResourceServerScope[];
}
export interface CognitoResourceServerScope {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#scope_description CognitoResourceServer#scope_description}.
     */
    readonly scopeDescription: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#scope_name CognitoResourceServer#scope_name}.
     */
    readonly scopeName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html aws_cognito_resource_server}.
 */
export declare class CognitoResourceServer extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html aws_cognito_resource_server} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CognitoResourceServerConfig);
    get id(): string;
    private _identifier;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get scopeIdentifiers(): string[];
    private _userPoolId;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string;
    private _scope?;
    get scope(): CognitoResourceServerScope[];
    set scope(value: CognitoResourceServerScope[]);
    resetScope(): void;
    get scopeInput(): CognitoResourceServerScope[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
