import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KeyPairConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html#key_name KeyPair#key_name}.
     */
    readonly keyName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html#key_name_prefix KeyPair#key_name_prefix}.
     */
    readonly keyNamePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html#public_key KeyPair#public_key}.
     */
    readonly publicKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html#tags KeyPair#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html#tags_all KeyPair#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html aws_key_pair}.
 */
export declare class KeyPair extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/key_pair.html aws_key_pair} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: KeyPairConfig);
    get arn(): string;
    get fingerprint(): string;
    get id(): string;
    private _keyName?;
    get keyName(): string;
    set keyName(value: string);
    resetKeyName(): void;
    get keyNameInput(): string | undefined;
    private _keyNamePrefix?;
    get keyNamePrefix(): string;
    set keyNamePrefix(value: string);
    resetKeyNamePrefix(): void;
    get keyNamePrefixInput(): string | undefined;
    get keyPairId(): string;
    private _publicKey;
    get publicKey(): string;
    set publicKey(value: string);
    get publicKeyInput(): string;
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
