import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PinpointEventStreamConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html#application_id PinpointEventStream#application_id}.
     */
    readonly applicationId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html#destination_stream_arn PinpointEventStream#destination_stream_arn}.
     */
    readonly destinationStreamArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html#role_arn PinpointEventStream#role_arn}.
     */
    readonly roleArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html aws_pinpoint_event_stream}.
 */
export declare class PinpointEventStream extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_event_stream.html aws_pinpoint_event_stream} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: PinpointEventStreamConfig);
    private _applicationId;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string;
    private _destinationStreamArn;
    get destinationStreamArn(): string;
    set destinationStreamArn(value: string);
    get destinationStreamArnInput(): string;
    get id(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
