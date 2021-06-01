import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServiceDiscoveryServiceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#description ServiceDiscoveryService#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#name ServiceDiscoveryService#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#namespace_id ServiceDiscoveryService#namespace_id}.
     */
    readonly namespaceId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#tags ServiceDiscoveryService#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#tags_all ServiceDiscoveryService#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * dns_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#dns_config ServiceDiscoveryService#dns_config}
     */
    readonly dnsConfig?: ServiceDiscoveryServiceDnsConfig[];
    /**
     * health_check_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#health_check_config ServiceDiscoveryService#health_check_config}
     */
    readonly healthCheckConfig?: ServiceDiscoveryServiceHealthCheckConfig[];
    /**
     * health_check_custom_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#health_check_custom_config ServiceDiscoveryService#health_check_custom_config}
     */
    readonly healthCheckCustomConfig?: ServiceDiscoveryServiceHealthCheckCustomConfig[];
}
export interface ServiceDiscoveryServiceDnsConfigDnsRecords {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#ttl ServiceDiscoveryService#ttl}.
     */
    readonly ttl: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#type ServiceDiscoveryService#type}.
     */
    readonly type: string;
}
export interface ServiceDiscoveryServiceDnsConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#namespace_id ServiceDiscoveryService#namespace_id}.
     */
    readonly namespaceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#routing_policy ServiceDiscoveryService#routing_policy}.
     */
    readonly routingPolicy?: string;
    /**
     * dns_records block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#dns_records ServiceDiscoveryService#dns_records}
     */
    readonly dnsRecords: ServiceDiscoveryServiceDnsConfigDnsRecords[];
}
export interface ServiceDiscoveryServiceHealthCheckConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#failure_threshold ServiceDiscoveryService#failure_threshold}.
     */
    readonly failureThreshold?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#resource_path ServiceDiscoveryService#resource_path}.
     */
    readonly resourcePath?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#type ServiceDiscoveryService#type}.
     */
    readonly type?: string;
}
export interface ServiceDiscoveryServiceHealthCheckCustomConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#failure_threshold ServiceDiscoveryService#failure_threshold}.
     */
    readonly failureThreshold?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html aws_service_discovery_service}.
 */
export declare class ServiceDiscoveryService extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html aws_service_discovery_service} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ServiceDiscoveryServiceConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _namespaceId?;
    get namespaceId(): string;
    set namespaceId(value: string);
    resetNamespaceId(): void;
    get namespaceIdInput(): string | undefined;
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
    private _dnsConfig?;
    get dnsConfig(): ServiceDiscoveryServiceDnsConfig[];
    set dnsConfig(value: ServiceDiscoveryServiceDnsConfig[]);
    resetDnsConfig(): void;
    get dnsConfigInput(): ServiceDiscoveryServiceDnsConfig[] | undefined;
    private _healthCheckConfig?;
    get healthCheckConfig(): ServiceDiscoveryServiceHealthCheckConfig[];
    set healthCheckConfig(value: ServiceDiscoveryServiceHealthCheckConfig[]);
    resetHealthCheckConfig(): void;
    get healthCheckConfigInput(): ServiceDiscoveryServiceHealthCheckConfig[] | undefined;
    private _healthCheckCustomConfig?;
    get healthCheckCustomConfig(): ServiceDiscoveryServiceHealthCheckCustomConfig[];
    set healthCheckCustomConfig(value: ServiceDiscoveryServiceHealthCheckCustomConfig[]);
    resetHealthCheckCustomConfig(): void;
    get healthCheckCustomConfigInput(): ServiceDiscoveryServiceHealthCheckCustomConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
