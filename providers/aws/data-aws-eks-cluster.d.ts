import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEksClusterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html#name DataAwsEksCluster#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html#tags DataAwsEksCluster#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsEksClusterCertificateAuthority extends cdktf.ComplexComputedList {
    get data(): string;
}
export declare class DataAwsEksClusterIdentityOidc extends cdktf.ComplexComputedList {
    get issuer(): string;
}
export declare class DataAwsEksClusterIdentity extends cdktf.ComplexComputedList {
    get oidc(): any;
}
export declare class DataAwsEksClusterKubernetesNetworkConfig extends cdktf.ComplexComputedList {
    get serviceIpv4Cidr(): string;
}
export declare class DataAwsEksClusterVpcConfig extends cdktf.ComplexComputedList {
    get clusterSecurityGroupId(): string;
    get endpointPrivateAccess(): boolean;
    get endpointPublicAccess(): boolean;
    get publicAccessCidrs(): string[];
    get securityGroupIds(): string[];
    get subnetIds(): string[];
    get vpcId(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster}.
 */
export declare class DataAwsEksCluster extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsEksClusterConfig);
    get arn(): string;
    certificateAuthority(index: string): DataAwsEksClusterCertificateAuthority;
    get createdAt(): string;
    get enabledClusterLogTypes(): string[];
    get endpoint(): string;
    get id(): string;
    identity(index: string): DataAwsEksClusterIdentity;
    kubernetesNetworkConfig(index: string): DataAwsEksClusterKubernetesNetworkConfig;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get platformVersion(): string;
    get roleArn(): string;
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
    get version(): string;
    vpcConfig(index: string): DataAwsEksClusterVpcConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
