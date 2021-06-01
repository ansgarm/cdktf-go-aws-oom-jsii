import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElastictranscoderPresetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#container ElastictranscoderPreset#container}.
     */
    readonly container: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#description ElastictranscoderPreset#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#name ElastictranscoderPreset#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#type ElastictranscoderPreset#type}.
     */
    readonly type?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#video_codec_options ElastictranscoderPreset#video_codec_options}.
     */
    readonly videoCodecOptions?: {
        [key: string]: string;
    };
    /**
     * audio block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#audio ElastictranscoderPreset#audio}
     */
    readonly audio?: ElastictranscoderPresetAudio[];
    /**
     * audio_codec_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#audio_codec_options ElastictranscoderPreset#audio_codec_options}
     */
    readonly audioCodecOptions?: ElastictranscoderPresetAudioCodecOptions[];
    /**
     * thumbnails block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#thumbnails ElastictranscoderPreset#thumbnails}
     */
    readonly thumbnails?: ElastictranscoderPresetThumbnails[];
    /**
     * video block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#video ElastictranscoderPreset#video}
     */
    readonly video?: ElastictranscoderPresetVideo[];
    /**
     * video_watermarks block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#video_watermarks ElastictranscoderPreset#video_watermarks}
     */
    readonly videoWatermarks?: ElastictranscoderPresetVideoWatermarks[];
}
export interface ElastictranscoderPresetAudio {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}.
     */
    readonly audioPackingMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_rate ElastictranscoderPreset#bit_rate}.
     */
    readonly bitRate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#channels ElastictranscoderPreset#channels}.
     */
    readonly channels?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#codec ElastictranscoderPreset#codec}.
     */
    readonly codec?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sample_rate ElastictranscoderPreset#sample_rate}.
     */
    readonly sampleRate?: string;
}
export interface ElastictranscoderPresetAudioCodecOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_depth ElastictranscoderPreset#bit_depth}.
     */
    readonly bitDepth?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_order ElastictranscoderPreset#bit_order}.
     */
    readonly bitOrder?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#profile ElastictranscoderPreset#profile}.
     */
    readonly profile?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#signed ElastictranscoderPreset#signed}.
     */
    readonly signed?: string;
}
export interface ElastictranscoderPresetThumbnails {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#aspect_ratio ElastictranscoderPreset#aspect_ratio}.
     */
    readonly aspectRatio?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#format ElastictranscoderPreset#format}.
     */
    readonly format?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#interval ElastictranscoderPreset#interval}.
     */
    readonly interval?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_height ElastictranscoderPreset#max_height}.
     */
    readonly maxHeight?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_width ElastictranscoderPreset#max_width}.
     */
    readonly maxWidth?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#padding_policy ElastictranscoderPreset#padding_policy}.
     */
    readonly paddingPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#resolution ElastictranscoderPreset#resolution}.
     */
    readonly resolution?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sizing_policy ElastictranscoderPreset#sizing_policy}.
     */
    readonly sizingPolicy?: string;
}
export interface ElastictranscoderPresetVideo {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#aspect_ratio ElastictranscoderPreset#aspect_ratio}.
     */
    readonly aspectRatio?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_rate ElastictranscoderPreset#bit_rate}.
     */
    readonly bitRate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#codec ElastictranscoderPreset#codec}.
     */
    readonly codec?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}.
     */
    readonly displayAspectRatio?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#fixed_gop ElastictranscoderPreset#fixed_gop}.
     */
    readonly fixedGop?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#frame_rate ElastictranscoderPreset#frame_rate}.
     */
    readonly frameRate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}.
     */
    readonly keyframesMaxDist?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_frame_rate ElastictranscoderPreset#max_frame_rate}.
     */
    readonly maxFrameRate?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_height ElastictranscoderPreset#max_height}.
     */
    readonly maxHeight?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_width ElastictranscoderPreset#max_width}.
     */
    readonly maxWidth?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#padding_policy ElastictranscoderPreset#padding_policy}.
     */
    readonly paddingPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#resolution ElastictranscoderPreset#resolution}.
     */
    readonly resolution?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sizing_policy ElastictranscoderPreset#sizing_policy}.
     */
    readonly sizingPolicy?: string;
}
export interface ElastictranscoderPresetVideoWatermarks {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#horizontal_align ElastictranscoderPreset#horizontal_align}.
     */
    readonly horizontalAlign?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#horizontal_offset ElastictranscoderPreset#horizontal_offset}.
     */
    readonly horizontalOffset?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#id ElastictranscoderPreset#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_height ElastictranscoderPreset#max_height}.
     */
    readonly maxHeight?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_width ElastictranscoderPreset#max_width}.
     */
    readonly maxWidth?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#opacity ElastictranscoderPreset#opacity}.
     */
    readonly opacity?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sizing_policy ElastictranscoderPreset#sizing_policy}.
     */
    readonly sizingPolicy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#target ElastictranscoderPreset#target}.
     */
    readonly target?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#vertical_align ElastictranscoderPreset#vertical_align}.
     */
    readonly verticalAlign?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#vertical_offset ElastictranscoderPreset#vertical_offset}.
     */
    readonly verticalOffset?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html aws_elastictranscoder_preset}.
 */
export declare class ElastictranscoderPreset extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html aws_elastictranscoder_preset} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ElastictranscoderPresetConfig);
    get arn(): string;
    private _container;
    get container(): string;
    set container(value: string);
    get containerInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _videoCodecOptions?;
    get videoCodecOptions(): {
        [key: string]: string;
    };
    set videoCodecOptions(value: {
        [key: string]: string;
    });
    resetVideoCodecOptions(): void;
    get videoCodecOptionsInput(): {
        [key: string]: string;
    } | undefined;
    private _audio?;
    get audio(): ElastictranscoderPresetAudio[];
    set audio(value: ElastictranscoderPresetAudio[]);
    resetAudio(): void;
    get audioInput(): ElastictranscoderPresetAudio[] | undefined;
    private _audioCodecOptions?;
    get audioCodecOptions(): ElastictranscoderPresetAudioCodecOptions[];
    set audioCodecOptions(value: ElastictranscoderPresetAudioCodecOptions[]);
    resetAudioCodecOptions(): void;
    get audioCodecOptionsInput(): ElastictranscoderPresetAudioCodecOptions[] | undefined;
    private _thumbnails?;
    get thumbnails(): ElastictranscoderPresetThumbnails[];
    set thumbnails(value: ElastictranscoderPresetThumbnails[]);
    resetThumbnails(): void;
    get thumbnailsInput(): ElastictranscoderPresetThumbnails[] | undefined;
    private _video?;
    get video(): ElastictranscoderPresetVideo[];
    set video(value: ElastictranscoderPresetVideo[]);
    resetVideo(): void;
    get videoInput(): ElastictranscoderPresetVideo[] | undefined;
    private _videoWatermarks?;
    get videoWatermarks(): ElastictranscoderPresetVideoWatermarks[];
    set videoWatermarks(value: ElastictranscoderPresetVideoWatermarks[]);
    resetVideoWatermarks(): void;
    get videoWatermarksInput(): ElastictranscoderPresetVideoWatermarks[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
