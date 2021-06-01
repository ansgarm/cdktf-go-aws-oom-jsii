import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminAccountAssignmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html#instance_arn SsoadminAccountAssignment#instance_arn}.
     */
    readonly instanceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html#permission_set_arn SsoadminAccountAssignment#permission_set_arn}.
     */
    readonly permissionSetArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html#principal_id SsoadminAccountAssignment#principal_id}.
     */
    readonly principalId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html#principal_type SsoadminAccountAssignment#principal_type}.
     */
    readonly principalType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html#target_id SsoadminAccountAssignment#target_id}.
     */
    readonly targetId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html#target_type SsoadminAccountAssignment#target_type}.
     */
    readonly targetType?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html aws_ssoadmin_account_assignment}.
 */
export declare class SsoadminAccountAssignment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html aws_ssoadmin_account_assignment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SsoadminAccountAssignmentConfig);
    get id(): string;
    private _instanceArn;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string;
    private _permissionSetArn;
    get permissionSetArn(): string;
    set permissionSetArn(value: string);
    get permissionSetArnInput(): string;
    private _principalId;
    get principalId(): string;
    set principalId(value: string);
    get principalIdInput(): string;
    private _principalType;
    get principalType(): string;
    set principalType(value: string);
    get principalTypeInput(): string;
    private _targetId;
    get targetId(): string;
    set targetId(value: string);
    get targetIdInput(): string;
    private _targetType?;
    get targetType(): string;
    set targetType(value: string);
    resetTargetType(): void;
    get targetTypeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
