import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlacierVaultLockConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html#complete_lock GlacierVaultLock#complete_lock}.
     */
    readonly completeLock: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}.
     */
    readonly ignoreDeletionError?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html#policy GlacierVaultLock#policy}.
     */
    readonly policy: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html#vault_name GlacierVaultLock#vault_name}.
     */
    readonly vaultName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html aws_glacier_vault_lock}.
 */
export declare class GlacierVaultLock extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html aws_glacier_vault_lock} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: GlacierVaultLockConfig);
    private _completeLock;
    get completeLock(): boolean;
    set completeLock(value: boolean);
    get completeLockInput(): boolean;
    get id(): string;
    private _ignoreDeletionError?;
    get ignoreDeletionError(): boolean;
    set ignoreDeletionError(value: boolean);
    resetIgnoreDeletionError(): void;
    get ignoreDeletionErrorInput(): boolean | undefined;
    private _policy;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    private _vaultName;
    get vaultName(): string;
    set vaultName(value: string);
    get vaultNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
