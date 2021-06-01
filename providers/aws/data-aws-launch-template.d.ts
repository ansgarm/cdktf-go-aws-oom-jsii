import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLaunchTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html#name DataAwsLaunchTemplate#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html#tags DataAwsLaunchTemplate#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html#filter DataAwsLaunchTemplate#filter}
     */
    readonly filter?: DataAwsLaunchTemplateFilter[];
}
export declare class DataAwsLaunchTemplateBlockDeviceMappingsEbs extends cdktf.ComplexComputedList {
    get deleteOnTermination(): string;
    get encrypted(): string;
    get iops(): number;
    get kmsKeyId(): string;
    get snapshotId(): string;
    get throughput(): number;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsLaunchTemplateBlockDeviceMappings extends cdktf.ComplexComputedList {
    get deviceName(): string;
    get ebs(): any;
    get noDevice(): string;
    get virtualName(): string;
}
export declare class DataAwsLaunchTemplateCreditSpecification extends cdktf.ComplexComputedList {
    get cpuCredits(): string;
}
export declare class DataAwsLaunchTemplateElasticGpuSpecifications extends cdktf.ComplexComputedList {
    get type(): string;
}
export declare class DataAwsLaunchTemplateEnclaveOptions extends cdktf.ComplexComputedList {
    get enabled(): boolean;
}
export declare class DataAwsLaunchTemplateHibernationOptions extends cdktf.ComplexComputedList {
    get configured(): boolean;
}
export declare class DataAwsLaunchTemplateIamInstanceProfile extends cdktf.ComplexComputedList {
    get arn(): string;
    get name(): string;
}
export declare class DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions extends cdktf.ComplexComputedList {
    get blockDurationMinutes(): number;
    get instanceInterruptionBehavior(): string;
    get maxPrice(): string;
    get spotInstanceType(): string;
    get validUntil(): string;
}
export declare class DataAwsLaunchTemplateInstanceMarketOptions extends cdktf.ComplexComputedList {
    get marketType(): string;
    get spotOptions(): any;
}
export declare class DataAwsLaunchTemplateMetadataOptions extends cdktf.ComplexComputedList {
    get httpEndpoint(): string;
    get httpPutResponseHopLimit(): number;
    get httpTokens(): string;
}
export declare class DataAwsLaunchTemplateMonitoring extends cdktf.ComplexComputedList {
    get enabled(): boolean;
}
export declare class DataAwsLaunchTemplateNetworkInterfaces extends cdktf.ComplexComputedList {
    get associateCarrierIpAddress(): string;
    get associatePublicIpAddress(): string;
    get deleteOnTermination(): string;
    get description(): string;
    get deviceIndex(): number;
    get ipv4AddressCount(): number;
    get ipv4Addresses(): string[];
    get ipv6AddressCount(): number;
    get ipv6Addresses(): string[];
    get networkInterfaceId(): string;
    get privateIpAddress(): string;
    get securityGroups(): string[];
    get subnetId(): string;
}
export declare class DataAwsLaunchTemplatePlacement extends cdktf.ComplexComputedList {
    get affinity(): string;
    get availabilityZone(): string;
    get groupName(): string;
    get hostId(): string;
    get hostResourceGroupArn(): string;
    get partitionNumber(): number;
    get spreadDomain(): string;
    get tenancy(): string;
}
export declare class DataAwsLaunchTemplateTagSpecifications extends cdktf.ComplexComputedList {
    get resourceType(): string;
    get tags(): any;
}
export interface DataAwsLaunchTemplateFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html#name DataAwsLaunchTemplate#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html#values DataAwsLaunchTemplate#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html aws_launch_template}.
 */
export declare class DataAwsLaunchTemplate extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/launch_template.html aws_launch_template} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsLaunchTemplateConfig);
    get arn(): string;
    blockDeviceMappings(index: string): DataAwsLaunchTemplateBlockDeviceMappings;
    creditSpecification(index: string): DataAwsLaunchTemplateCreditSpecification;
    get defaultVersion(): number;
    get description(): string;
    get disableApiTermination(): boolean;
    get ebsOptimized(): string;
    elasticGpuSpecifications(index: string): DataAwsLaunchTemplateElasticGpuSpecifications;
    enclaveOptions(index: string): DataAwsLaunchTemplateEnclaveOptions;
    hibernationOptions(index: string): DataAwsLaunchTemplateHibernationOptions;
    iamInstanceProfile(index: string): DataAwsLaunchTemplateIamInstanceProfile;
    get id(): string;
    get imageId(): string;
    get instanceInitiatedShutdownBehavior(): string;
    instanceMarketOptions(index: string): DataAwsLaunchTemplateInstanceMarketOptions;
    get instanceType(): string;
    get kernelId(): string;
    get keyName(): string;
    get latestVersion(): number;
    metadataOptions(index: string): DataAwsLaunchTemplateMetadataOptions;
    monitoring(index: string): DataAwsLaunchTemplateMonitoring;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    networkInterfaces(index: string): DataAwsLaunchTemplateNetworkInterfaces;
    placement(index: string): DataAwsLaunchTemplatePlacement;
    get ramDiskId(): string;
    get securityGroupNames(): string[];
    tagSpecifications(index: string): DataAwsLaunchTemplateTagSpecifications;
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
    get userData(): string;
    get vpcSecurityGroupIds(): string[];
    private _filter?;
    get filter(): DataAwsLaunchTemplateFilter[];
    set filter(value: DataAwsLaunchTemplateFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsLaunchTemplateFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
