import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#get_password_data DataAwsInstance#get_password_data}.
     */
    readonly fetchPasswordData?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#get_user_data DataAwsInstance#get_user_data}.
     */
    readonly fetchUserData?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#instance_id DataAwsInstance#instance_id}.
     */
    readonly instanceId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#instance_tags DataAwsInstance#instance_tags}.
     */
    readonly instanceTags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#tags DataAwsInstance#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#filter DataAwsInstance#filter}
     */
    readonly filter?: DataAwsInstanceFilter[];
}
export declare class DataAwsInstanceCreditSpecification extends cdktf.ComplexComputedList {
    get cpuCredits(): string;
}
export declare class DataAwsInstanceEbsBlockDevice extends cdktf.ComplexComputedList {
    get deleteOnTermination(): boolean;
    get deviceName(): string;
    get encrypted(): boolean;
    get iops(): number;
    get kmsKeyId(): string;
    get snapshotId(): string;
    get tags(): any;
    get throughput(): number;
    get volumeId(): string;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsInstanceEnclaveOptions extends cdktf.ComplexComputedList {
    get enabled(): boolean;
}
export declare class DataAwsInstanceEphemeralBlockDevice extends cdktf.ComplexComputedList {
    get deviceName(): string;
    get noDevice(): boolean;
    get virtualName(): string;
}
export declare class DataAwsInstanceMetadataOptions extends cdktf.ComplexComputedList {
    get httpEndpoint(): string;
    get httpPutResponseHopLimit(): number;
    get httpTokens(): string;
}
export declare class DataAwsInstanceRootBlockDevice extends cdktf.ComplexComputedList {
    get deleteOnTermination(): boolean;
    get deviceName(): string;
    get encrypted(): boolean;
    get iops(): number;
    get kmsKeyId(): string;
    get tags(): any;
    get throughput(): number;
    get volumeId(): string;
    get volumeSize(): number;
    get volumeType(): string;
}
export interface DataAwsInstanceFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#name DataAwsInstance#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/instance.html#values DataAwsInstance#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/instance.html aws_instance}.
 */
export declare class DataAwsInstance extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/instance.html aws_instance} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsInstanceConfig);
    get ami(): string;
    get arn(): string;
    get associatePublicIpAddress(): boolean;
    get availabilityZone(): string;
    creditSpecification(index: string): DataAwsInstanceCreditSpecification;
    get disableApiTermination(): boolean;
    ebsBlockDevice(index: string): DataAwsInstanceEbsBlockDevice;
    get ebsOptimized(): boolean;
    enclaveOptions(index: string): DataAwsInstanceEnclaveOptions;
    ephemeralBlockDevice(index: string): DataAwsInstanceEphemeralBlockDevice;
    private _getPasswordData?;
    get fetchPasswordData(): boolean;
    set fetchPasswordData(value: boolean);
    resetFetchPasswordData(): void;
    get fetchPasswordDataInput(): boolean | undefined;
    private _getUserData?;
    get fetchUserData(): boolean;
    set fetchUserData(value: boolean);
    resetFetchUserData(): void;
    get fetchUserDataInput(): boolean | undefined;
    get hostId(): string;
    get iamInstanceProfile(): string;
    get id(): string;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string | undefined;
    get instanceState(): string;
    private _instanceTags?;
    get instanceTags(): {
        [key: string]: string;
    };
    set instanceTags(value: {
        [key: string]: string;
    });
    resetInstanceTags(): void;
    get instanceTagsInput(): {
        [key: string]: string;
    } | undefined;
    get instanceType(): string;
    get keyName(): string;
    metadataOptions(index: string): DataAwsInstanceMetadataOptions;
    get monitoring(): boolean;
    get networkInterfaceId(): string;
    get outpostArn(): string;
    get passwordData(): string;
    get placementGroup(): string;
    get privateDns(): string;
    get privateIp(): string;
    get publicDns(): string;
    get publicIp(): string;
    rootBlockDevice(index: string): DataAwsInstanceRootBlockDevice;
    get secondaryPrivateIps(): string[];
    get securityGroups(): string[];
    get sourceDestCheck(): boolean;
    get subnetId(): string;
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
    get tenancy(): string;
    get userData(): string;
    get userDataBase64(): string;
    get vpcSecurityGroupIds(): string[];
    private _filter?;
    get filter(): DataAwsInstanceFilter[];
    set filter(value: DataAwsInstanceFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsInstanceFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
