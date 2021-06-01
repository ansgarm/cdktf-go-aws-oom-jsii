import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSignerSigningProfileConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html#name DataAwsSignerSigningProfile#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html#tags DataAwsSignerSigningProfile#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsSignerSigningProfileRevocationRecord extends cdktf.ComplexComputedList {
    get revocationEffectiveFrom(): string;
    get revokedAt(): string;
    get revokedBy(): string;
}
export declare class DataAwsSignerSigningProfileSignatureValidityPeriod extends cdktf.ComplexComputedList {
    get type(): string;
    get value(): number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html aws_signer_signing_profile}.
 */
export declare class DataAwsSignerSigningProfile extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/signer_signing_profile.html aws_signer_signing_profile} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsSignerSigningProfileConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get platformDisplayName(): string;
    get platformId(): string;
    revocationRecord(index: string): DataAwsSignerSigningProfileRevocationRecord;
    signatureValidityPeriod(index: string): DataAwsSignerSigningProfileSignatureValidityPeriod;
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
    get version(): string;
    get versionArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
