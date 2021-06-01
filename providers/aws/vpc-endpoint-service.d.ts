import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcEndpointServiceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#acceptance_required VpcEndpointService#acceptance_required}.
     */
    readonly acceptanceRequired: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#allowed_principals VpcEndpointService#allowed_principals}.
     */
    readonly allowedPrincipals?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#gateway_load_balancer_arns VpcEndpointService#gateway_load_balancer_arns}.
     */
    readonly gatewayLoadBalancerArns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#network_load_balancer_arns VpcEndpointService#network_load_balancer_arns}.
     */
    readonly networkLoadBalancerArns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#private_dns_name VpcEndpointService#private_dns_name}.
     */
    readonly privateDnsName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#tags VpcEndpointService#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html#tags_all VpcEndpointService#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
export declare class VpcEndpointServicePrivateDnsNameConfiguration extends cdktf.ComplexComputedList {
    get name(): string;
    get state(): string;
    get type(): string;
    get value(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service}.
 */
export declare class VpcEndpointService extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_service.html aws_vpc_endpoint_service} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpcEndpointServiceConfig);
    private _acceptanceRequired;
    get acceptanceRequired(): boolean;
    set acceptanceRequired(value: boolean);
    get acceptanceRequiredInput(): boolean;
    private _allowedPrincipals?;
    get allowedPrincipals(): string[];
    set allowedPrincipals(value: string[]);
    resetAllowedPrincipals(): void;
    get allowedPrincipalsInput(): string[] | undefined;
    get arn(): string;
    get availabilityZones(): string[];
    get baseEndpointDnsNames(): string[];
    private _gatewayLoadBalancerArns?;
    get gatewayLoadBalancerArns(): string[];
    set gatewayLoadBalancerArns(value: string[]);
    resetGatewayLoadBalancerArns(): void;
    get gatewayLoadBalancerArnsInput(): string[] | undefined;
    get id(): string;
    get managesVpcEndpoints(): boolean;
    private _networkLoadBalancerArns?;
    get networkLoadBalancerArns(): string[];
    set networkLoadBalancerArns(value: string[]);
    resetNetworkLoadBalancerArns(): void;
    get networkLoadBalancerArnsInput(): string[] | undefined;
    private _privateDnsName?;
    get privateDnsName(): string;
    set privateDnsName(value: string);
    resetPrivateDnsName(): void;
    get privateDnsNameInput(): string | undefined;
    privateDnsNameConfiguration(index: string): VpcEndpointServicePrivateDnsNameConfiguration;
    get serviceName(): string;
    get serviceType(): string;
    get state(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
