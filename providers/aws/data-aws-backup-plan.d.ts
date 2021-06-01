import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBackupPlanConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_plan.html#plan_id DataAwsBackupPlan#plan_id}.
     */
    readonly planId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/backup_plan.html#tags DataAwsBackupPlan#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/backup_plan.html aws_backup_plan}.
 */
export declare class DataAwsBackupPlan extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/backup_plan.html aws_backup_plan} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsBackupPlanConfig);
    get arn(): string;
    get id(): string;
    get name(): string;
    private _planId;
    get planId(): string;
    set planId(value: string);
    get planIdInput(): string;
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
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
