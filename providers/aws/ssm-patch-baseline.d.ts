import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmPatchBaselineConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approved_patches SsmPatchBaseline#approved_patches}.
     */
    readonly approvedPatches?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}.
     */
    readonly approvedPatchesComplianceLevel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}.
     */
    readonly approvedPatchesEnableNonSecurity?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#description SsmPatchBaseline#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#name SsmPatchBaseline#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#operating_system SsmPatchBaseline#operating_system}.
     */
    readonly operatingSystem?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#rejected_patches SsmPatchBaseline#rejected_patches}.
     */
    readonly rejectedPatches?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#rejected_patches_action SsmPatchBaseline#rejected_patches_action}.
     */
    readonly rejectedPatchesAction?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#tags SsmPatchBaseline#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#tags_all SsmPatchBaseline#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * approval_rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approval_rule SsmPatchBaseline#approval_rule}
     */
    readonly approvalRule?: SsmPatchBaselineApprovalRule[];
    /**
     * global_filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#global_filter SsmPatchBaseline#global_filter}
     */
    readonly globalFilter?: SsmPatchBaselineGlobalFilter[];
    /**
     * source block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#source SsmPatchBaseline#source}
     */
    readonly source?: SsmPatchBaselineSource[];
}
export interface SsmPatchBaselineApprovalRulePatchFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#key SsmPatchBaseline#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#values SsmPatchBaseline#values}.
     */
    readonly values: string[];
}
export interface SsmPatchBaselineApprovalRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approve_after_days SsmPatchBaseline#approve_after_days}.
     */
    readonly approveAfterDays?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#approve_until_date SsmPatchBaseline#approve_until_date}.
     */
    readonly approveUntilDate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#compliance_level SsmPatchBaseline#compliance_level}.
     */
    readonly complianceLevel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#enable_non_security SsmPatchBaseline#enable_non_security}.
     */
    readonly enableNonSecurity?: boolean;
    /**
     * patch_filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#patch_filter SsmPatchBaseline#patch_filter}
     */
    readonly patchFilter: SsmPatchBaselineApprovalRulePatchFilter[];
}
export interface SsmPatchBaselineGlobalFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#key SsmPatchBaseline#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#values SsmPatchBaseline#values}.
     */
    readonly values: string[];
}
export interface SsmPatchBaselineSource {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#configuration SsmPatchBaseline#configuration}.
     */
    readonly configuration: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#name SsmPatchBaseline#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html#products SsmPatchBaseline#products}.
     */
    readonly products: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html aws_ssm_patch_baseline}.
 */
export declare class SsmPatchBaseline extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html aws_ssm_patch_baseline} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SsmPatchBaselineConfig);
    private _approvedPatches?;
    get approvedPatches(): string[];
    set approvedPatches(value: string[]);
    resetApprovedPatches(): void;
    get approvedPatchesInput(): string[] | undefined;
    private _approvedPatchesComplianceLevel?;
    get approvedPatchesComplianceLevel(): string;
    set approvedPatchesComplianceLevel(value: string);
    resetApprovedPatchesComplianceLevel(): void;
    get approvedPatchesComplianceLevelInput(): string | undefined;
    private _approvedPatchesEnableNonSecurity?;
    get approvedPatchesEnableNonSecurity(): boolean;
    set approvedPatchesEnableNonSecurity(value: boolean);
    resetApprovedPatchesEnableNonSecurity(): void;
    get approvedPatchesEnableNonSecurityInput(): boolean | undefined;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _operatingSystem?;
    get operatingSystem(): string;
    set operatingSystem(value: string);
    resetOperatingSystem(): void;
    get operatingSystemInput(): string | undefined;
    private _rejectedPatches?;
    get rejectedPatches(): string[];
    set rejectedPatches(value: string[]);
    resetRejectedPatches(): void;
    get rejectedPatchesInput(): string[] | undefined;
    private _rejectedPatchesAction?;
    get rejectedPatchesAction(): string;
    set rejectedPatchesAction(value: string);
    resetRejectedPatchesAction(): void;
    get rejectedPatchesActionInput(): string | undefined;
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
    private _approvalRule?;
    get approvalRule(): SsmPatchBaselineApprovalRule[];
    set approvalRule(value: SsmPatchBaselineApprovalRule[]);
    resetApprovalRule(): void;
    get approvalRuleInput(): SsmPatchBaselineApprovalRule[] | undefined;
    private _globalFilter?;
    get globalFilter(): SsmPatchBaselineGlobalFilter[];
    set globalFilter(value: SsmPatchBaselineGlobalFilter[]);
    resetGlobalFilter(): void;
    get globalFilterInput(): SsmPatchBaselineGlobalFilter[] | undefined;
    private _source?;
    get source(): SsmPatchBaselineSource[];
    set source(value: SsmPatchBaselineSource[]);
    resetSource(): void;
    get sourceInput(): SsmPatchBaselineSource[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
