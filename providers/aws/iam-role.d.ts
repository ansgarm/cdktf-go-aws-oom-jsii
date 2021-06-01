import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamRoleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#assume_role_policy IamRole#assume_role_policy}.
     */
    readonly assumeRolePolicy: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#description IamRole#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#force_detach_policies IamRole#force_detach_policies}.
     */
    readonly forceDetachPolicies?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#managed_policy_arns IamRole#managed_policy_arns}.
     */
    readonly managedPolicyArns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#max_session_duration IamRole#max_session_duration}.
     */
    readonly maxSessionDuration?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#name IamRole#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#name_prefix IamRole#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#path IamRole#path}.
     */
    readonly path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#permissions_boundary IamRole#permissions_boundary}.
     */
    readonly permissionsBoundary?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#tags IamRole#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#tags_all IamRole#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * inline_policy block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#inline_policy IamRole#inline_policy}
     */
    readonly inlinePolicy?: IamRoleInlinePolicy[];
}
export interface IamRoleInlinePolicy {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#name IamRole#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html#policy IamRole#policy}.
     */
    readonly policy?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html aws_iam_role}.
 */
export declare class IamRole extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_role.html aws_iam_role} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IamRoleConfig);
    get arn(): string;
    private _assumeRolePolicy;
    get assumeRolePolicy(): string;
    set assumeRolePolicy(value: string);
    get assumeRolePolicyInput(): string;
    get createDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _forceDetachPolicies?;
    get forceDetachPolicies(): boolean;
    set forceDetachPolicies(value: boolean);
    resetForceDetachPolicies(): void;
    get forceDetachPoliciesInput(): boolean | undefined;
    get id(): string;
    private _managedPolicyArns?;
    get managedPolicyArns(): string[];
    set managedPolicyArns(value: string[]);
    resetManagedPolicyArns(): void;
    get managedPolicyArnsInput(): string[] | undefined;
    private _maxSessionDuration?;
    get maxSessionDuration(): number;
    set maxSessionDuration(value: number);
    resetMaxSessionDuration(): void;
    get maxSessionDurationInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    private _permissionsBoundary?;
    get permissionsBoundary(): string;
    set permissionsBoundary(value: string);
    resetPermissionsBoundary(): void;
    get permissionsBoundaryInput(): string | undefined;
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
    get uniqueId(): string;
    private _inlinePolicy?;
    get inlinePolicy(): IamRoleInlinePolicy[];
    set inlinePolicy(value: IamRoleInlinePolicy[]);
    resetInlinePolicy(): void;
    get inlinePolicyInput(): IamRoleInlinePolicy[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
