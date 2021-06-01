import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MediaPackageChannelConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html#channel_id MediaPackageChannel#channel_id}.
     */
    readonly channelId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html#description MediaPackageChannel#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html#tags MediaPackageChannel#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html#tags_all MediaPackageChannel#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
export declare class MediaPackageChannelHlsIngestIngestEndpoints extends cdktf.ComplexComputedList {
    get password(): string;
    get url(): string;
    get username(): string;
}
export declare class MediaPackageChannelHlsIngest extends cdktf.ComplexComputedList {
    get ingestEndpoints(): any;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html aws_media_package_channel}.
 */
export declare class MediaPackageChannel extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html aws_media_package_channel} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: MediaPackageChannelConfig);
    get arn(): string;
    private _channelId;
    get channelId(): string;
    set channelId(value: string);
    get channelIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    hlsIngest(index: string): MediaPackageChannelHlsIngest;
    get id(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
