import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailKeyPairConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html#name LightsailKeyPair#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html#name_prefix LightsailKeyPair#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html#pgp_key LightsailKeyPair#pgp_key}.
     */
    readonly pgpKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html#public_key LightsailKeyPair#public_key}.
     */
    readonly publicKey?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html aws_lightsail_key_pair}.
 */
export declare class LightsailKeyPair extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_key_pair.html aws_lightsail_key_pair} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: LightsailKeyPairConfig);
    get arn(): string;
    get encryptedFingerprint(): string;
    get encryptedPrivateKey(): string;
    get fingerprint(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _pgpKey?;
    get pgpKey(): string;
    set pgpKey(value: string);
    resetPgpKey(): void;
    get pgpKeyInput(): string | undefined;
    get privateKey(): string;
    private _publicKey?;
    get publicKey(): string;
    set publicKey(value: string);
    resetPublicKey(): void;
    get publicKeyInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
