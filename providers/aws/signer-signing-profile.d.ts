import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SignerSigningProfileConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#name SignerSigningProfile#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#name_prefix SignerSigningProfile#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#platform_id SignerSigningProfile#platform_id}.
     */
    readonly platformId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#tags SignerSigningProfile#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#tags_all SignerSigningProfile#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * signature_validity_period block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#signature_validity_period SignerSigningProfile#signature_validity_period}
     */
    readonly signatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod[];
}
export declare class SignerSigningProfileRevocationRecord extends cdktf.ComplexComputedList {
    get revocationEffectiveFrom(): string;
    get revokedAt(): string;
    get revokedBy(): string;
}
export interface SignerSigningProfileSignatureValidityPeriod {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#type SignerSigningProfile#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html#value SignerSigningProfile#value}.
     */
    readonly value: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html aws_signer_signing_profile}.
 */
export declare class SignerSigningProfile extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/signer_signing_profile.html aws_signer_signing_profile} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SignerSigningProfileConfig);
    get arn(): string;
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
    get platformDisplayName(): string;
    private _platformId;
    get platformId(): string;
    set platformId(value: string);
    get platformIdInput(): string;
    revocationRecord(index: string): SignerSigningProfileRevocationRecord;
    get status(): string;
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
    get version(): string;
    get versionArn(): string;
    private _signatureValidityPeriod?;
    get signatureValidityPeriod(): SignerSigningProfileSignatureValidityPeriod[];
    set signatureValidityPeriod(value: SignerSigningProfileSignatureValidityPeriod[]);
    resetSignatureValidityPeriod(): void;
    get signatureValidityPeriodInput(): SignerSigningProfileSignatureValidityPeriod[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
