import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKmsSecretConfig extends cdktf.TerraformMetaArguments {
    /**
     * secret block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#secret DataAwsKmsSecret#secret}
     */
    readonly secret: DataAwsKmsSecretSecret[];
}
export interface DataAwsKmsSecretSecret {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#context DataAwsKmsSecret#context}.
     */
    readonly context?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#grant_tokens DataAwsKmsSecret#grant_tokens}.
     */
    readonly grantTokens?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#name DataAwsKmsSecret#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html#payload DataAwsKmsSecret#payload}.
     */
    readonly payload: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html aws_kms_secret}.
 */
export declare class DataAwsKmsSecret extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_secret.html aws_kms_secret} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsKmsSecretConfig);
    get id(): string;
    private _secret;
    get secret(): DataAwsKmsSecretSecret[];
    set secret(value: DataAwsKmsSecretSecret[]);
    get secretInput(): DataAwsKmsSecretSecret[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
