import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AmiFromInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#description AmiFromInstance#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#name AmiFromInstance#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#snapshot_without_reboot AmiFromInstance#snapshot_without_reboot}.
     */
    readonly snapshotWithoutReboot?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#source_instance_id AmiFromInstance#source_instance_id}.
     */
    readonly sourceInstanceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#tags AmiFromInstance#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#tags_all AmiFromInstance#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * ebs_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#ebs_block_device AmiFromInstance#ebs_block_device}
     */
    readonly ebsBlockDevice?: AmiFromInstanceEbsBlockDevice[];
    /**
     * ephemeral_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#ephemeral_block_device AmiFromInstance#ephemeral_block_device}
     */
    readonly ephemeralBlockDevice?: AmiFromInstanceEphemeralBlockDevice[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#timeouts AmiFromInstance#timeouts}
     */
    readonly timeouts?: AmiFromInstanceTimeouts;
}
export interface AmiFromInstanceEbsBlockDevice {
}
export interface AmiFromInstanceEphemeralBlockDevice {
}
export interface AmiFromInstanceTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#create AmiFromInstance#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#delete AmiFromInstance#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html#update AmiFromInstance#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html aws_ami_from_instance}.
 */
export declare class AmiFromInstance extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_from_instance.html aws_ami_from_instance} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AmiFromInstanceConfig);
    get architecture(): string;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get enaSupport(): boolean;
    get hypervisor(): string;
    get id(): string;
    get imageLocation(): string;
    get imageOwnerAlias(): string;
    get imageType(): string;
    get kernelId(): string;
    get manageEbsSnapshots(): boolean;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ownerId(): string;
    get platform(): string;
    get platformDetails(): string;
    get public(): boolean;
    get ramdiskId(): string;
    get rootDeviceName(): string;
    get rootSnapshotId(): string;
    private _snapshotWithoutReboot?;
    get snapshotWithoutReboot(): boolean;
    set snapshotWithoutReboot(value: boolean);
    resetSnapshotWithoutReboot(): void;
    get snapshotWithoutRebootInput(): boolean | undefined;
    private _sourceInstanceId;
    get sourceInstanceId(): string;
    set sourceInstanceId(value: string);
    get sourceInstanceIdInput(): string;
    get sriovNetSupport(): string;
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
    get virtualizationType(): string;
    private _ebsBlockDevice?;
    get ebsBlockDevice(): AmiFromInstanceEbsBlockDevice[];
    set ebsBlockDevice(value: AmiFromInstanceEbsBlockDevice[]);
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): AmiFromInstanceEbsBlockDevice[] | undefined;
    private _ephemeralBlockDevice?;
    get ephemeralBlockDevice(): AmiFromInstanceEphemeralBlockDevice[];
    set ephemeralBlockDevice(value: AmiFromInstanceEphemeralBlockDevice[]);
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): AmiFromInstanceEphemeralBlockDevice[] | undefined;
    private _timeouts?;
    get timeouts(): AmiFromInstanceTimeouts;
    set timeouts(value: AmiFromInstanceTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): AmiFromInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
