import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EbsSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#description EbsSnapshot#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#tags EbsSnapshot#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#tags_all EbsSnapshot#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#volume_id EbsSnapshot#volume_id}.
     */
    readonly volumeId: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#timeouts EbsSnapshot#timeouts}
     */
    readonly timeouts?: EbsSnapshotTimeouts;
}
export interface EbsSnapshotTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#create EbsSnapshot#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html#delete EbsSnapshot#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html aws_ebs_snapshot}.
 */
export declare class EbsSnapshot extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ebs_snapshot.html aws_ebs_snapshot} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EbsSnapshotConfig);
    get arn(): string;
    get dataEncryptionKeyId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get encrypted(): boolean;
    get id(): string;
    get kmsKeyId(): string;
    get ownerAlias(): string;
    get ownerId(): string;
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
    private _volumeId;
    get volumeId(): string;
    set volumeId(value: string);
    get volumeIdInput(): string;
    get volumeSize(): number;
    private _timeouts?;
    get timeouts(): EbsSnapshotTimeouts;
    set timeouts(value: EbsSnapshotTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): EbsSnapshotTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
