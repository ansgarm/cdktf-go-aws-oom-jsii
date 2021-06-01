import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings.html#global_settings BackupGlobalSettings#global_settings}.
     */
    readonly globalSettings: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings.html aws_backup_global_settings}.
 */
export declare class BackupGlobalSettings extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_global_settings.html aws_backup_global_settings} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: BackupGlobalSettingsConfig);
    private _globalSettings;
    get globalSettings(): {
        [key: string]: string;
    };
    set globalSettings(value: {
        [key: string]: string;
    });
    get globalSettingsInput(): {
        [key: string]: string;
    };
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
