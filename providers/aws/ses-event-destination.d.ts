import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesEventDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#configuration_set_name SesEventDestination#configuration_set_name}.
     */
    readonly configurationSetName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#enabled SesEventDestination#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#matching_types SesEventDestination#matching_types}.
     */
    readonly matchingTypes: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#name SesEventDestination#name}.
     */
    readonly name: string;
    /**
     * cloudwatch_destination block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#cloudwatch_destination SesEventDestination#cloudwatch_destination}
     */
    readonly cloudwatchDestination?: SesEventDestinationCloudwatchDestination[];
    /**
     * kinesis_destination block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#kinesis_destination SesEventDestination#kinesis_destination}
     */
    readonly kinesisDestination?: SesEventDestinationKinesisDestination[];
    /**
     * sns_destination block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#sns_destination SesEventDestination#sns_destination}
     */
    readonly snsDestination?: SesEventDestinationSnsDestination[];
}
export interface SesEventDestinationCloudwatchDestination {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#default_value SesEventDestination#default_value}.
     */
    readonly defaultValue: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#dimension_name SesEventDestination#dimension_name}.
     */
    readonly dimensionName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#value_source SesEventDestination#value_source}.
     */
    readonly valueSource: string;
}
export interface SesEventDestinationKinesisDestination {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#role_arn SesEventDestination#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#stream_arn SesEventDestination#stream_arn}.
     */
    readonly streamArn: string;
}
export interface SesEventDestinationSnsDestination {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#topic_arn SesEventDestination#topic_arn}.
     */
    readonly topicArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html aws_ses_event_destination}.
 */
export declare class SesEventDestination extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html aws_ses_event_destination} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SesEventDestinationConfig);
    get arn(): string;
    private _configurationSetName;
    get configurationSetName(): string;
    set configurationSetName(value: string);
    get configurationSetNameInput(): string;
    private _enabled?;
    get enabled(): boolean;
    set enabled(value: boolean);
    resetEnabled(): void;
    get enabledInput(): boolean | undefined;
    get id(): string;
    private _matchingTypes;
    get matchingTypes(): string[];
    set matchingTypes(value: string[]);
    get matchingTypesInput(): string[];
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _cloudwatchDestination?;
    get cloudwatchDestination(): SesEventDestinationCloudwatchDestination[];
    set cloudwatchDestination(value: SesEventDestinationCloudwatchDestination[]);
    resetCloudwatchDestination(): void;
    get cloudwatchDestinationInput(): SesEventDestinationCloudwatchDestination[] | undefined;
    private _kinesisDestination?;
    get kinesisDestination(): SesEventDestinationKinesisDestination[];
    set kinesisDestination(value: SesEventDestinationKinesisDestination[]);
    resetKinesisDestination(): void;
    get kinesisDestinationInput(): SesEventDestinationKinesisDestination[] | undefined;
    private _snsDestination?;
    get snsDestination(): SesEventDestinationSnsDestination[];
    set snsDestination(value: SesEventDestinationSnsDestination[]);
    resetSnsDestination(): void;
    get snsDestinationInput(): SesEventDestinationSnsDestination[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
