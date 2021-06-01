import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodebuildSourceCredentialConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html#auth_type CodebuildSourceCredential#auth_type}.
     */
    readonly authType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html#server_type CodebuildSourceCredential#server_type}.
     */
    readonly serverType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html#token CodebuildSourceCredential#token}.
     */
    readonly token: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html#user_name CodebuildSourceCredential#user_name}.
     */
    readonly userName?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html aws_codebuild_source_credential}.
 */
export declare class CodebuildSourceCredential extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html aws_codebuild_source_credential} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodebuildSourceCredentialConfig);
    get arn(): string;
    private _authType;
    get authType(): string;
    set authType(value: string);
    get authTypeInput(): string;
    get id(): string;
    private _serverType;
    get serverType(): string;
    set serverType(value: string);
    get serverTypeInput(): string;
    private _token;
    get token(): string;
    set token(value: string);
    get tokenInput(): string;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    resetUserName(): void;
    get userNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
