import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Macie2AccountConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html#finding_publishing_frequency Macie2Account#finding_publishing_frequency}.
     */
    readonly findingPublishingFrequency?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html#status Macie2Account#status}.
     */
    readonly status?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html aws_macie2_account}.
 */
export declare class Macie2Account extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html aws_macie2_account} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: Macie2AccountConfig);
    get createdAt(): string;
    private _findingPublishingFrequency?;
    get findingPublishingFrequency(): string;
    set findingPublishingFrequency(value: string);
    resetFindingPublishingFrequency(): void;
    get findingPublishingFrequencyInput(): string | undefined;
    get id(): string;
    get serviceRole(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    get updatedAt(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
