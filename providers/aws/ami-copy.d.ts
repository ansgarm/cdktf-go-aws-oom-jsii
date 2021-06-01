import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AmiCopyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#description AmiCopy#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#destination_outpost_arn AmiCopy#destination_outpost_arn}.
     */
    readonly destinationOutpostArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#encrypted AmiCopy#encrypted}.
     */
    readonly encrypted?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#kms_key_id AmiCopy#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#name AmiCopy#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#source_ami_id AmiCopy#source_ami_id}.
     */
    readonly sourceAmiId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#source_ami_region AmiCopy#source_ami_region}.
     */
    readonly sourceAmiRegion: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#tags AmiCopy#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#tags_all AmiCopy#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * ebs_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#ebs_block_device AmiCopy#ebs_block_device}
     */
    readonly ebsBlockDevice?: AmiCopyEbsBlockDevice[];
    /**
     * ephemeral_block_device block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#ephemeral_block_device AmiCopy#ephemeral_block_device}
     */
    readonly ephemeralBlockDevice?: AmiCopyEphemeralBlockDevice[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#timeouts AmiCopy#timeouts}
     */
    readonly timeouts?: AmiCopyTimeouts;
}
export interface AmiCopyEbsBlockDevice {
}
export interface AmiCopyEphemeralBlockDevice {
}
export interface AmiCopyTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#create AmiCopy#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#delete AmiCopy#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html#update AmiCopy#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html aws_ami_copy}.
 */
export declare class AmiCopy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ami_copy.html aws_ami_copy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AmiCopyConfig);
    get architecture(): string;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _destinationOutpostArn?;
    get destinationOutpostArn(): string;
    set destinationOutpostArn(value: string);
    resetDestinationOutpostArn(): void;
    get destinationOutpostArnInput(): string | undefined;
    get enaSupport(): boolean;
    private _encrypted?;
    get encrypted(): boolean;
    set encrypted(value: boolean);
    resetEncrypted(): void;
    get encryptedInput(): boolean | undefined;
    get hypervisor(): string;
    get id(): string;
    get imageLocation(): string;
    get imageOwnerAlias(): string;
    get imageType(): string;
    get kernelId(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
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
    private _sourceAmiId;
    get sourceAmiId(): string;
    set sourceAmiId(value: string);
    get sourceAmiIdInput(): string;
    private _sourceAmiRegion;
    get sourceAmiRegion(): string;
    set sourceAmiRegion(value: string);
    get sourceAmiRegionInput(): string;
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
    get ebsBlockDevice(): AmiCopyEbsBlockDevice[];
    set ebsBlockDevice(value: AmiCopyEbsBlockDevice[]);
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): AmiCopyEbsBlockDevice[] | undefined;
    private _ephemeralBlockDevice?;
    get ephemeralBlockDevice(): AmiCopyEphemeralBlockDevice[];
    set ephemeralBlockDevice(value: AmiCopyEphemeralBlockDevice[]);
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): AmiCopyEphemeralBlockDevice[] | undefined;
    private _timeouts?;
    get timeouts(): AmiCopyTimeouts;
    set timeouts(value: AmiCopyTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): AmiCopyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
