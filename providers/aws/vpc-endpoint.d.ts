import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#auto_accept VpcEndpoint#auto_accept}.
     */
    readonly autoAccept?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#policy VpcEndpoint#policy}.
     */
    readonly policy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#private_dns_enabled VpcEndpoint#private_dns_enabled}.
     */
    readonly privateDnsEnabled?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#route_table_ids VpcEndpoint#route_table_ids}.
     */
    readonly routeTableIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#security_group_ids VpcEndpoint#security_group_ids}.
     */
    readonly securityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#service_name VpcEndpoint#service_name}.
     */
    readonly serviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#subnet_ids VpcEndpoint#subnet_ids}.
     */
    readonly subnetIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#tags VpcEndpoint#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#tags_all VpcEndpoint#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#vpc_endpoint_type VpcEndpoint#vpc_endpoint_type}.
     */
    readonly vpcEndpointType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#vpc_id VpcEndpoint#vpc_id}.
     */
    readonly vpcId: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#timeouts VpcEndpoint#timeouts}
     */
    readonly timeouts?: VpcEndpointTimeouts;
}
export declare class VpcEndpointDnsEntry extends cdktf.ComplexComputedList {
    get dnsName(): string;
    get hostedZoneId(): string;
}
export interface VpcEndpointTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#create VpcEndpoint#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#delete VpcEndpoint#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#update VpcEndpoint#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html aws_vpc_endpoint}.
 */
export declare class VpcEndpoint extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html aws_vpc_endpoint} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpcEndpointConfig);
    get arn(): string;
    private _autoAccept?;
    get autoAccept(): boolean;
    set autoAccept(value: boolean);
    resetAutoAccept(): void;
    get autoAcceptInput(): boolean | undefined;
    get cidrBlocks(): string[];
    dnsEntry(index: string): VpcEndpointDnsEntry;
    get id(): string;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    get prefixListId(): string;
    private _privateDnsEnabled?;
    get privateDnsEnabled(): boolean;
    set privateDnsEnabled(value: boolean);
    resetPrivateDnsEnabled(): void;
    get privateDnsEnabledInput(): boolean | undefined;
    get requesterManaged(): boolean;
    private _routeTableIds?;
    get routeTableIds(): string[];
    set routeTableIds(value: string[]);
    resetRouteTableIds(): void;
    get routeTableIdsInput(): string[] | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _serviceName;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string;
    get state(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
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
    private _vpcEndpointType?;
    get vpcEndpointType(): string;
    set vpcEndpointType(value: string);
    resetVpcEndpointType(): void;
    get vpcEndpointTypeInput(): string | undefined;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _timeouts?;
    get timeouts(): VpcEndpointTimeouts;
    set timeouts(value: VpcEndpointTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): VpcEndpointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
