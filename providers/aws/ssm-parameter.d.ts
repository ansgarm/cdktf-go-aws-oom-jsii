import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmParameterConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#allowed_pattern SsmParameter#allowed_pattern}.
     */
    readonly allowedPattern?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#data_type SsmParameter#data_type}.
     */
    readonly dataType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#description SsmParameter#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#key_id SsmParameter#key_id}.
     */
    readonly keyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#name SsmParameter#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#overwrite SsmParameter#overwrite}.
     */
    readonly overwrite?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#tags SsmParameter#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#tags_all SsmParameter#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#tier SsmParameter#tier}.
     */
    readonly tier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#type SsmParameter#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html#value SsmParameter#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html aws_ssm_parameter}.
 */
export declare class SsmParameter extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html aws_ssm_parameter} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SsmParameterConfig);
    private _allowedPattern?;
    get allowedPattern(): string;
    set allowedPattern(value: string);
    resetAllowedPattern(): void;
    get allowedPatternInput(): string | undefined;
    get arn(): string;
    private _dataType?;
    get dataType(): string;
    set dataType(value: string);
    resetDataType(): void;
    get dataTypeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    resetKeyId(): void;
    get keyIdInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _overwrite?;
    get overwrite(): boolean;
    set overwrite(value: boolean);
    resetOverwrite(): void;
    get overwriteInput(): boolean | undefined;
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
    private _tier?;
    get tier(): string;
    set tier(value: string);
    resetTier(): void;
    get tierInput(): string | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _value;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
    get version(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
