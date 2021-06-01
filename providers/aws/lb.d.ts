import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}.
     */
    readonly customerOwnedIpv4Pool?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#drop_invalid_header_fields Lb#drop_invalid_header_fields}.
     */
    readonly dropInvalidHeaderFields?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_cross_zone_load_balancing Lb#enable_cross_zone_load_balancing}.
     */
    readonly enableCrossZoneLoadBalancing?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_deletion_protection Lb#enable_deletion_protection}.
     */
    readonly enableDeletionProtection?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_http2 Lb#enable_http2}.
     */
    readonly enableHttp2?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#idle_timeout Lb#idle_timeout}.
     */
    readonly idleTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#internal Lb#internal}.
     */
    readonly internal?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#ip_address_type Lb#ip_address_type}.
     */
    readonly ipAddressType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#load_balancer_type Lb#load_balancer_type}.
     */
    readonly loadBalancerType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#name Lb#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#name_prefix Lb#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#security_groups Lb#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#subnets Lb#subnets}.
     */
    readonly subnets?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#tags Lb#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#tags_all Lb#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * access_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#access_logs Lb#access_logs}
     */
    readonly accessLogs?: LbAccessLogs[];
    /**
     * subnet_mapping block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#subnet_mapping Lb#subnet_mapping}
     */
    readonly subnetMapping?: LbSubnetMapping[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#timeouts Lb#timeouts}
     */
    readonly timeouts?: LbTimeouts;
}
export interface LbAccessLogs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#bucket Lb#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enabled Lb#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#prefix Lb#prefix}.
     */
    readonly prefix?: string;
}
export interface LbSubnetMapping {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#allocation_id Lb#allocation_id}.
     */
    readonly allocationId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#ipv6_address Lb#ipv6_address}.
     */
    readonly ipv6Address?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#private_ipv4_address Lb#private_ipv4_address}.
     */
    readonly privateIpv4Address?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#subnet_id Lb#subnet_id}.
     */
    readonly subnetId: string;
}
export interface LbTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#create Lb#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#delete Lb#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#update Lb#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb.html aws_lb}.
 */
export declare class Lb extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb.html aws_lb} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: LbConfig);
    get arn(): string;
    get arnSuffix(): string;
    private _customerOwnedIpv4Pool?;
    get customerOwnedIpv4Pool(): string;
    set customerOwnedIpv4Pool(value: string);
    resetCustomerOwnedIpv4Pool(): void;
    get customerOwnedIpv4PoolInput(): string | undefined;
    get dnsName(): string;
    private _dropInvalidHeaderFields?;
    get dropInvalidHeaderFields(): boolean;
    set dropInvalidHeaderFields(value: boolean);
    resetDropInvalidHeaderFields(): void;
    get dropInvalidHeaderFieldsInput(): boolean | undefined;
    private _enableCrossZoneLoadBalancing?;
    get enableCrossZoneLoadBalancing(): boolean;
    set enableCrossZoneLoadBalancing(value: boolean);
    resetEnableCrossZoneLoadBalancing(): void;
    get enableCrossZoneLoadBalancingInput(): boolean | undefined;
    private _enableDeletionProtection?;
    get enableDeletionProtection(): boolean;
    set enableDeletionProtection(value: boolean);
    resetEnableDeletionProtection(): void;
    get enableDeletionProtectionInput(): boolean | undefined;
    private _enableHttp2?;
    get enableHttp2(): boolean;
    set enableHttp2(value: boolean);
    resetEnableHttp2(): void;
    get enableHttp2Input(): boolean | undefined;
    get id(): string;
    private _idleTimeout?;
    get idleTimeout(): number;
    set idleTimeout(value: number);
    resetIdleTimeout(): void;
    get idleTimeoutInput(): number | undefined;
    private _internal?;
    get internal(): boolean;
    set internal(value: boolean);
    resetInternal(): void;
    get internalInput(): boolean | undefined;
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    private _loadBalancerType?;
    get loadBalancerType(): string;
    set loadBalancerType(value: string);
    resetLoadBalancerType(): void;
    get loadBalancerTypeInput(): string | undefined;
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
    get vpcId(): string;
    get zoneId(): string;
    private _accessLogs?;
    get accessLogs(): LbAccessLogs[];
    set accessLogs(value: LbAccessLogs[]);
    resetAccessLogs(): void;
    get accessLogsInput(): LbAccessLogs[] | undefined;
    private _subnetMapping?;
    get subnetMapping(): LbSubnetMapping[];
    set subnetMapping(value: LbSubnetMapping[]);
    resetSubnetMapping(): void;
    get subnetMappingInput(): LbSubnetMapping[] | undefined;
    private _timeouts?;
    get timeouts(): LbTimeouts;
    set timeouts(value: LbTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): LbTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
