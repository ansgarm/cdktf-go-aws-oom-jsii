import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53HealthCheckConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#child_health_threshold Route53HealthCheck#child_health_threshold}.
     */
    readonly childHealthThreshold?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#child_healthchecks Route53HealthCheck#child_healthchecks}.
     */
    readonly childHealthchecks?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}.
     */
    readonly cloudwatchAlarmName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}.
     */
    readonly cloudwatchAlarmRegion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#disabled Route53HealthCheck#disabled}.
     */
    readonly disabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#enable_sni Route53HealthCheck#enable_sni}.
     */
    readonly enableSni?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#failure_threshold Route53HealthCheck#failure_threshold}.
     */
    readonly failureThreshold?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#fqdn Route53HealthCheck#fqdn}.
     */
    readonly fqdn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.
     */
    readonly insufficientDataHealthStatus?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#invert_healthcheck Route53HealthCheck#invert_healthcheck}.
     */
    readonly invertHealthcheck?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#ip_address Route53HealthCheck#ip_address}.
     */
    readonly ipAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#measure_latency Route53HealthCheck#measure_latency}.
     */
    readonly measureLatency?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#port Route53HealthCheck#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#reference_name Route53HealthCheck#reference_name}.
     */
    readonly referenceName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#regions Route53HealthCheck#regions}.
     */
    readonly regions?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#request_interval Route53HealthCheck#request_interval}.
     */
    readonly requestInterval?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#resource_path Route53HealthCheck#resource_path}.
     */
    readonly resourcePath?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#search_string Route53HealthCheck#search_string}.
     */
    readonly searchString?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#tags Route53HealthCheck#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#tags_all Route53HealthCheck#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html#type Route53HealthCheck#type}.
     */
    readonly type: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html aws_route53_health_check}.
 */
export declare class Route53HealthCheck extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html aws_route53_health_check} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Route53HealthCheckConfig);
    private _childHealthThreshold?;
    get childHealthThreshold(): number;
    set childHealthThreshold(value: number);
    resetChildHealthThreshold(): void;
    get childHealthThresholdInput(): number | undefined;
    private _childHealthchecks?;
    get childHealthchecks(): string[];
    set childHealthchecks(value: string[]);
    resetChildHealthchecks(): void;
    get childHealthchecksInput(): string[] | undefined;
    private _cloudwatchAlarmName?;
    get cloudwatchAlarmName(): string;
    set cloudwatchAlarmName(value: string);
    resetCloudwatchAlarmName(): void;
    get cloudwatchAlarmNameInput(): string | undefined;
    private _cloudwatchAlarmRegion?;
    get cloudwatchAlarmRegion(): string;
    set cloudwatchAlarmRegion(value: string);
    resetCloudwatchAlarmRegion(): void;
    get cloudwatchAlarmRegionInput(): string | undefined;
    private _disabled?;
    get disabled(): boolean;
    set disabled(value: boolean);
    resetDisabled(): void;
    get disabledInput(): boolean | undefined;
    private _enableSni?;
    get enableSni(): boolean;
    set enableSni(value: boolean);
    resetEnableSni(): void;
    get enableSniInput(): boolean | undefined;
    private _failureThreshold?;
    get failureThreshold(): number;
    set failureThreshold(value: number);
    resetFailureThreshold(): void;
    get failureThresholdInput(): number | undefined;
    private _fqdn?;
    get fqdn(): string;
    set fqdn(value: string);
    resetFqdn(): void;
    get fqdnInput(): string | undefined;
    get id(): string;
    private _insufficientDataHealthStatus?;
    get insufficientDataHealthStatus(): string;
    set insufficientDataHealthStatus(value: string);
    resetInsufficientDataHealthStatus(): void;
    get insufficientDataHealthStatusInput(): string | undefined;
    private _invertHealthcheck?;
    get invertHealthcheck(): boolean;
    set invertHealthcheck(value: boolean);
    resetInvertHealthcheck(): void;
    get invertHealthcheckInput(): boolean | undefined;
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string | undefined;
    private _measureLatency?;
    get measureLatency(): boolean;
    set measureLatency(value: boolean);
    resetMeasureLatency(): void;
    get measureLatencyInput(): boolean | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _referenceName?;
    get referenceName(): string;
    set referenceName(value: string);
    resetReferenceName(): void;
    get referenceNameInput(): string | undefined;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[] | undefined;
    private _requestInterval?;
    get requestInterval(): number;
    set requestInterval(value: number);
    resetRequestInterval(): void;
    get requestIntervalInput(): number | undefined;
    private _resourcePath?;
    get resourcePath(): string;
    set resourcePath(value: string);
    resetResourcePath(): void;
    get resourcePathInput(): string | undefined;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    resetSearchString(): void;
    get searchStringInput(): string | undefined;
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
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
