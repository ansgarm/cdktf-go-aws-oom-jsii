import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodepipelineWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#authentication CodepipelineWebhook#authentication}.
     */
    readonly authentication: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#name CodepipelineWebhook#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#tags CodepipelineWebhook#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#tags_all CodepipelineWebhook#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#target_action CodepipelineWebhook#target_action}.
     */
    readonly targetAction: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#target_pipeline CodepipelineWebhook#target_pipeline}.
     */
    readonly targetPipeline: string;
    /**
     * authentication_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#authentication_configuration CodepipelineWebhook#authentication_configuration}
     */
    readonly authenticationConfiguration?: CodepipelineWebhookAuthenticationConfiguration[];
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#filter CodepipelineWebhook#filter}
     */
    readonly filter: CodepipelineWebhookFilter[];
}
export interface CodepipelineWebhookAuthenticationConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#allowed_ip_range CodepipelineWebhook#allowed_ip_range}.
     */
    readonly allowedIpRange?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#secret_token CodepipelineWebhook#secret_token}.
     */
    readonly secretToken?: string;
}
export interface CodepipelineWebhookFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#json_path CodepipelineWebhook#json_path}.
     */
    readonly jsonPath: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#match_equals CodepipelineWebhook#match_equals}.
     */
    readonly matchEquals: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html aws_codepipeline_webhook}.
 */
export declare class CodepipelineWebhook extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html aws_codepipeline_webhook} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodepipelineWebhookConfig);
    private _authentication;
    get authentication(): string;
    set authentication(value: string);
    get authenticationInput(): string;
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
    private _targetAction;
    get targetAction(): string;
    set targetAction(value: string);
    get targetActionInput(): string;
    private _targetPipeline;
    get targetPipeline(): string;
    set targetPipeline(value: string);
    get targetPipelineInput(): string;
    get url(): string;
    private _authenticationConfiguration?;
    get authenticationConfiguration(): CodepipelineWebhookAuthenticationConfiguration[];
    set authenticationConfiguration(value: CodepipelineWebhookAuthenticationConfiguration[]);
    resetAuthenticationConfiguration(): void;
    get authenticationConfigurationInput(): CodepipelineWebhookAuthenticationConfiguration[] | undefined;
    private _filter;
    get filter(): CodepipelineWebhookFilter[];
    set filter(value: CodepipelineWebhookFilter[]);
    get filterInput(): CodepipelineWebhookFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
