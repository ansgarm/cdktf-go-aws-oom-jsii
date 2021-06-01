import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupPlanConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#name BackupPlan#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#tags BackupPlan#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#tags_all BackupPlan#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * advanced_backup_setting block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#advanced_backup_setting BackupPlan#advanced_backup_setting}
     */
    readonly advancedBackupSetting?: BackupPlanAdvancedBackupSetting[];
    /**
     * rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#rule BackupPlan#rule}
     */
    readonly rule: BackupPlanRule[];
}
export interface BackupPlanAdvancedBackupSetting {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#backup_options BackupPlan#backup_options}.
     */
    readonly backupOptions: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#resource_type BackupPlan#resource_type}.
     */
    readonly resourceType: string;
}
export interface BackupPlanRuleCopyActionLifecycle {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#cold_storage_after BackupPlan#cold_storage_after}.
     */
    readonly coldStorageAfter?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#delete_after BackupPlan#delete_after}.
     */
    readonly deleteAfter?: number;
}
export interface BackupPlanRuleCopyAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#destination_vault_arn BackupPlan#destination_vault_arn}.
     */
    readonly destinationVaultArn: string;
    /**
     * lifecycle block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#lifecycle BackupPlan#lifecycle}
     */
    readonly lifecycle?: BackupPlanRuleCopyActionLifecycle[];
}
export interface BackupPlanRuleLifecycle {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#cold_storage_after BackupPlan#cold_storage_after}.
     */
    readonly coldStorageAfter?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#delete_after BackupPlan#delete_after}.
     */
    readonly deleteAfter?: number;
}
export interface BackupPlanRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#completion_window BackupPlan#completion_window}.
     */
    readonly completionWindow?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#enable_continuous_backup BackupPlan#enable_continuous_backup}.
     */
    readonly enableContinuousBackup?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#recovery_point_tags BackupPlan#recovery_point_tags}.
     */
    readonly recoveryPointTags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#rule_name BackupPlan#rule_name}.
     */
    readonly ruleName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#schedule BackupPlan#schedule}.
     */
    readonly schedule?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#start_window BackupPlan#start_window}.
     */
    readonly startWindow?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#target_vault_name BackupPlan#target_vault_name}.
     */
    readonly targetVaultName: string;
    /**
     * copy_action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#copy_action BackupPlan#copy_action}
     */
    readonly copyAction?: BackupPlanRuleCopyAction[];
    /**
     * lifecycle block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html#lifecycle BackupPlan#lifecycle}
     */
    readonly lifecycle?: BackupPlanRuleLifecycle[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html aws_backup_plan}.
 */
export declare class BackupPlan extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_plan.html aws_backup_plan} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: BackupPlanConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    get version(): string;
    private _advancedBackupSetting?;
    get advancedBackupSetting(): BackupPlanAdvancedBackupSetting[];
    set advancedBackupSetting(value: BackupPlanAdvancedBackupSetting[]);
    resetAdvancedBackupSetting(): void;
    get advancedBackupSettingInput(): BackupPlanAdvancedBackupSetting[] | undefined;
    private _rule;
    get rule(): BackupPlanRule[];
    set rule(value: BackupPlanRule[]);
    get ruleInput(): BackupPlanRule[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
