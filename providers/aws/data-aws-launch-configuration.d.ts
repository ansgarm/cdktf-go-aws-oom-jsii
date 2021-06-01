import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLaunchConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html#name DataAwsLaunchConfiguration#name}.
     */
    readonly name: string;
}
export declare class DataAwsLaunchConfigurationEbsBlockDevice extends cdktf.ComplexComputedList {
    get deleteOnTermination(): boolean;
    get deviceName(): string;
    get encrypted(): boolean;
    get iops(): number;
    get noDevice(): boolean;
    get snapshotId(): string;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsLaunchConfigurationEphemeralBlockDevice extends cdktf.ComplexComputedList {
    get deviceName(): string;
    get virtualName(): string;
}
export declare class DataAwsLaunchConfigurationMetadataOptions extends cdktf.ComplexComputedList {
    get httpEndpoint(): string;
    get httpPutResponseHopLimit(): number;
    get httpTokens(): string;
}
export declare class DataAwsLaunchConfigurationRootBlockDevice extends cdktf.ComplexComputedList {
    get deleteOnTermination(): boolean;
    get encrypted(): boolean;
    get iops(): number;
    get volumeSize(): number;
    get volumeType(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration}.
 */
export declare class DataAwsLaunchConfiguration extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/launch_configuration.html aws_launch_configuration} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsLaunchConfigurationConfig);
    get arn(): string;
    get associatePublicIpAddress(): boolean;
    ebsBlockDevice(index: string): DataAwsLaunchConfigurationEbsBlockDevice;
    get ebsOptimized(): boolean;
    get enableMonitoring(): boolean;
    ephemeralBlockDevice(index: string): DataAwsLaunchConfigurationEphemeralBlockDevice;
    get iamInstanceProfile(): string;
    get id(): string;
    get imageId(): string;
    get instanceType(): string;
    get keyName(): string;
    metadataOptions(index: string): DataAwsLaunchConfigurationMetadataOptions;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get placementTenancy(): string;
    rootBlockDevice(index: string): DataAwsLaunchConfigurationRootBlockDevice;
    get securityGroups(): string[];
    get spotPrice(): string;
    get userData(): string;
    get vpcClassicLinkId(): string;
    get vpcClassicLinkSecurityGroups(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
