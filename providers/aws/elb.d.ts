import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElbConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#availability_zones Elb#availability_zones}.
     */
    readonly availabilityZones?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#connection_draining Elb#connection_draining}.
     */
    readonly connectionDraining?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#connection_draining_timeout Elb#connection_draining_timeout}.
     */
    readonly connectionDrainingTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#cross_zone_load_balancing Elb#cross_zone_load_balancing}.
     */
    readonly crossZoneLoadBalancing?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#idle_timeout Elb#idle_timeout}.
     */
    readonly idleTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#instances Elb#instances}.
     */
    readonly instances?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#internal Elb#internal}.
     */
    readonly internal?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#name Elb#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#name_prefix Elb#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#security_groups Elb#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#source_security_group Elb#source_security_group}.
     */
    readonly sourceSecurityGroup?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#subnets Elb#subnets}.
     */
    readonly subnets?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#tags Elb#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#tags_all Elb#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * access_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#access_logs Elb#access_logs}
     */
    readonly accessLogs?: ElbAccessLogs[];
    /**
     * health_check block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#health_check Elb#health_check}
     */
    readonly healthCheck?: ElbHealthCheck[];
    /**
     * listener block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#listener Elb#listener}
     */
    readonly listener: ElbListener[];
}
export interface ElbAccessLogs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#bucket Elb#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#bucket_prefix Elb#bucket_prefix}.
     */
    readonly bucketPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#enabled Elb#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#interval Elb#interval}.
     */
    readonly interval?: number;
}
export interface ElbHealthCheck {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#healthy_threshold Elb#healthy_threshold}.
     */
    readonly healthyThreshold: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#interval Elb#interval}.
     */
    readonly interval: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#target Elb#target}.
     */
    readonly target: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#timeout Elb#timeout}.
     */
    readonly timeout: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#unhealthy_threshold Elb#unhealthy_threshold}.
     */
    readonly unhealthyThreshold: number;
}
export interface ElbListener {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#instance_port Elb#instance_port}.
     */
    readonly instancePort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#instance_protocol Elb#instance_protocol}.
     */
    readonly instanceProtocol: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#lb_port Elb#lb_port}.
     */
    readonly lbPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#lb_protocol Elb#lb_protocol}.
     */
    readonly lbProtocol: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#ssl_certificate_id Elb#ssl_certificate_id}.
     */
    readonly sslCertificateId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elb.html aws_elb}.
 */
export declare class Elb extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elb.html aws_elb} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ElbConfig);
    get arn(): string;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[] | undefined;
    private _connectionDraining?;
    get connectionDraining(): boolean;
    set connectionDraining(value: boolean);
    resetConnectionDraining(): void;
    get connectionDrainingInput(): boolean | undefined;
    private _connectionDrainingTimeout?;
    get connectionDrainingTimeout(): number;
    set connectionDrainingTimeout(value: number);
    resetConnectionDrainingTimeout(): void;
    get connectionDrainingTimeoutInput(): number | undefined;
    private _crossZoneLoadBalancing?;
    get crossZoneLoadBalancing(): boolean;
    set crossZoneLoadBalancing(value: boolean);
    resetCrossZoneLoadBalancing(): void;
    get crossZoneLoadBalancingInput(): boolean | undefined;
    get dnsName(): string;
    get id(): string;
    private _idleTimeout?;
    get idleTimeout(): number;
    set idleTimeout(value: number);
    resetIdleTimeout(): void;
    get idleTimeoutInput(): number | undefined;
    private _instances?;
    get instances(): string[];
    set instances(value: string[]);
    resetInstances(): void;
    get instancesInput(): string[] | undefined;
    private _internal?;
    get internal(): boolean;
    set internal(value: boolean);
    resetInternal(): void;
    get internalInput(): boolean | undefined;
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
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _sourceSecurityGroup?;
    get sourceSecurityGroup(): string;
    set sourceSecurityGroup(value: string);
    resetSourceSecurityGroup(): void;
    get sourceSecurityGroupInput(): string | undefined;
    get sourceSecurityGroupId(): string;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    resetSubnets(): void;
    get subnetsInput(): string[] | undefined;
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
    get zoneId(): string;
    private _accessLogs?;
    get accessLogs(): ElbAccessLogs[];
    set accessLogs(value: ElbAccessLogs[]);
    resetAccessLogs(): void;
    get accessLogsInput(): ElbAccessLogs[] | undefined;
    private _healthCheck?;
    get healthCheck(): ElbHealthCheck[];
    set healthCheck(value: ElbHealthCheck[]);
    resetHealthCheck(): void;
    get healthCheckInput(): ElbHealthCheck[] | undefined;
    private _listener;
    get listener(): ElbListener[];
    set listener(value: ElbListener[]);
    get listenerInput(): ElbListener[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
