import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLambdaCodeSigningConfigConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config.html#arn DataAwsLambdaCodeSigningConfig#arn}.
     */
    readonly arn: string;
}
export declare class DataAwsLambdaCodeSigningConfigAllowedPublishers extends cdktf.ComplexComputedList {
    get signingProfileVersionArns(): string[];
}
export declare class DataAwsLambdaCodeSigningConfigPolicies extends cdktf.ComplexComputedList {
    get untrustedArtifactOnDeployment(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config.html aws_lambda_code_signing_config}.
 */
export declare class DataAwsLambdaCodeSigningConfig extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config.html aws_lambda_code_signing_config} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsLambdaCodeSigningConfigConfig);
    allowedPublishers(index: string): DataAwsLambdaCodeSigningConfigAllowedPublishers;
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get configId(): string;
    get description(): string;
    get id(): string;
    get lastModified(): string;
    policies(index: string): DataAwsLambdaCodeSigningConfigPolicies;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
