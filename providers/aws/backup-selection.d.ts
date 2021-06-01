import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupSelectionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#iam_role_arn BackupSelection#iam_role_arn}.
     */
    readonly iamRoleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#name BackupSelection#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#plan_id BackupSelection#plan_id}.
     */
    readonly planId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#resources BackupSelection#resources}.
     */
    readonly resources?: string[];
    /**
     * selection_tag block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#selection_tag BackupSelection#selection_tag}
     */
    readonly selectionTag?: BackupSelectionSelectionTag[];
}
export interface BackupSelectionSelectionTag {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#key BackupSelection#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#type BackupSelection#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html#value BackupSelection#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html aws_backup_selection}.
 */
export declare class BackupSelection extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/backup_selection.html aws_backup_selection} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: BackupSelectionConfig);
    private _iamRoleArn;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    get iamRoleArnInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _planId;
    get planId(): string;
    set planId(value: string);
    get planIdInput(): string;
    private _resources?;
    get resources(): string[];
    set resources(value: string[]);
    resetResources(): void;
    get resourcesInput(): string[] | undefined;
    private _selectionTag?;
    get selectionTag(): BackupSelectionSelectionTag[];
    set selectionTag(value: BackupSelectionSelectionTag[]);
    resetSelectionTag(): void;
    get selectionTagInput(): BackupSelectionSelectionTag[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
