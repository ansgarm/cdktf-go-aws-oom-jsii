import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AlbConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}.
     */
    readonly customerOwnedIpv4Pool?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#drop_invalid_header_fields Alb#drop_invalid_header_fields}.
     */
    readonly dropInvalidHeaderFields?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}.
     */
    readonly enableCrossZoneLoadBalancing?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#enable_deletion_protection Alb#enable_deletion_protection}.
     */
    readonly enableDeletionProtection?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#enable_http2 Alb#enable_http2}.
     */
    readonly enableHttp2?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#idle_timeout Alb#idle_timeout}.
     */
    readonly idleTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#internal Alb#internal}.
     */
    readonly internal?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#ip_address_type Alb#ip_address_type}.
     */
    readonly ipAddressType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#load_balancer_type Alb#load_balancer_type}.
     */
    readonly loadBalancerType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#name Alb#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#name_prefix Alb#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#security_groups Alb#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#subnets Alb#subnets}.
     */
    readonly subnets?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#tags Alb#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#tags_all Alb#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * access_logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#access_logs Alb#access_logs}
     */
    readonly accessLogs?: AlbAccessLogs[];
    /**
     * subnet_mapping block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#subnet_mapping Alb#subnet_mapping}
     */
    readonly subnetMapping?: AlbSubnetMapping[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#timeouts Alb#timeouts}
     */
    readonly timeouts?: AlbTimeouts;
}
export interface AlbAccessLogs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#bucket Alb#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#enabled Alb#enabled}.
     */
    readonly enabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#prefix Alb#prefix}.
     */
    readonly prefix?: string;
}
export interface AlbSubnetMapping {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#allocation_id Alb#allocation_id}.
     */
    readonly allocationId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#ipv6_address Alb#ipv6_address}.
     */
    readonly ipv6Address?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#private_ipv4_address Alb#private_ipv4_address}.
     */
    readonly privateIpv4Address?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#subnet_id Alb#subnet_id}.
     */
    readonly subnetId: string;
}
export interface AlbTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#create Alb#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#delete Alb#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#update Alb#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb.html aws_alb}.
 */
export declare class Alb extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb.html aws_alb} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: AlbConfig);
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
    get accessLogs(): AlbAccessLogs[];
    set accessLogs(value: AlbAccessLogs[]);
    resetAccessLogs(): void;
    get accessLogsInput(): AlbAccessLogs[] | undefined;
    private _subnetMapping?;
    get subnetMapping(): AlbSubnetMapping[];
    set subnetMapping(value: AlbSubnetMapping[]);
    resetSubnetMapping(): void;
    get subnetMappingInput(): AlbSubnetMapping[] | undefined;
    private _timeouts?;
    get timeouts(): AlbTimeouts;
    set timeouts(value: AlbTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): AlbTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
