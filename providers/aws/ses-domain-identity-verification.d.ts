import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesDomainIdentityVerificationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html#domain SesDomainIdentityVerification#domain}.
     */
    readonly domain: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html#timeouts SesDomainIdentityVerification#timeouts}
     */
    readonly timeouts?: SesDomainIdentityVerificationTimeouts;
}
export interface SesDomainIdentityVerificationTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html#create SesDomainIdentityVerification#create}.
     */
    readonly create?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html aws_ses_domain_identity_verification}.
 */
export declare class SesDomainIdentityVerification extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_domain_identity_verification.html aws_ses_domain_identity_verification} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SesDomainIdentityVerificationConfig);
    get arn(): string;
    private _domain;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    get id(): string;
    private _timeouts?;
    get timeouts(): SesDomainIdentityVerificationTimeouts;
    set timeouts(value: SesDomainIdentityVerificationTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): SesDomainIdentityVerificationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
