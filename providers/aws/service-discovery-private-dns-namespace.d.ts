import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServiceDiscoveryPrivateDnsNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html#description ServiceDiscoveryPrivateDnsNamespace#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html#name ServiceDiscoveryPrivateDnsNamespace#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html#tags ServiceDiscoveryPrivateDnsNamespace#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html#tags_all ServiceDiscoveryPrivateDnsNamespace#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html#vpc ServiceDiscoveryPrivateDnsNamespace#vpc}.
     */
    readonly vpc: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html aws_service_discovery_private_dns_namespace}.
 */
export declare class ServiceDiscoveryPrivateDnsNamespace extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html aws_service_discovery_private_dns_namespace} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ServiceDiscoveryPrivateDnsNamespaceConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get hostedZone(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _vpc;
    get vpc(): string;
    set vpc(value: string);
    get vpcInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
