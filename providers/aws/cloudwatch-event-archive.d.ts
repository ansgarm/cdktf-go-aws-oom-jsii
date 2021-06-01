import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchEventArchiveConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#description CloudwatchEventArchive#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#event_pattern CloudwatchEventArchive#event_pattern}.
     */
    readonly eventPattern?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#event_source_arn CloudwatchEventArchive#event_source_arn}.
     */
    readonly eventSourceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#name CloudwatchEventArchive#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#retention_days CloudwatchEventArchive#retention_days}.
     */
    readonly retentionDays?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html aws_cloudwatch_event_archive}.
 */
export declare class CloudwatchEventArchive extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html aws_cloudwatch_event_archive} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudwatchEventArchiveConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _eventPattern?;
    get eventPattern(): string;
    set eventPattern(value: string);
    resetEventPattern(): void;
    get eventPatternInput(): string | undefined;
    private _eventSourceArn;
    get eventSourceArn(): string;
    set eventSourceArn(value: string);
    get eventSourceArnInput(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _retentionDays?;
    get retentionDays(): number;
    set retentionDays(value: number);
    resetRetentionDays(): void;
    get retentionDaysInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
