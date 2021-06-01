import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontRealtimeLogConfigConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#fields CloudfrontRealtimeLogConfig#fields}.
     */
    readonly fields: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#name CloudfrontRealtimeLogConfig#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}.
     */
    readonly samplingRate: number;
    /**
     * endpoint block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#endpoint CloudfrontRealtimeLogConfig#endpoint}
     */
    readonly endpoint: CloudfrontRealtimeLogConfigEndpoint[];
}
export interface CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#role_arn CloudfrontRealtimeLogConfig#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#stream_arn CloudfrontRealtimeLogConfig#stream_arn}.
     */
    readonly streamArn: string;
}
export interface CloudfrontRealtimeLogConfigEndpoint {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#stream_type CloudfrontRealtimeLogConfig#stream_type}.
     */
    readonly streamType: string;
    /**
     * kinesis_stream_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#kinesis_stream_config CloudfrontRealtimeLogConfig#kinesis_stream_config}
     */
    readonly kinesisStreamConfig: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html aws_cloudfront_realtime_log_config}.
 */
export declare class CloudfrontRealtimeLogConfig extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html aws_cloudfront_realtime_log_config} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudfrontRealtimeLogConfigConfig);
    get arn(): string;
    private _fields;
    get fields(): string[];
    set fields(value: string[]);
    get fieldsInput(): string[];
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _samplingRate;
    get samplingRate(): number;
    set samplingRate(value: number);
    get samplingRateInput(): number;
    private _endpoint;
    get endpoint(): CloudfrontRealtimeLogConfigEndpoint[];
    set endpoint(value: CloudfrontRealtimeLogConfigEndpoint[]);
    get endpointInput(): CloudfrontRealtimeLogConfigEndpoint[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
