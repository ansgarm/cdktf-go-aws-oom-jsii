import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotRoleAliasConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html#alias IotRoleAlias#alias}.
     */
    readonly alias: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html#credential_duration IotRoleAlias#credential_duration}.
     */
    readonly credentialDuration?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html#role_arn IotRoleAlias#role_arn}.
     */
    readonly roleArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html aws_iot_role_alias}.
 */
export declare class IotRoleAlias extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html aws_iot_role_alias} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IotRoleAliasConfig);
    private _alias;
    get alias(): string;
    set alias(value: string);
    get aliasInput(): string;
    get arn(): string;
    private _credentialDuration?;
    get credentialDuration(): number;
    set credentialDuration(value: number);
    resetCredentialDuration(): void;
    get credentialDurationInput(): number | undefined;
    get id(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
