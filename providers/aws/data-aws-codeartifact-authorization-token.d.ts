import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCodeartifactAuthorizationTokenConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html#domain DataAwsCodeartifactAuthorizationToken#domain}.
     */
    readonly domain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html#domain_owner DataAwsCodeartifactAuthorizationToken#domain_owner}.
     */
    readonly domainOwner?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html#duration_seconds DataAwsCodeartifactAuthorizationToken#duration_seconds}.
     */
    readonly durationSeconds?: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html aws_codeartifact_authorization_token}.
 */
export declare class DataAwsCodeartifactAuthorizationToken extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html aws_codeartifact_authorization_token} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsCodeartifactAuthorizationTokenConfig);
    get authorizationToken(): string;
    private _domain;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    private _domainOwner?;
    get domainOwner(): string;
    set domainOwner(value: string);
    resetDomainOwner(): void;
    get domainOwnerInput(): string | undefined;
    private _durationSeconds?;
    get durationSeconds(): number;
    set durationSeconds(value: number);
    resetDurationSeconds(): void;
    get durationSecondsInput(): number | undefined;
    get expiration(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
