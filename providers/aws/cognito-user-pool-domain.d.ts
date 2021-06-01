import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoUserPoolDomainConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html#certificate_arn CognitoUserPoolDomain#certificate_arn}.
     */
    readonly certificateArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html#domain CognitoUserPoolDomain#domain}.
     */
    readonly domain: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html#user_pool_id CognitoUserPoolDomain#user_pool_id}.
     */
    readonly userPoolId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html aws_cognito_user_pool_domain}.
 */
export declare class CognitoUserPoolDomain extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_domain.html aws_cognito_user_pool_domain} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CognitoUserPoolDomainConfig);
    get awsAccountId(): string;
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    resetCertificateArn(): void;
    get certificateArnInput(): string | undefined;
    get cloudfrontDistributionArn(): string;
    private _domain;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    get id(): string;
    get s3Bucket(): string;
    private _userPoolId;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string;
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
