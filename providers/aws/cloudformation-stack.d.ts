import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationStackConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#capabilities CloudformationStack#capabilities}.
     */
    readonly capabilities?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#disable_rollback CloudformationStack#disable_rollback}.
     */
    readonly disableRollback?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#iam_role_arn CloudformationStack#iam_role_arn}.
     */
    readonly iamRoleArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#name CloudformationStack#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#notification_arns CloudformationStack#notification_arns}.
     */
    readonly notificationArns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#on_failure CloudformationStack#on_failure}.
     */
    readonly onFailure?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#parameters CloudformationStack#parameters}.
     */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#policy_body CloudformationStack#policy_body}.
     */
    readonly policyBody?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#policy_url CloudformationStack#policy_url}.
     */
    readonly policyUrl?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#tags CloudformationStack#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#tags_all CloudformationStack#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#template_body CloudformationStack#template_body}.
     */
    readonly templateBody?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#template_url CloudformationStack#template_url}.
     */
    readonly templateUrl?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#timeout_in_minutes CloudformationStack#timeout_in_minutes}.
     */
    readonly timeoutInMinutes?: number;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#timeouts CloudformationStack#timeouts}
     */
    readonly timeouts?: CloudformationStackTimeouts;
}
export interface CloudformationStackTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#create CloudformationStack#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#delete CloudformationStack#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#update CloudformationStack#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html aws_cloudformation_stack}.
 */
export declare class CloudformationStack extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html aws_cloudformation_stack} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudformationStackConfig);
    private _capabilities?;
    get capabilities(): string[];
    set capabilities(value: string[]);
    resetCapabilities(): void;
    get capabilitiesInput(): string[] | undefined;
    private _disableRollback?;
    get disableRollback(): boolean;
    set disableRollback(value: boolean);
    resetDisableRollback(): void;
    get disableRollbackInput(): boolean | undefined;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    resetIamRoleArn(): void;
    get iamRoleArnInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _notificationArns?;
    get notificationArns(): string[];
    set notificationArns(value: string[]);
    resetNotificationArns(): void;
    get notificationArnsInput(): string[] | undefined;
    private _onFailure?;
    get onFailure(): string;
    set onFailure(value: string);
    resetOnFailure(): void;
    get onFailureInput(): string | undefined;
    outputs(key: string): string;
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
    private _policyBody?;
    get policyBody(): string;
    set policyBody(value: string);
    resetPolicyBody(): void;
    get policyBodyInput(): string | undefined;
    private _policyUrl?;
    get policyUrl(): string;
    set policyUrl(value: string);
    resetPolicyUrl(): void;
    get policyUrlInput(): string | undefined;
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
    private _timeoutInMinutes?;
    get timeoutInMinutes(): number;
    set timeoutInMinutes(value: number);
    resetTimeoutInMinutes(): void;
    get timeoutInMinutesInput(): number | undefined;
    private _timeouts?;
    get timeouts(): CloudformationStackTimeouts;
    set timeouts(value: CloudformationStackTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): CloudformationStackTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
