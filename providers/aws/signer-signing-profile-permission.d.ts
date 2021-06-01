import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SignerSigningProfilePermissionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html#action SignerSigningProfilePermission#action}.
     */
    readonly action: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html#principal SignerSigningProfilePermission#principal}.
     */
    readonly principal: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html#profile_name SignerSigningProfilePermission#profile_name}.
     */
    readonly profileName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html#profile_version SignerSigningProfilePermission#profile_version}.
     */
    readonly profileVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html#statement_id SignerSigningProfilePermission#statement_id}.
     */
    readonly statementId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html#statement_id_prefix SignerSigningProfilePermission#statement_id_prefix}.
     */
    readonly statementIdPrefix?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html aws_signer_signing_profile_permission}.
 */
export declare class SignerSigningProfilePermission extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile_permission.html aws_signer_signing_profile_permission} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SignerSigningProfilePermissionConfig);
    private _action;
    get action(): string;
    set action(value: string);
    get actionInput(): string;
    get id(): string;
    private _principal;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string;
    private _profileName;
    get profileName(): string;
    set profileName(value: string);
    get profileNameInput(): string;
    private _profileVersion?;
    get profileVersion(): string;
    set profileVersion(value: string);
    resetProfileVersion(): void;
    get profileVersionInput(): string | undefined;
    private _statementId?;
    get statementId(): string;
    set statementId(value: string);
    resetStatementId(): void;
    get statementIdInput(): string | undefined;
    private _statementIdPrefix?;
    get statementIdPrefix(): string;
    set statementIdPrefix(value: string);
    resetStatementIdPrefix(): void;
    get statementIdPrefixInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
