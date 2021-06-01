import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}.
     */
    readonly enabledClusterLogTypes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#name EksCluster#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#role_arn EksCluster#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#tags EksCluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#tags_all EksCluster#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#version EksCluster#version}.
     */
    readonly version?: string;
    /**
     * encryption_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#encryption_config EksCluster#encryption_config}
     */
    readonly encryptionConfig?: EksClusterEncryptionConfig[];
    /**
     * kubernetes_network_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#kubernetes_network_config EksCluster#kubernetes_network_config}
     */
    readonly kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#timeouts EksCluster#timeouts}
     */
    readonly timeouts?: EksClusterTimeouts;
    /**
     * vpc_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#vpc_config EksCluster#vpc_config}
     */
    readonly vpcConfig: EksClusterVpcConfig[];
}
export declare class EksClusterCertificateAuthority extends cdktf.ComplexComputedList {
    get data(): string;
}
export declare class EksClusterIdentityOidc extends cdktf.ComplexComputedList {
    get issuer(): string;
}
export declare class EksClusterIdentity extends cdktf.ComplexComputedList {
    get oidc(): any;
}
export interface EksClusterEncryptionConfigProvider {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#key_arn EksCluster#key_arn}.
     */
    readonly keyArn: string;
}
export interface EksClusterEncryptionConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#resources EksCluster#resources}.
     */
    readonly resources: string[];
    /**
     * provider block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#provider EksCluster#provider}
     */
    readonly provider: EksClusterEncryptionConfigProvider[];
}
export interface EksClusterKubernetesNetworkConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#service_ipv4_cidr EksCluster#service_ipv4_cidr}.
     */
    readonly serviceIpv4Cidr?: string;
}
export interface EksClusterTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#create EksCluster#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#delete EksCluster#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#update EksCluster#update}.
     */
    readonly update?: string;
}
export interface EksClusterVpcConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#endpoint_private_access EksCluster#endpoint_private_access}.
     */
    readonly endpointPrivateAccess?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#endpoint_public_access EksCluster#endpoint_public_access}.
     */
    readonly endpointPublicAccess?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#public_access_cidrs EksCluster#public_access_cidrs}.
     */
    readonly publicAccessCidrs?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#security_group_ids EksCluster#security_group_ids}.
     */
    readonly securityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#subnet_ids EksCluster#subnet_ids}.
     */
    readonly subnetIds: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster}.
 */
export declare class EksCluster extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EksClusterConfig);
    get arn(): string;
    certificateAuthority(index: string): EksClusterCertificateAuthority;
    get createdAt(): string;
    private _enabledClusterLogTypes?;
    get enabledClusterLogTypes(): string[];
    set enabledClusterLogTypes(value: string[]);
    resetEnabledClusterLogTypes(): void;
    get enabledClusterLogTypesInput(): string[] | undefined;
    get endpoint(): string;
    get id(): string;
    identity(index: string): EksClusterIdentity;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get platformVersion(): string;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    get status(): string;
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
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _encryptionConfig?;
    get encryptionConfig(): EksClusterEncryptionConfig[];
    set encryptionConfig(value: EksClusterEncryptionConfig[]);
    resetEncryptionConfig(): void;
    get encryptionConfigInput(): EksClusterEncryptionConfig[] | undefined;
    private _kubernetesNetworkConfig?;
    get kubernetesNetworkConfig(): EksClusterKubernetesNetworkConfig[];
    set kubernetesNetworkConfig(value: EksClusterKubernetesNetworkConfig[]);
    resetKubernetesNetworkConfig(): void;
    get kubernetesNetworkConfigInput(): EksClusterKubernetesNetworkConfig[] | undefined;
    private _timeouts?;
    get timeouts(): EksClusterTimeouts;
    set timeouts(value: EksClusterTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): EksClusterTimeouts | undefined;
    private _vpcConfig;
    get vpcConfig(): EksClusterVpcConfig[];
    set vpcConfig(value: EksClusterVpcConfig[]);
    get vpcConfigInput(): EksClusterVpcConfig[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
