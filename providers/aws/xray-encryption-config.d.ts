import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface XrayEncryptionConfigConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_encryption_config.html#key_id XrayEncryptionConfig#key_id}.
     */
    readonly keyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/xray_encryption_config.html#type XrayEncryptionConfig#type}.
     */
    readonly type: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/xray_encryption_config.html aws_xray_encryption_config}.
 */
export declare class XrayEncryptionConfig extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/xray_encryption_config.html aws_xray_encryption_config} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: XrayEncryptionConfigConfig);
    get id(): string;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    resetKeyId(): void;
    get keyIdInput(): string | undefined;
    private _type;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
