import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudfrontPublicKeyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html#comment CloudfrontPublicKey#comment}.
     */
    readonly comment?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html#encoded_key CloudfrontPublicKey#encoded_key}.
     */
    readonly encodedKey: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html#name CloudfrontPublicKey#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html#name_prefix CloudfrontPublicKey#name_prefix}.
     */
    readonly namePrefix?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html aws_cloudfront_public_key}.
 */
export declare class CloudfrontPublicKey extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_public_key.html aws_cloudfront_public_key} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CloudfrontPublicKeyConfig);
    get callerReference(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _encodedKey;
    get encodedKey(): string;
    set encodedKey(value: string);
    get encodedKeyInput(): string;
    get etag(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
