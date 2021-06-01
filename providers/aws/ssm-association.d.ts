import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}.
     */
    readonly applyOnlyAtCronInterval?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#association_name SsmAssociation#association_name}.
     */
    readonly associationName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}.
     */
    readonly automationTargetParameterName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#compliance_severity SsmAssociation#compliance_severity}.
     */
    readonly complianceSeverity?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#document_version SsmAssociation#document_version}.
     */
    readonly documentVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#instance_id SsmAssociation#instance_id}.
     */
    readonly instanceId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#max_concurrency SsmAssociation#max_concurrency}.
     */
    readonly maxConcurrency?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#max_errors SsmAssociation#max_errors}.
     */
    readonly maxErrors?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#name SsmAssociation#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#parameters SsmAssociation#parameters}.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#schedule_expression SsmAssociation#schedule_expression}.
     */
    readonly scheduleExpression?: string;
    /**
     * output_location block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#output_location SsmAssociation#output_location}
     */
    readonly outputLocation?: SsmAssociationOutputLocation[];
    /**
     * targets block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#targets SsmAssociation#targets}
     */
    readonly targets?: SsmAssociationTargets[];
}
export interface SsmAssociationOutputLocation {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#s3_bucket_name SsmAssociation#s3_bucket_name}.
     */
    readonly s3BucketName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#s3_key_prefix SsmAssociation#s3_key_prefix}.
     */
    readonly s3KeyPrefix?: string;
}
export interface SsmAssociationTargets {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#key SsmAssociation#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html#values SsmAssociation#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html aws_ssm_association}.
 */
export declare class SsmAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_association.html aws_ssm_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SsmAssociationConfig);
    private _applyOnlyAtCronInterval?;
    get applyOnlyAtCronInterval(): boolean;
    set applyOnlyAtCronInterval(value: boolean);
    resetApplyOnlyAtCronInterval(): void;
    get applyOnlyAtCronIntervalInput(): boolean | undefined;
    get associationId(): string;
    private _associationName?;
    get associationName(): string;
    set associationName(value: string);
    resetAssociationName(): void;
    get associationNameInput(): string | undefined;
    private _automationTargetParameterName?;
    get automationTargetParameterName(): string;
    set automationTargetParameterName(value: string);
    resetAutomationTargetParameterName(): void;
    get automationTargetParameterNameInput(): string | undefined;
    private _complianceSeverity?;
    get complianceSeverity(): string;
    set complianceSeverity(value: string);
    resetComplianceSeverity(): void;
    get complianceSeverityInput(): string | undefined;
    private _documentVersion?;
    get documentVersion(): string;
    set documentVersion(value: string);
    resetDocumentVersion(): void;
    get documentVersionInput(): string | undefined;
    get id(): string;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string | undefined;
    private _maxConcurrency?;
    get maxConcurrency(): string;
    set maxConcurrency(value: string);
    resetMaxConcurrency(): void;
    get maxConcurrencyInput(): string | undefined;
    private _maxErrors?;
    get maxErrors(): string;
    set maxErrors(value: string);
    resetMaxErrors(): void;
    get maxErrorsInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    resetScheduleExpression(): void;
    get scheduleExpressionInput(): string | undefined;
    private _outputLocation?;
    get outputLocation(): SsmAssociationOutputLocation[];
    set outputLocation(value: SsmAssociationOutputLocation[]);
    resetOutputLocation(): void;
    get outputLocationInput(): SsmAssociationOutputLocation[] | undefined;
    private _targets?;
    get targets(): SsmAssociationTargets[];
    set targets(value: SsmAssociationTargets[]);
    resetTargets(): void;
    get targetsInput(): SsmAssociationTargets[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
