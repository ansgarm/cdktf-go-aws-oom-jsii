import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaCodeSigningConfigConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#description LambdaCodeSigningConfig#description}.
     */
    readonly description?: string;
    /**
     * allowed_publishers block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}
     */
    readonly allowedPublishers: LambdaCodeSigningConfigAllowedPublishers[];
    /**
     * policies block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#policies LambdaCodeSigningConfig#policies}
     */
    readonly policies?: LambdaCodeSigningConfigPolicies[];
}
export interface LambdaCodeSigningConfigAllowedPublishers {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}.
     */
    readonly signingProfileVersionArns: string[];
}
export interface LambdaCodeSigningConfigPolicies {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}.
     */
    readonly untrustedArtifactOnDeployment: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html aws_lambda_code_signing_config}.
 */
export declare class LambdaCodeSigningConfig extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html aws_lambda_code_signing_config} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LambdaCodeSigningConfigConfig);
    get arn(): string;
    get configId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get lastModified(): string;
    private _allowedPublishers;
    get allowedPublishers(): LambdaCodeSigningConfigAllowedPublishers[];
    set allowedPublishers(value: LambdaCodeSigningConfigAllowedPublishers[]);
    get allowedPublishersInput(): LambdaCodeSigningConfigAllowedPublishers[];
    private _policies?;
    get policies(): LambdaCodeSigningConfigPolicies[];
    set policies(value: LambdaCodeSigningConfigPolicies[]);
    resetPolicies(): void;
    get policiesInput(): LambdaCodeSigningConfigPolicies[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
