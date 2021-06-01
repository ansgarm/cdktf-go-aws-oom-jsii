import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KmsCiphertextConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_ciphertext.html#context KmsCiphertext#context}.
     */
    readonly context?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_ciphertext.html#key_id KmsCiphertext#key_id}.
     */
    readonly keyId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_ciphertext.html#plaintext KmsCiphertext#plaintext}.
     */
    readonly plaintext: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_ciphertext.html aws_kms_ciphertext}.
 */
export declare class KmsCiphertext extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_ciphertext.html aws_kms_ciphertext} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: KmsCiphertextConfig);
    get ciphertextBlob(): string;
    private _context?;
    get context(): {
        [key: string]: string;
    };
    set context(value: {
        [key: string]: string;
    });
    resetContext(): void;
    get contextInput(): {
        [key: string]: string;
    } | undefined;
    get id(): string;
    private _keyId;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string;
    private _plaintext;
    get plaintext(): string;
    set plaintext(value: string);
    get plaintextInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
