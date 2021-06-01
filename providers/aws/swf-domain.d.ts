import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SwfDomainConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/swf_domain.html#description SwfDomain#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/swf_domain.html#name SwfDomain#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/swf_domain.html#name_prefix SwfDomain#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/swf_domain.html#tags SwfDomain#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/swf_domain.html#tags_all SwfDomain#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/swf_domain.html#workflow_execution_retention_period_in_days SwfDomain#workflow_execution_retention_period_in_days}.
     */
    readonly workflowExecutionRetentionPeriodInDays: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/swf_domain.html aws_swf_domain}.
 */
export declare class SwfDomain extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/swf_domain.html aws_swf_domain} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SwfDomainConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
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
    private _workflowExecutionRetentionPeriodInDays;
    get workflowExecutionRetentionPeriodInDays(): string;
    set workflowExecutionRetentionPeriodInDays(value: string);
    get workflowExecutionRetentionPeriodInDaysInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
