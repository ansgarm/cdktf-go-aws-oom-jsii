import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DlmLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#description DlmLifecyclePolicy#description}.
     */
    readonly description: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#execution_role_arn DlmLifecyclePolicy#execution_role_arn}.
     */
    readonly executionRoleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#state DlmLifecyclePolicy#state}.
     */
    readonly state?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#tags DlmLifecyclePolicy#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#tags_all DlmLifecyclePolicy#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * policy_details block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#policy_details DlmLifecyclePolicy#policy_details}
     */
    readonly policyDetails: DlmLifecyclePolicyPolicyDetails[];
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleCreateRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#interval DlmLifecyclePolicy#interval}.
     */
    readonly interval: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#interval_unit DlmLifecyclePolicy#interval_unit}.
     */
    readonly intervalUnit?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#times DlmLifecyclePolicy#times}.
     */
    readonly times?: string[];
}
export interface DlmLifecyclePolicyPolicyDetailsScheduleRetainRule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#count DlmLifecyclePolicy#count}.
     */
    readonly count: number;
}
export interface DlmLifecyclePolicyPolicyDetailsSchedule {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#copy_tags DlmLifecyclePolicy#copy_tags}.
     */
    readonly copyTags?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#name DlmLifecyclePolicy#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#tags_to_add DlmLifecyclePolicy#tags_to_add}.
     */
    readonly tagsToAdd?: {
        [key: string]: string;
    };
    /**
     * create_rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#create_rule DlmLifecyclePolicy#create_rule}
     */
    readonly createRule: DlmLifecyclePolicyPolicyDetailsScheduleCreateRule[];
    /**
     * retain_rule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#retain_rule DlmLifecyclePolicy#retain_rule}
     */
    readonly retainRule: DlmLifecyclePolicyPolicyDetailsScheduleRetainRule[];
}
export interface DlmLifecyclePolicyPolicyDetails {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#resource_types DlmLifecyclePolicy#resource_types}.
     */
    readonly resourceTypes: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#target_tags DlmLifecyclePolicy#target_tags}.
     */
    readonly targetTags: {
        [key: string]: string;
    };
    /**
     * schedule block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html#schedule DlmLifecyclePolicy#schedule}
     */
    readonly schedule: DlmLifecyclePolicyPolicyDetailsSchedule[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html aws_dlm_lifecycle_policy}.
 */
export declare class DlmLifecyclePolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dlm_lifecycle_policy.html aws_dlm_lifecycle_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DlmLifecyclePolicyConfig);
    get arn(): string;
    private _description;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string;
    private _executionRoleArn;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string;
    get id(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
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
    private _policyDetails;
    get policyDetails(): DlmLifecyclePolicyPolicyDetails[];
    set policyDetails(value: DlmLifecyclePolicyPolicyDetails[]);
    get policyDetailsInput(): DlmLifecyclePolicyPolicyDetails[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
