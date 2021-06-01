import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationStackSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#administration_role_arn CloudformationStackSet#administration_role_arn}.
     */
    readonly administrationRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#capabilities CloudformationStackSet#capabilities}.
     */
    readonly capabilities?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#description CloudformationStackSet#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#execution_role_name CloudformationStackSet#execution_role_name}.
     */
    readonly executionRoleName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#name CloudformationStackSet#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#parameters CloudformationStackSet#parameters}.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#permission_model CloudformationStackSet#permission_model}.
     */
    readonly permissionModel?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#tags CloudformationStackSet#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#tags_all CloudformationStackSet#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#template_body CloudformationStackSet#template_body}.
     */
    readonly templateBody?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#template_url CloudformationStackSet#template_url}.
     */
    readonly templateUrl?: string;
    /**
     * auto_deployment block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#auto_deployment CloudformationStackSet#auto_deployment}
     */
    readonly autoDeployment?: CloudformationStackSetAutoDeployment[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#timeouts CloudformationStackSet#timeouts}
     */
    readonly timeouts?: CloudformationStackSetTimeouts;
}
export interface CloudformationStackSetAutoDeployment {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#enabled CloudformationStackSet#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}.
     */
    readonly retainStacksOnAccountRemoval?: boolean;
}
export interface CloudformationStackSetTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#update CloudformationStackSet#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html aws_cloudformation_stack_set}.
 */
export declare class CloudformationStackSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html aws_cloudformation_stack_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudformationStackSetConfig);
    private _administrationRoleArn?;
    get administrationRoleArn(): string;
    set administrationRoleArn(value: string);
    resetAdministrationRoleArn(): void;
    get administrationRoleArnInput(): string | undefined;
    get arn(): string;
    private _capabilities?;
    get capabilities(): string[];
    set capabilities(value: string[]);
    resetCapabilities(): void;
    get capabilitiesInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _executionRoleName?;
    get executionRoleName(): string;
    set executionRoleName(value: string);
    resetExecutionRoleName(): void;
    get executionRoleNameInput(): string | undefined;
    get id(): string;
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
    private _permissionModel?;
    get permissionModel(): string;
    set permissionModel(value: string);
    resetPermissionModel(): void;
    get permissionModelInput(): string | undefined;
    get stackSetId(): string;
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
    private _templateBody?;
    get templateBody(): string;
    set templateBody(value: string);
    resetTemplateBody(): void;
    get templateBodyInput(): string | undefined;
    private _templateUrl?;
    get templateUrl(): string;
    set templateUrl(value: string);
    resetTemplateUrl(): void;
    get templateUrlInput(): string | undefined;
    private _autoDeployment?;
    get autoDeployment(): CloudformationStackSetAutoDeployment[];
    set autoDeployment(value: CloudformationStackSetAutoDeployment[]);
    resetAutoDeployment(): void;
    get autoDeploymentInput(): CloudformationStackSetAutoDeployment[] | undefined;
    private _timeouts?;
    get timeouts(): CloudformationStackSetTimeouts;
    set timeouts(value: CloudformationStackSetTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): CloudformationStackSetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
