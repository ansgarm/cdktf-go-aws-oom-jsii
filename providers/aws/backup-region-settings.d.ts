import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupRegionSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html#resource_type_opt_in_preference BackupRegionSettings#resource_type_opt_in_preference}.
     */
    readonly resourceTypeOptInPreference: {
        [key: string]: boolean;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html aws_backup_region_settings}.
 */
export declare class BackupRegionSettings extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_region_settings.html aws_backup_region_settings} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: BackupRegionSettingsConfig);
    get id(): string;
    private _resourceTypeOptInPreference;
    get resourceTypeOptInPreference(): {
        [key: string]: boolean;
    };
    set resourceTypeOptInPreference(value: {
        [key: string]: boolean;
    });
    get resourceTypeOptInPreferenceInput(): {
        [key: string]: boolean;
    };
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
