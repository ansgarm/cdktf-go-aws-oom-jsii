import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AmiConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#architecture Ami#architecture}.
     */
    readonly architecture?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#description Ami#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#ena_support Ami#ena_support}.
     */
    readonly enaSupport?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#image_location Ami#image_location}.
     */
    readonly imageLocation?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#kernel_id Ami#kernel_id}.
     */
    readonly kernelId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#name Ami#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#ramdisk_id Ami#ramdisk_id}.
     */
    readonly ramdiskId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#root_device_name Ami#root_device_name}.
     */
    readonly rootDeviceName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#sriov_net_support Ami#sriov_net_support}.
     */
    readonly sriovNetSupport?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#tags Ami#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#tags_all Ami#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#virtualization_type Ami#virtualization_type}.
     */
    readonly virtualizationType?: string;
    /**
     * ebs_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#ebs_block_device Ami#ebs_block_device}
     */
    readonly ebsBlockDevice?: AmiEbsBlockDevice[];
    /**
     * ephemeral_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#ephemeral_block_device Ami#ephemeral_block_device}
     */
    readonly ephemeralBlockDevice?: AmiEphemeralBlockDevice[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#timeouts Ami#timeouts}
     */
    readonly timeouts?: AmiTimeouts;
}
export interface AmiEbsBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#delete_on_termination Ami#delete_on_termination}.
     */
    readonly deleteOnTermination?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#device_name Ami#device_name}.
     */
    readonly deviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#encrypted Ami#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#iops Ami#iops}.
     */
    readonly iops?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#snapshot_id Ami#snapshot_id}.
     */
    readonly snapshotId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#throughput Ami#throughput}.
     */
    readonly throughput?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#volume_size Ami#volume_size}.
     */
    readonly volumeSize?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#volume_type Ami#volume_type}.
     */
    readonly volumeType?: string;
}
export interface AmiEphemeralBlockDevice {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#device_name Ami#device_name}.
     */
    readonly deviceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#virtual_name Ami#virtual_name}.
     */
    readonly virtualName: string;
}
export interface AmiTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#create Ami#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#delete Ami#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami.html#update Ami#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami.html aws_ami}.
 */
export declare class Ami extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami.html aws_ami} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AmiConfig);
    private _architecture?;
    get architecture(): string;
    set architecture(value: string);
    resetArchitecture(): void;
    get architectureInput(): string | undefined;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enaSupport?;
    get enaSupport(): boolean;
    set enaSupport(value: boolean);
    resetEnaSupport(): void;
    get enaSupportInput(): boolean | undefined;
    get hypervisor(): string;
    get id(): string;
    private _imageLocation?;
    get imageLocation(): string;
    set imageLocation(value: string);
    resetImageLocation(): void;
    get imageLocationInput(): string | undefined;
    get imageOwnerAlias(): string;
    get imageType(): string;
    private _kernelId?;
    get kernelId(): string;
    set kernelId(value: string);
    resetKernelId(): void;
    get kernelIdInput(): string | undefined;
    get manageEbsSnapshots(): boolean;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ownerId(): string;
    get platform(): string;
    get platformDetails(): string;
    get public(): boolean;
    private _ramdiskId?;
    get ramdiskId(): string;
    set ramdiskId(value: string);
    resetRamdiskId(): void;
    get ramdiskIdInput(): string | undefined;
    private _rootDeviceName?;
    get rootDeviceName(): string;
    set rootDeviceName(value: string);
    resetRootDeviceName(): void;
    get rootDeviceNameInput(): string | undefined;
    get rootSnapshotId(): string;
    private _sriovNetSupport?;
    get sriovNetSupport(): string;
    set sriovNetSupport(value: string);
    resetSriovNetSupport(): void;
    get sriovNetSupportInput(): string | undefined;
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
    get usageOperation(): string;
    private _virtualizationType?;
    get virtualizationType(): string;
    set virtualizationType(value: string);
    resetVirtualizationType(): void;
    get virtualizationTypeInput(): string | undefined;
    private _ebsBlockDevice?;
    get ebsBlockDevice(): AmiEbsBlockDevice[];
    set ebsBlockDevice(value: AmiEbsBlockDevice[]);
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): AmiEbsBlockDevice[] | undefined;
    private _ephemeralBlockDevice?;
    get ephemeralBlockDevice(): AmiEphemeralBlockDevice[];
    set ephemeralBlockDevice(value: AmiEphemeralBlockDevice[]);
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): AmiEphemeralBlockDevice[] | undefined;
    private _timeouts?;
    get timeouts(): AmiTimeouts;
    set timeouts(value: AmiTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): AmiTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
