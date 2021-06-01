import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBackupVaultConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html#name DataAwsBackupVault#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html#tags DataAwsBackupVault#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html aws_backup_vault}.
 */
export declare class DataAwsBackupVault extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/backup_vault.html aws_backup_vault} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsBackupVaultConfig);
    get arn(): string;
    get id(): string;
    get kmsKeyArn(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get recoveryPoints(): number;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
