import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodebuildWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#branch_filter CodebuildWebhook#branch_filter}.
     */
    readonly branchFilter?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#project_name CodebuildWebhook#project_name}.
     */
    readonly projectName: string;
    /**
     * filter_group block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#filter_group CodebuildWebhook#filter_group}
     */
    readonly filterGroup?: CodebuildWebhookFilterGroup[];
}
export interface CodebuildWebhookFilterGroupFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}.
     */
    readonly excludeMatchedPattern?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#pattern CodebuildWebhook#pattern}.
     */
    readonly pattern: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#type CodebuildWebhook#type}.
     */
    readonly type: string;
}
export interface CodebuildWebhookFilterGroup {
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#filter CodebuildWebhook#filter}
     */
    readonly filter?: CodebuildWebhookFilterGroupFilter[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook}.
 */
export declare class CodebuildWebhook extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodebuildWebhookConfig);
    private _branchFilter?;
    get branchFilter(): string;
    set branchFilter(value: string);
    resetBranchFilter(): void;
    get branchFilterInput(): string | undefined;
    get id(): string;
    get payloadUrl(): string;
    private _projectName;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string;
    get secret(): string;
    get url(): string;
    private _filterGroup?;
    get filterGroup(): CodebuildWebhookFilterGroup[];
    set filterGroup(value: CodebuildWebhookFilterGroup[]);
    resetFilterGroup(): void;
    get filterGroupInput(): CodebuildWebhookFilterGroup[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
